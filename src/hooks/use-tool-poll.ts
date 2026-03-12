import { useState, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

type ToolStatus = "idle" | "submitting" | "polling" | "completed" | "error";

interface UseToolPollConfig {
  requestTable: string;
  resultTable: string;
  resultForeignKey?: string; // defaults to "scan_id"
}

interface UseToolPollReturn<TResult> {
  submit: (rpcName: string, rpcArgs: Record<string, unknown>) => Promise<void>;
  status: ToolStatus;
  progress: number;
  result: TResult | null;
  error: string | null;
  reset: () => void;
}

const POLL_INTERVAL = 2000;
const POLL_TIMEOUT = 60000;

export function useToolPoll<TResult = unknown>(
  config: UseToolPollConfig
): UseToolPollReturn<TResult> {
  const [status, setStatus] = useState<ToolStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<TResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;
  }, []);

  const reset = useCallback(() => {
    cleanup();
    setStatus("idle");
    setProgress(0);
    setResult(null);
    setError(null);
  }, [cleanup]);

  const pollForResult = useCallback(
    (requestId: string) => {
      const fk = config.resultForeignKey || "scan_id";

      setStatus("polling");

      timeoutRef.current = setTimeout(() => {
        cleanup();
        setStatus("error");
        setError("Scan timed out. Please try again.");
      }, POLL_TIMEOUT);

      intervalRef.current = setInterval(async () => {
        try {
          const { data: reqData, error: reqErr } = await (supabase as any)
            .from(config.requestTable)
            .select("status, progress, error_message")
            .eq("id", requestId)
            .single();

          if (reqErr) throw reqErr;

          setProgress(reqData.progress ?? 0);

          if (reqData.status === "completed") {
            cleanup();

            const { data: resultData, error: resErr } = await (supabase as any)
              .from(config.resultTable)
              .select("*")
              .eq(fk, requestId)
              .single();

            if (resErr) throw resErr;

            setResult(resultData as TResult);
            setStatus("completed");
          } else if (reqData.status === "failed" || reqData.status === "error") {
            cleanup();
            setStatus("error");
            setError(reqData.error_message || "Scan failed. Please try again.");
          }
        } catch (e: any) {
          cleanup();
          setStatus("error");
          setError(e.message || "An unexpected error occurred.");
        }
      }, POLL_INTERVAL);
    },
    [config, cleanup]
  );

  const submit = useCallback(
    async (rpcName: string, rpcArgs: Record<string, unknown>) => {
      reset();
      setStatus("submitting");

      try {
        const { data, error: rpcErr } = await supabase.rpc(rpcName as any, rpcArgs as any);

        if (rpcErr) throw rpcErr;

        const requestId = data as string;
        if (!requestId) throw new Error("No request ID returned");

        pollForResult(requestId);
      } catch (e: any) {
        setStatus("error");
        setError(e.message || "Failed to submit scan request.");
      }
    },
    [reset, pollForResult]
  );

  return { submit, status, progress, result, error, reset };
}
