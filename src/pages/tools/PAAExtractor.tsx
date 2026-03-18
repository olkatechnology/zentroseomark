import { useState } from "react";
import { toolContent } from "@/data/tool-content";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToolPoll } from "@/hooks/use-tool-poll";
import { getSessionToken } from "@/lib/session-token";
import { motion } from "framer-motion";
import { Loader2, RotateCcw, Copy, Check, HelpCircle } from "lucide-react";

interface PAAResult {
  keyword: string;
  country: string;
  questions: any;
  question_count: number | null;
  data_source: string | null;
}

const COUNTRIES = [
  { code: "us", label: "United States" },
  { code: "gb", label: "United Kingdom" },
  { code: "ca", label: "Canada" },
  { code: "au", label: "Australia" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "es", label: "Spain" },
  { code: "nl", label: "Netherlands" },
  { code: "in", label: "India" },
  { code: "ng", label: "Nigeria" },
];

const PAAExtractor = () => {
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("us");
  const [copied, setCopied] = useState<number | null>(null);

  const { submit, status, progress, result, error, reset } = useToolPoll<PAAResult>({
    requestTable: "paa_extraction_requests",
    resultTable: "paa_extraction_results",
  });

  const isLoading = status === "submitting" || status === "polling";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    submit("create_paa_extraction_request", {
      p_session_token: getSessionToken(),
      p_keyword: keyword.trim(),
      p_country: country,
    });
  };

  const questions: string[] = Array.isArray(result?.questions)
    ? result.questions
    : [];

  const copyQuestion = (q: string, idx: number) => {
    navigator.clipboard.writeText(q);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(questions.join("\n"));
    setCopied(-1);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <ToolLayout
      toolName="People Also Ask Extractor"
      toolDescription="Extract 'People Also Ask' questions from Google for any keyword and country. Great for content planning and FAQ schema."
      metaTitle="Free PAA Extractor – People Also Ask Questions | ZentroSEO"
      metaDescription="Extract People Also Ask questions from Google for any keyword. Use them for content ideas, FAQ schema, and featured snippet targeting."
      canonicalPath="/resources/seo-toolkit/paa-extractor/"
      showCTA={status === "completed"}
      {...toolContent["paa-extractor"]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="kw-input" className="mb-1.5 block">Keyword</Label>
          <Input id="kw-input" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. best seo tools" disabled={isLoading} />
        </div>
        <div>
          <Label htmlFor="country-select" className="mb-1.5 block">Country</Label>
          <select
            id="country-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            disabled={isLoading}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading || !keyword.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            {isLoading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Extracting…</> : "Extract Questions"}
          </Button>
          {(status === "completed" || status === "error") && (
            <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
          )}
        </div>
      </form>

      {isLoading && (
        <div className="mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Extracting… {progress}%</p>
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
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-display font-bold text-lg">
              <HelpCircle className="w-5 h-5 inline mr-1 text-primary" />
              {result.question_count ?? questions.length} Questions Found
            </h3>
            {questions.length > 0 && (
              <Button variant="outline" size="sm" onClick={copyAll}>
                {copied === -1 ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                {copied === -1 ? "Copied!" : "Copy All"}
              </Button>
            )}
          </div>

          {result.data_source && (
            <p className="text-xs text-muted-foreground">Source: {result.data_source}</p>
          )}

          <div className="space-y-2">
            {questions.map((q: string, i: number) => (
              <div key={i} className="flex items-center justify-between gap-2 rounded-lg border border-border p-3">
                <p className="text-sm">{q}</p>
                <button onClick={() => copyQuestion(q, i)} className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                  {copied === i ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </ToolLayout>
  );
};

export default PAAExtractor;
