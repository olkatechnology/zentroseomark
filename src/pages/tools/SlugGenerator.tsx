import { useState, useMemo } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, RefreshCw } from "lucide-react";
import ToolCTA from "@/components/tools/ToolCTA";

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "that", "this", "are", "was",
  "were", "be", "been", "being", "have", "has", "had", "do", "does",
  "did", "will", "would", "could", "should", "may", "might", "can",
  "shall", "not", "so", "if", "than", "too", "very", "just", "about",
  "up", "out", "how", "what", "which", "who", "when", "where", "why",
]);

function generateSlug(text: string, removeStopWords: boolean, maxLength: number): string {
  let slug = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .trim();

  let words = slug.split(/\s+/).filter(Boolean);
  if (removeStopWords) words = words.filter(w => !STOP_WORDS.has(w));

  slug = words.join("-").replace(/-+/g, "-");

  if (maxLength > 0 && slug.length > maxLength) {
    slug = slug.slice(0, maxLength).replace(/-$/, "");
  }

  return slug;
}

const SlugGenerator = () => {
  const [title, setTitle] = useState("");
  const [removeStopWords, setRemoveStopWords] = useState(true);
  const [maxLength, setMaxLength] = useState(75);
  const [copied, setCopied] = useState(false);

  const slug = useMemo(() => generateSlug(title, removeStopWords, maxLength), [title, removeStopWords, maxLength]);

  const fullUrl = `https://example.com/${slug}`;

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tips: string[] = [];
  if (slug.length > 75) tips.push("Slug is longer than 75 characters — consider shortening it.");
  if (slug.split("-").length > 8) tips.push("Slug has many words. Shorter slugs tend to rank better.");
  if (slug && slug.length <= 75 && slug.split("-").length <= 8) tips.push("Slug length and word count look good. ✓");

  return (
    <ToolLayout
      toolName="SEO-Friendly URL Slug Generator"
      toolDescription="Convert any title or text into a clean, SEO-optimized URL slug. Remove stop words, special characters, and control length."
      metaTitle="SEO-Friendly URL Slug Generator – Free Tool | ZentroSEO"
      metaDescription="Free URL slug generator. Convert titles to clean, SEO-friendly slugs. Remove stop words, diacritics, and special characters for better search rankings."
      canonicalPath="/resources/seo-toolkit/slug-generator/"
    >
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-1 block">Title or Text</label>
          <Input
            placeholder="e.g. How to Build a Topical Map for SEO in 2025"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="text-base"
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopWords}
              onChange={e => setRemoveStopWords(e.target.checked)}
              className="rounded border-input"
            />
            Remove stop words
          </label>
          <div className="flex items-center gap-2">
            <label className="text-sm">Max length:</label>
            <Input
              type="number"
              value={maxLength}
              onChange={e => setMaxLength(Number(e.target.value))}
              className="w-20"
              min={0}
            />
          </div>
        </div>

        {slug && (
          <>
            <Card className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display text-lg font-bold">Generated Slug</h2>
                <Button variant="outline" size="sm" onClick={() => copy(slug)}>
                  {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              <code className="block bg-muted p-3 rounded text-sm font-mono break-all">
                /{slug}
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                Full URL preview: <span className="font-mono">{fullUrl}</span>
              </p>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{slug.length} characters</Badge>
              <Badge variant="outline">{slug.split("-").filter(Boolean).length} words</Badge>
            </div>

            {tips.length > 0 && (
              <Card className="p-4 bg-muted/50">
                <h3 className="font-display text-sm font-bold mb-2">SEO Tips</h3>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  {tips.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </Card>
            )}
          </>
        )}
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default SlugGenerator;
