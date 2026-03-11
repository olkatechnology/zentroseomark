import { useState, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

type ToolStatus = "idle" | "submitting" | "polling" | "completed" | "error";

interface UseToolPollConfig {
  requestTable: string;
  resultTable: string;
  rpcName: string;
  pollIntervalMs?: number;
  timeoutMs?: number;
}

interface UseToolPollReturn<TResult> {
  submit: (args: Record<string, unknown>) => Promise<void>;
  status: ToolStatus;
  progress: number;
  result: TResult | null;
  error: string | null;
  reset: () => void;
}

export function useToolPoll<TResult = unknown>(
  config: UseToolPollConfig
): UseToolPollReturn<TResult> {
  const {
    requestTable,
    resultTable,
    rpcName,
    pollIntervalMs = 2000,
    timeoutMs = 60000,
  } = config;

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

  const submit = useCallback(
    async (args: Record<string, unknown>) => {
      cleanup();
      setStatus("submitting");
      setProgress(0);
      setResult(null);
      setError(null);

      try {
        const { data: rpcData, error: rpcError } = await supabase.rpc(
          rpcName as never,
          args as never
        );

        if (rpcError) throw new Error(rpcError.message);

        const requestId = rpcData as string;
        if (!requestId) throw new Error("No request ID returned");

        setStatus("polling");

        // Start timeout
        timeoutRef.current = setTimeout(() => {
          cleanup();
          setStatus("error");
          setError("Request timed out. Please try again.");
        }, timeoutMs);

        // Start polling
        intervalRef.current = setInterval(async () => {
          try {
            const { data: reqRow, error: reqError } = await supabase
              .from(requestTable)
              .select("status, progress")
              .eq("id", requestId)
              .single();

            if (reqError) throw new Error(reqError.message);

            if (reqRow?.progress) setProgress(reqRow.progress);

            if (reqRow?.status === "completed") {
              cleanup();
              // Fetch result
              const { data: resultRow, error: resultError } = await supabase
                .from(resultTable)
                .select("*")
                .eq("scan_id", requestId)
                .single();

              if (resultError) throw new Error(resultError.message);

              setResult(resultRow as TResult);
              setStatus("completed");
            } else if (reqRow?.status === "failed") {
              cleanup();
              setStatus("error");
              setError("Scan failed. Please try again.");
            }
          } catch (pollErr) {
            cleanup();
            setStatus("error");
            setError(
              pollErr instanceof Error ? pollErr.message : "Polling error"
            );
          }
        }, pollIntervalMs);
      } catch (err) {
        cleanup();
        setStatus("error");
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    },
    [rpcName, requestTable, resultTable, pollIntervalMs, timeoutMs, cleanup]
  );

  return { submit, status, progress, result, error, reset };
}
