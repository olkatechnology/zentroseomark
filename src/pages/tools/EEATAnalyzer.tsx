import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToolPoll } from "@/hooks/use-tool-poll";
import { getSessionToken } from "@/lib/session-token";
import { motion } from "framer-motion";
import { Loader2, RotateCcw, ShieldCheck, AlertTriangle } from "lucide-react";

interface EEATResult {
  category_scores: any;
  risk_level: string | null;
  top_fixes: any;
  total_issues: number;
  word_count: number | null;
  fix_first_count: number;
  fix_next_count: number;
  optional_count: number;
  source_url: string | null;
  fixes: any;
}

const riskColor: Record<string, string> = {
  low: "text-green-600",
  medium: "text-yellow-600",
  high: "text-destructive",
  critical: "text-destructive",
};

const EEATAnalyzer = () => {
  const [inputType, setInputType] = useState<"url" | "text">("url");
  const [inputValue, setInputValue] = useState("");
  const { submit, status, progress, result, error, reset } = useToolPoll<EEATResult>({
    requestTable: "eeat_scan_requests",
    resultTable: "eeat_scan_results",
  });

  const isLoading = status === "submitting" || status === "polling";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    let content = inputValue.trim();
    if (inputType === "url" && !/^https?:\/\//i.test(content)) content = `https://${content}`;
    submit("create_eeat_scan_request", {
      p_session_token: getSessionToken(),
      p_input_type: inputType,
      p_input_content: content,
    });
  };

  const categoryScores = result?.category_scores && typeof result.category_scores === "object"
    ? (result.category_scores as Record<string, number>)
    : null;

  const topFixes = Array.isArray(result?.top_fixes) ? result.top_fixes : [];

  return (
    <ToolLayout
      toolName="E-E-A-T Content Analyzer"
      toolDescription="Analyze any URL or text for Google's Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) signals."
      metaTitle="Free E-E-A-T Content Analyzer – Check Google Trust Signals | ZentroSEO"
      metaDescription="Analyze your content for E-E-A-T signals. Get category scores, risk level, and actionable fixes to boost your content's trust and authority."
      canonicalPath="/resources/seo-toolkit/eeat-analyzer/"
      showCTA={status === "completed"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Button type="button" variant={inputType === "url" ? "default" : "outline"} size="sm" onClick={() => { setInputType("url"); setInputValue(""); }}>
            URL
          </Button>
          <Button type="button" variant={inputType === "text" ? "default" : "outline"} size="sm" onClick={() => { setInputType("text"); setInputValue(""); }}>
            Paste Text
          </Button>
        </div>

        {inputType === "url" ? (
          <div>
            <Label htmlFor="eeat-url" className="mb-1.5 block">Page URL</Label>
            <Input id="eeat-url" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="e.g. example.com/blog/post" disabled={isLoading} />
          </div>
        ) : (
          <div>
            <Label htmlFor="eeat-text" className="mb-1.5 block">Content</Label>
            <Textarea id="eeat-text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Paste your content here..." rows={6} disabled={isLoading} />
          </div>
        )}

        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading || !inputValue.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            {isLoading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Analyzing…</> : "Analyze E-E-A-T"}
          </Button>
          {(status === "completed" || status === "error") && (
            <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
          )}
        </div>
      </form>

      {isLoading && (
        <div className="mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Analyzing… {progress}%</p>
          <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 rounded-lg border border-destructive/30 bg-destructive/5 text-destructive text-sm">{error}</div>
      )}

      {status === "completed" && result && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 space-y-6">
          {/* Risk + summary */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Risk Level:</span>
              <span className={`font-bold capitalize ${riskColor[result.risk_level || "medium"]}`}>
                {result.risk_level || "Unknown"}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">Total Issues: {result.total_issues}</span>
            {result.word_count && <span className="text-sm text-muted-foreground">Words: {result.word_count}</span>}
          </div>

          {/* Category scores */}
          {categoryScores && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(categoryScores).map(([key, score]) => (
                <div key={key} className="rounded-xl border border-border p-4 text-center">
                  <p className="text-2xl font-bold">{typeof score === "number" ? score : 0}</p>
                  <p className="text-xs text-muted-foreground capitalize">{key.replace(/_/g, " ")}</p>
                </div>
              ))}
            </div>
          )}

          {/* Priority */}
          <div className="flex gap-4 text-sm">
            <span className="font-medium text-destructive">Fix First: {result.fix_first_count}</span>
            <span className="font-medium text-yellow-600">Fix Next: {result.fix_next_count}</span>
            <span className="font-medium text-muted-foreground">Optional: {result.optional_count}</span>
          </div>

          {/* Top fixes */}
          {topFixes.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-display font-bold text-lg">Top Fixes</h3>
              {topFixes.slice(0, 10).map((fix: any, i: number) => (
                <div key={i} className="rounded-lg border border-border p-4 space-y-1">
                  <p className="font-medium text-sm">{fix.title || fix.issue || "Fix"}</p>
                  {fix.description && <p className="text-xs text-muted-foreground">{fix.description}</p>}
                  {fix.recommendation && <p className="text-xs text-primary">{fix.recommendation}</p>}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </ToolLayout>
  );
};

export default EEATAnalyzer;
