import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Check, Plus, Trash2 } from "lucide-react";
import ToolCTA from "@/components/tools/ToolCTA";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "it", label: "Italian" },
  { code: "pt", label: "Portuguese" },
  { code: "nl", label: "Dutch" },
  { code: "pl", label: "Polish" },
  { code: "sv", label: "Swedish" },
  { code: "tr", label: "Turkish" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "zh", label: "Chinese" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "ru", label: "Russian" },
  { code: "vi", label: "Vietnamese" },
  { code: "th", label: "Thai" },
  { code: "id", label: "Indonesian" },
  { code: "x-default", label: "x-default (fallback)" },
];

interface HreflangEntry {
  lang: string;
  url: string;
}

const HreflangTagGenerator = () => {
  const [entries, setEntries] = useState<HreflangEntry[]>([
    { lang: "en", url: "" },
    { lang: "x-default", url: "" },
  ]);
  const [copied, setCopied] = useState(false);

  const updateEntry = (i: number, field: keyof HreflangEntry, value: string) => {
    const n = [...entries];
    n[i][field] = value;
    setEntries(n);
  };

  const addEntry = () => setEntries([...entries, { lang: "es", url: "" }]);
  const removeEntry = (i: number) => setEntries(entries.filter((_, j) => j !== i));

  const validEntries = entries.filter(e => e.url.trim());

  const generateTags = () =>
    validEntries
      .map(e => `<link rel="alternate" hreflang="${e.lang}" href="${e.url}" />`)
      .join("\n");

  const output = generateTags();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      toolName="Hreflang Tag Generator"
      toolDescription="Generate hreflang tags for multilingual and multi-regional websites to help search engines serve the correct language version."
      metaTitle="Hreflang Tag Generator – Free SEO Tool | ZentroSEO"
      metaDescription="Free hreflang tag generator. Create hreflang link elements for multilingual websites. Ensure Google serves the right language version to the right audience."
      canonicalPath="/resources/seo-toolkit/hreflang-generator/"
    >
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center gap-3">
              <Select value={entry.lang} onValueChange={v => updateEntry(i, "lang", v)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map(l => (
                    <SelectItem key={l.code} value={l.code}>{l.label} ({l.code})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="https://example.com/page"
                value={entry.url}
                onChange={e => updateEntry(i, "url", e.target.value)}
                className="flex-1"
              />
              {entries.length > 1 && (
                <Button variant="ghost" size="icon" onClick={() => removeEntry(i)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addEntry} className="w-full">
          <Plus className="w-4 h-4 mr-1" /> Add Language Version
        </Button>

        {validEntries.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display text-lg font-bold">Generated Hreflang Tags</h2>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                {copied ? "Copied!" : "Copy Tags"}
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap break-all">
              {output}
            </pre>
            <p className="text-xs text-muted-foreground mt-3">
              Paste these tags in the <code className="bg-muted px-1 rounded">&lt;head&gt;</code> section of each language version's page. Every page should include all hreflang tags, including a self-referencing one.
            </p>
          </div>
        )}
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default HreflangTagGenerator;
