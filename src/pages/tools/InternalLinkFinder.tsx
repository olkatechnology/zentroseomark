import { useState } from "react";
import { toolContent } from "@/data/tool-content";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToolPoll } from "@/hooks/use-tool-poll";
import { getSessionToken } from "@/lib/session-token";
import { motion } from "framer-motion";
import { Loader2, RotateCcw, Link2, Tag, Search, Globe } from "lucide-react";

interface InternalLinkResult {
  source_url: string;
  source_title: string | null;
  primary_topic: string | null;
  search_intent: string | null;
  entities: string[] | null;
  pages_crawled: number | null;
  suggestion_count: number | null;
  suggestions: any;
  sitemap_found: boolean | null;
}

const InternalLinkFinder = () => {
  const [url, setUrl] = useState("");
  const { submit, status, progress, result, error, reset } = useToolPoll<InternalLinkResult>({
    requestTable: "internal_link_scan_requests",
    resultTable: "internal_link_scan_results",
  });

  const isLoading = status === "submitting" || status === "polling";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) cleanUrl = `https://${cleanUrl}`;
    submit("create_internal_link_scan_request", {
      p_session_token: getSessionToken(),
      p_url: cleanUrl,
    });
  };

  const suggestions = Array.isArray(result?.suggestions) ? result.suggestions : [];

  return (
    <ToolLayout
      toolName="Internal Linking Finder"
      toolDescription="Discover internal linking opportunities for any page. Get anchor text recommendations based on topic analysis and entity detection."
      metaTitle="Free Internal Linking Finder – SEO Link Suggestions | ZentroSEO"
      metaDescription="Find internal linking opportunities for any URL. Get anchor text recommendations based on NLP topic analysis and entity detection."
      canonicalPath="/resources/seo-toolkit/internal-link-finder/"
      showCTA={status === "completed"}
      {...toolContent["internal-link-finder"]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="url-input" className="mb-1.5 block">Page URL</Label>
          <Input id="url-input" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="e.g. example.com/blog/post" disabled={isLoading} />
        </div>
        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading || !url.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            {isLoading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Scanning…</> : "Find Links"}
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
        <div className="mt-8 p-4 rounded-lg border border-destructive/30 bg-destructive/5 text-destructive text-sm">{error}</div>
      )}

      {status === "completed" && result && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 space-y-6">
          {/* Page info */}
          <div className="rounded-xl border border-border p-5 space-y-3">
            <h3 className="font-display font-bold text-lg">{result.source_title || result.source_url}</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {result.primary_topic && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary">
                  <Tag className="w-3.5 h-3.5" /> {result.primary_topic}
                </span>
              )}
              {result.search_intent && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  <Search className="w-3.5 h-3.5" /> {result.search_intent}
                </span>
              )}
              {result.pages_crawled != null && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  <Globe className="w-3.5 h-3.5" /> {result.pages_crawled} pages crawled
                </span>
              )}
            </div>
            {result.entities && result.entities.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {result.entities.map((e, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{e}</span>
                ))}
              </div>
            )}
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-display font-bold text-lg">
                <Link2 className="w-5 h-5 inline mr-1 text-primary" />
                {result.suggestion_count ?? suggestions.length} Link Suggestions
              </h3>
              {suggestions.slice(0, 20).map((s: any, i: number) => (
                <div key={i} className="rounded-lg border border-border p-4 space-y-1">
                  <p className="font-medium text-sm truncate">{s.target_url || s.url || "Link target"}</p>
                  {s.anchor_text && (
                    <p className="text-xs text-primary">Suggested anchor: "{s.anchor_text}"</p>
                  )}
                  {s.relevance_score != null && (
                    <p className="text-xs text-muted-foreground">Relevance: {s.relevance_score}%</p>
                  )}
                  {s.reason && <p className="text-xs text-muted-foreground">{s.reason}</p>}
                </div>
              ))}
              {suggestions.length > 20 && (
                <p className="text-sm text-muted-foreground text-center">
                  + {suggestions.length - 20} more suggestions. Sign up for the full report.
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}
    </ToolLayout>
  );
};

export default InternalLinkFinder;
