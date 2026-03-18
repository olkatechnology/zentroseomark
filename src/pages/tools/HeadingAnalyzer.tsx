import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, XCircle, RotateCcw, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toolContent } from "@/data/tool-content";

interface Heading {
  level: number;
  text: string;
  charCount: number;
}

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
}

function analyzeHeadings(html: string): { headings: Heading[]; issues: Issue[] } {
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const headings: Heading[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    headings.push({ level: parseInt(match[1]), text, charCount: text.length });
  }

  const issues: Issue[] = [];

  if (headings.length === 0) {
    issues.push({ type: "error", message: "No headings found. Paste HTML content with <h1>–<h6> tags." });
    return { headings, issues };
  }

  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length === 0) issues.push({ type: "error", message: "Missing H1 tag. Every page should have exactly one H1." });
  if (h1s.length > 1) issues.push({ type: "warning", message: `Multiple H1 tags found (${h1s.length}). Use only one H1 per page.` });

  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level > headings[i - 1].level + 1) {
      issues.push({
        type: "warning",
        message: `Skipped heading level: H${headings[i - 1].level} → H${headings[i].level} ("${headings[i].text.slice(0, 40)}…")`,
      });
    }
  }

  headings.forEach((h) => {
    if (h.charCount > 70) {
      issues.push({ type: "info", message: `H${h.level} is long (${h.charCount} chars): "${h.text.slice(0, 50)}…"` });
    }
    if (h.charCount < 5) {
      issues.push({ type: "warning", message: `H${h.level} is very short (${h.charCount} chars): "${h.text}"` });
    }
  });

  if (issues.length === 0) {
    issues.push({ type: "info", message: "Heading structure looks good! No issues detected." });
  }

  return { headings, issues };
}

const LEVEL_COLORS: Record<number, string> = {
  1: "bg-primary text-primary-foreground",
  2: "bg-primary/80 text-primary-foreground",
  3: "bg-primary/60 text-primary-foreground",
  4: "bg-primary/40 text-primary-foreground",
  5: "bg-primary/25 text-foreground",
  6: "bg-primary/15 text-foreground",
};

const HeadingAnalyzer = () => {
  const [html, setHtml] = useState("");
  const [result, setResult] = useState<{ headings: Heading[]; issues: Issue[] } | null>(null);

  const run = () => setResult(analyzeHeadings(html));
  const reset = () => { setHtml(""); setResult(null); };

  const tc = toolContent["heading-analyzer"];

  return (
    <ToolLayout
      toolName="Heading Structure Analyzer"
      toolDescription="Analyze your page's heading hierarchy (H1–H6) for SEO best practices and accessibility."
      metaTitle="Heading Analyzer – Check H1-H6 Structure | ZentroSEO"
      metaDescription="Free heading analyzer tool. Check your page's H1-H6 heading hierarchy for SEO issues, skipped levels, and missing H1 tags. Improve your content structure."
      canonicalPath="/resources/seo-toolkit/heading-analyzer/"
      howToUse={tc.howToUse}
      whatIs={tc.whatIs}
      whatIsTitle={tc.whatIsTitle}
      whyMatters={tc.whyMatters}
      whyMattersTitle={tc.whyMattersTitle}
      faqs={tc.faqs}
      relatedTools={tc.relatedTools}
      showCTA
      ctaHeadline={tc.ctaHeadline}
      ctaSubtitle={tc.ctaSubtitle}
    >
      <div className="space-y-5">
        <div>
          <Label>Paste HTML Content</Label>
          <Textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder={'<h1>Main Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>\n...'}
            className="min-h-[160px] font-mono text-sm mt-1"
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={run} disabled={!html.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            <Search className="w-4 h-4 mr-1" /> Analyze Headings
          </Button>
          <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              {/* Issues */}
              <Card className="p-5 space-y-3">
                <h2 className="font-display font-bold text-lg">Issues & Recommendations</h2>
                {result.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    {issue.type === "error" && <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />}
                    {issue.type === "warning" && <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />}
                    {issue.type === "info" && <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />}
                    <span>{issue.message}</span>
                  </div>
                ))}
              </Card>

              {/* Heading tree */}
              {result.headings.length > 0 && (
                <Card className="p-5 space-y-2">
                  <h2 className="font-display font-bold text-lg mb-3">Heading Hierarchy</h2>
                  {result.headings.map((h, i) => (
                    <div key={i} className="flex items-center gap-2" style={{ paddingLeft: `${(h.level - 1) * 20}px` }}>
                      <Badge className={LEVEL_COLORS[h.level]}>H{h.level}</Badge>
                      <span className="text-sm truncate">{h.text}</span>
                      <span className="text-xs text-muted-foreground ml-auto shrink-0">{h.charCount} chars</span>
                    </div>
                  ))}
                </Card>
              )}

              {/* Summary */}
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6].map((level) => {
                  const count = result.headings.filter((h) => h.level === level).length;
                  return count > 0 ? (
                    <Badge key={level} variant="outline">H{level}: {count}</Badge>
                  ) : null;
                })}
                <Badge variant="outline">Total: {result.headings.length}</Badge>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolLayout>
  );
};

export default HeadingAnalyzer;
