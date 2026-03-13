import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { useLang } from "@/hooks/use-lang";
import logo from "@/assets/zentroseo-logo.png";

const MESSAGES = [
  "🔍 Checking if Google can find your pages...",
  "📱 Seeing how your site looks on a phone...",
  "🖼️ Checking your images and page headlines...",
  "⚡ Testing how fast your pages load...",
  "🔗 Looking at what customers see when they find you...",
  "📊 Almost done — putting your results together...",
  "🎯 Just finishing up — this one is thorough...",
];

const POLL_INTERVAL = 3000;
const TIMEOUT_MS = 90000;

const ScanPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const url = searchParams.get("url");

  const [status, setStatus] = useState<"scanning" | "error">("scanning");
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(5);
  const pollCount = useRef(0);
  const startTime = useRef(Date.now());
  const guestTokenRef = useRef<string>("");
  const enqueued = useRef(false);

  const prefix = lang === "en" ? "" : `/${lang}`;

  // Redirect home if no url
  useEffect(() => {
    if (!url) navigate(prefix || "/", { replace: true });
  }, [url, navigate, prefix]);

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleError = useCallback(() => setStatus("error"), []);

  // Enqueue + poll
  useEffect(() => {
    if (!url || enqueued.current) return;
    enqueued.current = true;

    const token = crypto.randomUUID();
    guestTokenRef.current = token;
    sessionStorage.setItem("zentroseo_guest_token", token);
    sessionStorage.setItem("zentroseo_scan_url", url);

    let cancelled = false;
    let timer: ReturnType<typeof setInterval>;

    const enqueue = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("enqueue-guest-audit", {
          body: { url, guest_token: token },
        });
        if (error || data?.error) { handleError(); return; }

        // Start polling
        timer = setInterval(async () => {
          if (cancelled) return;
          pollCount.current += 1;
          setProgress((prev) => Math.min(95, prev + 1));

          if (Date.now() - startTime.current > TIMEOUT_MS) {
            clearInterval(timer);
            handleError();
            return;
          }

          try {
            const { data: statusData, error: statusErr } = await supabase.functions.invoke("get-guest-audit-status", {
              body: { guest_token: token },
            });
            if (statusErr) return;
            if (statusData?.status === "completed") {
              clearInterval(timer);
              setProgress(100);
              sessionStorage.setItem("zentroseo_scan_result", JSON.stringify(statusData));
              navigate(`${prefix}/results`, { replace: true });
            } else if (statusData?.status === "failed") {
              clearInterval(timer);
              handleError();
            }
          } catch {
            // Silently retry on next poll
          }
        }, POLL_INTERVAL);
      } catch {
        handleError();
      }
    };

    enqueue();
    return () => { cancelled = true; clearInterval(timer); };
  }, [url, navigate, prefix, handleError]);

  const handleRetry = () => {
    enqueued.current = false;
    pollCount.current = 0;
    startTime.current = Date.now();
    setProgress(5);
    setStatus("scanning");
    // Re-trigger by navigating to same page
    navigate(`${prefix}/scan?url=${encodeURIComponent(url || "")}&t=${Date.now()}`, { replace: true });
  };

  if (!url) return null;

  if (status === "error") {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <p className="text-xl font-semibold text-foreground mb-2">Something went wrong checking your site.</p>
            <p className="text-muted-foreground mb-8">It might be temporarily unavailable — try again in a moment.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleRetry} className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-6">
                Try again
              </Button>
              <Button variant="outline" asChild>
                <a href={`https://app.zentroseo.com/signup?url=${encodeURIComponent(url)}`}>
                  Sign up anyway →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center max-w-lg mx-auto px-4 py-16">
          <img src={logo} alt="ZentroSEO" className="h-10 mx-auto mb-10" />

          {/* Pulsing circle */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-scan-pulse">
              <div className="w-10 h-10 rounded-full bg-primary/40" />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8 max-w-xs mx-auto">
            <Progress value={progress} className="h-2 bg-secondary" />
          </div>

          {/* Rotating message */}
          <p className="text-lg font-medium text-foreground mb-4 min-h-[2rem]">
            {MESSAGES[messageIndex]}
          </p>

          <p className="text-sm text-muted-foreground">
            Checking {url}...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ScanPage;
