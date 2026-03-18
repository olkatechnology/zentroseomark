import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";
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
const TIMEOUT_MS = 180000;

const TITLE_MAP: Record<string, string> = {
  "Missing meta description": "Your Google shop window text is missing",
  "Missing H1 tag": "Your page headline is missing",
  "Slow page speed": "Your site loads slowly on phones",
  "Missing alt text": "Your images need descriptions for Google",
  "No SSL certificate": "Your security certificate is missing",
  "Broken internal links": "Some of your links go nowhere",
  "Large image files": "Your images are slowing your site down",
  "Duplicate title tags": "Two pages have the same Google title",
};

const plain = (t: string | undefined): string => (t ? TITLE_MAP[t] || t : "");

async function pollAuditStatus(guestToken: string, jobId: string) {
  const { data: job } = await (supabase as any)
    .from("queue_jobs")
    .select("id, status")
    .eq("id", jobId)
    .single();

  if (!job) return { status: "not_found" };
  if (job.status === "failed") return { status: "failed" };
  if (job.status !== "completed") return { status: job.status };

  const { data: audit } = await (supabase as any)
    .from("seo_audits")
    .select("id, seo_score, website_url")
    .eq("guest_token", guestToken)
    .single();

  if (!audit) return { status: "pending" };

  const { data: issues } = await (supabase as any)
    .from("audit_issues")
    .select("title, severity, category")
    .eq("audit_id", audit.id)
    .order("severity", { ascending: false })
    .limit(20);

  const score = audit.seo_score || 0;
  const verdict =
    score >= 70 ? "Easy to Find" :
    score >= 40 ? "Needs Some Work" : "Hard to Find";
  const colour =
    score >= 70 ? "green" :
    score >= 40 ? "amber" : "red";

  const visitorsPerDay = Math.max(1, Math.round(score / 10));
  const potentialPerDay = visitorsPerDay * 3;

  const blocking = issues?.filter((i: any) =>
    i.severity === "critical" || i.severity === "high") || [];
  const opportunity = issues?.filter((i: any) =>
    i.severity === "medium") || [];
  const passing = issues?.filter((i: any) =>
    i.severity === "low" || i.severity === "info") || [];

  return {
    status: "completed",
    audit_id: audit.id,
    verdict,
    colour,
    visitorsPerDay,
    potentialPerDay,
    cards: {
      working: plain(passing[0]?.title) ||
        "Your website is live and Google can reach it",
      blocking: plain(blocking[0]?.title) ||
        "We found some things stopping customers finding you",
      opportunity: plain(opportunity[0]?.title) ||
        "There are quick wins available for your site",
    },
  };
}

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
  const jobIdRef = useRef<string>("");
  const enqueued = useRef(false);

  const prefix = lang === "en" ? "" : `/${lang}`;

  useEffect(() => {
    if (!url) navigate(prefix || "/", { replace: true });
  }, [url, navigate, prefix]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleError = useCallback(() => setStatus("error"), []);

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

        const jobId = data?.job_id || data?.id || "";
        jobIdRef.current = jobId;

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
            const statusData = await pollAuditStatus(token, jobId);
            if (statusData.status === "completed") {
              clearInterval(timer);
              setProgress(100);
              sessionStorage.setItem("zentroseo_scan_result", JSON.stringify(statusData));
              navigate(`${prefix}/results`, { replace: true });
            } else if (statusData.status === "failed" || statusData.status === "not_found") {
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
    navigate(`${prefix}/scan?url=${encodeURIComponent(url || "")}&t=${Date.now()}`, { replace: true });
  };

  if (!url) return null;

  if (status === "error") {
    return (
      <Layout>
        <Helmet>
          <title>Scanning your website – ZentroSEO</title>
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" href={getCanonicalUrl(lang, "/scan/")} />
        </Helmet>
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
      <Helmet>
        <title>Scanning your website – ZentroSEO</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={getCanonicalUrl(lang, "/scan/")} />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center max-w-lg mx-auto px-4 py-16">
          <img src={logo} alt="ZentroSEO" className="h-10 mx-auto mb-10" />
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-scan-pulse">
              <div className="w-10 h-10 rounded-full bg-primary/40" />
            </div>
          </div>
          <div className="mb-8 max-w-xs mx-auto">
            <Progress value={progress} className="h-2 bg-secondary" />
          </div>
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
