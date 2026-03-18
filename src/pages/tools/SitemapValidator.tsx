import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, XCircle, RotateCcw, Search, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toolContent } from "@/data/tool-content";

interface Issue {
  type: "error" | "warning" | "info";
  message: string;
}

interface ValidationResult {
  valid: boolean;
  urlCount: number;
  urls: string[];
  issues: Issue[];
  hasLastmod: boolean;
  hasPriority: boolean;
  hasChangefreq: boolean;
}

function validateSitemap(xml: string): ValidationResult {
  const issues: Issue[] = [];
  const urls: string[] = [];
  let hasLastmod = false;
  let hasPriority = false;
  let hasChangefreq = false;

  const trimmed = xml.trim();
  if (!trimmed) {
    return { valid: false, urlCount: 0, urls: [], issues: [{ type: "error", message: "No XML content provided." }], hasLastmod: false, hasPriority: false, hasChangefreq: false };
  }

  if (!trimmed.startsWith("<?xml") && !trimmed.startsWith("<urlset") && !trimmed.startsWith("<sitemapindex")) {
    issues.push({ type: "error", message: "Missing XML declaration. Should start with <?xml version=\"1.0\" encoding=\"UTF-8\"?>." });
  }

  if (!trimmed.includes("<urlset") && !trimmed.includes("<sitemapindex")) {
    issues.push({ type: "error", message: "Missing <urlset> or <sitemapindex> root element." });
  }

  if (trimmed.includes("<urlset") && !trimmed.includes("xmlns")) {
    issues.push({ type: "warning", message: "Missing xmlns namespace. Add xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"." });
  }

  // Extract URLs
  const locRegex = /<loc>([\s\S]*?)<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = locRegex.exec(trimmed)) !== null) {
    const url = m[1].trim();
    urls.push(url);
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      issues.push({ type: "error", message: `Invalid URL (not absolute): ${url.slice(0, 80)}` });
    }
    if (url.includes(" ")) {
      issues.push({ type: "error", message: `URL contains spaces: ${url.slice(0, 80)}` });
    }
    if (url.includes("&") && !url.includes("&amp;")) {
      issues.push({ type: "warning", message: `Unescaped "&" in URL: ${url.slice(0, 80)}. Use &amp; instead.` });
    }
  }

  if (urls.length === 0 && trimmed.includes("<urlset")) {
    issues.push({ type: "error", message: "No <loc> elements found inside <urlset>." });
  }

  if (urls.length > 50000) {
    issues.push({ type: "error", message: `Sitemap contains ${urls.length.toLocaleString()} URLs. Maximum is 50,000 per sitemap.` });
  }

  hasLastmod = /<lastmod>/i.test(trimmed);
  hasPriority = /<priority>/i.test(trimmed);
  hasChangefreq = /<changefreq>/i.test(trimmed);

  if (!hasLastmod) issues.push({ type: "info", message: "No <lastmod> dates found. Adding last modified dates helps search engines prioritize crawling." });

  // Check duplicates
  const seen = new Set<string>();
  urls.forEach((u) => {
    if (seen.has(u)) issues.push({ type: "warning", message: `Duplicate URL: ${u.slice(0, 80)}` });
    seen.add(u);
  });

  const valid = !issues.some((i) => i.type === "error");

  if (valid && issues.filter((i) => i.type === "warning").length === 0) {
    issues.unshift({ type: "info", message: "Sitemap XML is valid! No issues found." });
  }

  return { valid, urlCount: urls.length, urls, issues, hasLastmod, hasPriority, hasChangefreq };
}

const SitemapValidator = () => {
  const [xml, setXml] = useState("");
  const [result, setResult] = useState<ValidationResult | null>(null);

  const run = () => setResult(validateSitemap(xml));
  const reset = () => { setXml(""); setResult(null); };

  const tc = toolContent["sitemap-validator"];

  return (
    <ToolLayout
      toolName="Sitemap XML Validator"
      toolDescription="Validate your sitemap.xml for errors, missing elements, and SEO best practices."
      metaTitle="Sitemap XML Validator – Free SEO Tool | ZentroSEO"
      metaDescription="Validate your sitemap.xml file for errors, duplicate URLs, missing elements, and SEO best practices. Free sitemap validation tool."
      canonicalPath="/resources/seo-toolkit/sitemap-validator/"
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
          <Label>Paste Sitemap XML</Label>
          <Textarea
            value={xml}
            onChange={(e) => setXml(e.target.value)}
            placeholder={'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2025-01-01</lastmod>\n  </url>\n</urlset>'}
            className="min-h-[200px] font-mono text-sm mt-1"
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={run} disabled={!xml.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            <Search className="w-4 h-4 mr-1" /> Validate Sitemap
          </Button>
          <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <Badge variant={result.valid ? "default" : "destructive"}>
                  {result.valid ? "✓ Valid" : "✗ Invalid"}
                </Badge>
                <Badge variant="outline"><Link2 className="w-3 h-3 mr-1" /> {result.urlCount} URLs</Badge>
                <Badge variant="outline">{result.hasLastmod ? "✓" : "✗"} lastmod</Badge>
                <Badge variant="outline">{result.hasChangefreq ? "✓" : "✗"} changefreq</Badge>
                <Badge variant="outline">{result.hasPriority ? "✓" : "✗"} priority</Badge>
              </div>

              <Card className="p-5 space-y-3">
                <h2 className="font-display font-bold text-lg">Validation Results</h2>
                {result.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    {issue.type === "error" && <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />}
                    {issue.type === "warning" && <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />}
                    {issue.type === "info" && <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />}
                    <span>{issue.message}</span>
                  </div>
                ))}
              </Card>

              {result.urls.length > 0 && result.urls.length <= 20 && (
                <Card className="p-5">
                  <h3 className="font-display font-bold mb-3">URLs Found</h3>
                  <div className="space-y-1 text-sm">
                    {result.urls.map((u, i) => (
                      <div key={i} className="truncate text-muted-foreground font-mono text-xs">{u}</div>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolLayout>
  );
};

export default SitemapValidator;
