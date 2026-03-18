import { useState } from "react";
import { toolContent } from "@/data/tool-content";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToolPoll } from "@/hooks/use-tool-poll";
import { getSessionToken } from "@/lib/session-token";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Globe, Loader2, RotateCcw, Server, Zap } from "lucide-react";

interface FixScanResult {
  total_issues: number | null;
  critical_issues: number | null;
  fix_first_count: number | null;
  fix_next_count: number | null;
  optional_count: number | null;
  fixes: any;
  detected_cms: string | null;
  hosting_provider: string | null;
  load_time_ms: number | null;
  pages_scanned: number | null;
  scan_id: string;
}

const severityBadge = (severity: string) => {
  const map: Record<string, string> = {
    critical: "bg-destructive/10 text-destructive",
    high: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return map[severity] || "bg-muted text-muted-foreground";
};

const WebsiteFixScanner = () => {
  const [url, setUrl] = useState("");
  const { submit, status, progress, result, error, reset } = useToolPoll<FixScanResult>({
    requestTable: "fix_scan_requests",
    resultTable: "fix_scan_results",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) cleanUrl = `https://${cleanUrl}`;
    submit("create_fix_scan_request", {
      p_session_token: getSessionToken(),
      p_url: cleanUrl,
    });
  };

  const fixes = Array.isArray(result?.fixes) ? result.fixes : [];
  const isLoading = status === "submitting" || status === "polling";

  return (
    <ToolLayout
      toolName="Website Fix Scanner"
      toolDescription="Scan any website for critical SEO issues and get prioritized fix recommendations. Detects CMS, hosting, load time, and more."
      metaTitle="Free Website Fix Scanner – Find & Fix SEO Issues | ZentroSEO"
      metaDescription="Scan any website for SEO issues and get prioritized, actionable fix recommendations. Detects CMS, hosting, speed issues, and more."
      canonicalPath="/resources/seo-toolkit/website-fix-scanner/"
      showCTA={status === "completed"}
      {...toolContent["website-fix-scanner"]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="url-input" className="mb-1.5 block">Website URL</Label>
          <Input
            id="url-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. example.com"
            disabled={isLoading}
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading || !url.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            {isLoading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Scanning…</> : "Scan Website"}
          </Button>
          {(status === "completed" || status === "error") && (
            <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
          )}
        </div>
      </form>

      {isLoading && (
        <div className="mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Scanning… {progress}%</p>
          <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 rounded-lg border border-destructive/30 bg-destructive/5 text-destructive text-sm">
          {error}
        </div>
      )}

      {status === "completed" && result && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 space-y-6">
          {/* Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Issues", value: result.total_issues ?? 0, icon: AlertTriangle },
              { label: "Critical", value: result.critical_issues ?? 0, icon: Zap },
              { label: "Pages Scanned", value: result.pages_scanned ?? 0, icon: Globe },
              { label: "Load Time", value: result.load_time_ms ? `${result.load_time_ms}ms` : "N/A", icon: Server },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-border p-4 text-center">
                <s.icon className="w-5 h-5 mx-auto mb-1.5 text-primary" />
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Meta */}
          {(result.detected_cms || result.hosting_provider) && (
            <div className="flex flex-wrap gap-3 text-sm">
              {result.detected_cms && (
                <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">CMS: {result.detected_cms}</span>
              )}
              {result.hosting_provider && (
                <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Host: {result.hosting_provider}</span>
              )}
            </div>
          )}

          {/* Priority breakdown */}
          <div className="flex gap-4 text-sm">
            <span className="font-medium text-destructive">Fix First: {result.fix_first_count ?? 0}</span>
            <span className="font-medium text-yellow-600">Fix Next: {result.fix_next_count ?? 0}</span>
            <span className="font-medium text-muted-foreground">Optional: {result.optional_count ?? 0}</span>
          </div>

          {/* Fixes list */}
          {fixes.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-display font-bold text-lg">Issues Found</h3>
              {fixes.slice(0, 20).map((fix: any, i: number) => (
                <div key={i} className="rounded-lg border border-border p-4 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-sm">{fix.title || fix.issue || "Issue"}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${severityBadge(fix.severity || "medium")}`}>
                      {fix.severity || "medium"}
                    </span>
                  </div>
                  {fix.description && <p className="text-xs text-muted-foreground">{fix.description}</p>}
                  {fix.recommendation && <p className="text-xs text-primary">{fix.recommendation}</p>}
                </div>
              ))}
              {fixes.length > 20 && (
                <p className="text-sm text-muted-foreground text-center">
                  + {fixes.length - 20} more issues. Sign up for the full report.
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}
    </ToolLayout>
  );
};

export default WebsiteFixScanner;
