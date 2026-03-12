import { useState, useMemo } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ToolCTA from "@/components/tools/ToolCTA";

interface WordFreq {
  word: string;
  count: number;
  density: number;
}

const STOP_WORDS = new Set([
  "the","a","an","and","or","but","in","on","at","to","for","of","with","by","from","is","are","was","were",
  "be","been","being","have","has","had","do","does","did","will","would","shall","should","may","might",
  "can","could","this","that","these","those","it","its","i","you","he","she","we","they","me","him","her",
  "us","them","my","your","his","our","their","not","no","so","if","as","up","out","about","into","than",
]);

function analyze(text: string, targetKeyword: string) {
  const clean = text.toLowerCase().replace(/[^a-z0-9\s'-]/g, " ");
  const words = clean.split(/\s+/).filter((w) => w.length > 1);
  const totalWords = words.length;

  if (totalWords === 0) return { totalWords: 0, topWords: [], targetDensity: 0, targetCount: 0 };

  const freq: Record<string, number> = {};
  words.forEach((w) => {
    if (!STOP_WORDS.has(w)) freq[w] = (freq[w] || 0) + 1;
  });

  const topWords: WordFreq[] = Object.entries(freq)
    .map(([word, count]) => ({ word, count, density: (count / totalWords) * 100 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  let targetCount = 0;
  let targetDensity = 0;
  if (targetKeyword.trim()) {
    const kw = targetKeyword.toLowerCase().trim();
    const re = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
    const matches = text.toLowerCase().match(re);
    targetCount = matches ? matches.length : 0;
    targetDensity = (targetCount / totalWords) * 100;
  }

  return { totalWords, topWords, targetDensity, targetCount };
}

function densityColor(density: number): string {
  if (density >= 1 && density <= 2.5) return "text-green-600";
  if (density > 2.5 && density <= 4) return "text-yellow-600";
  if (density > 4) return "text-destructive";
  return "text-muted-foreground";
}

const KeywordDensityChecker = () => {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const result = useMemo(() => analyze(text, keyword), [text, keyword]);

  const reset = () => { setText(""); setKeyword(""); setAnalyzed(false); };

  return (
    <ToolLayout
      toolName="Keyword Density Checker"
      toolDescription="Analyze keyword frequency and density in your content. Spot over-optimization and find your top terms."
      metaTitle="Keyword Density Checker – Free SEO Tool | ZentroSEO"
      metaDescription="Check keyword density in your content. Find top words, analyze target keyword frequency, and avoid over-optimization. Free SEO keyword density tool."
      canonicalPath="/resources/seo-toolkit/keyword-density-checker/"
    >
      <div className="space-y-5">
        <div>
          <Label>Your Content</Label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your article or page content here..."
            className="min-h-[180px] mt-1"
          />
        </div>

        <div>
          <Label>Target Keyword (optional)</Label>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. keyword research"
            className="mt-1 max-w-sm"
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={() => setAnalyzed(true)} disabled={!text.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
            <Search className="w-4 h-4 mr-1" /> Analyze Density
          </Button>
          <Button variant="outline" onClick={reset}><RotateCcw className="w-4 h-4 mr-1" /> Reset</Button>
        </div>

        <AnimatePresence>
          {analyzed && result.totalWords > 0 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Total Words: {result.totalWords}</Badge>
                {keyword && (
                  <>
                    <Badge variant="outline">
                      "{keyword}": {result.targetCount}x
                    </Badge>
                    <Badge variant="outline" className={densityColor(result.targetDensity)}>
                      Density: {result.targetDensity.toFixed(2)}%
                    </Badge>
                  </>
                )}
              </div>

              {keyword && (
                <Card className="p-4">
                  <h3 className="font-display font-bold mb-2">Target Keyword Density</h3>
                  <div className="flex items-center gap-3">
                    <Progress value={Math.min(result.targetDensity * 20, 100)} className="flex-1" />
                    <span className={`text-sm font-bold ${densityColor(result.targetDensity)}`}>
                      {result.targetDensity.toFixed(2)}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {result.targetDensity < 1 && "Low density. Consider using the keyword more naturally."}
                    {result.targetDensity >= 1 && result.targetDensity <= 2.5 && "Good density range (1–2.5%). Well optimized."}
                    {result.targetDensity > 2.5 && result.targetDensity <= 4 && "Slightly high. May be perceived as keyword stuffing."}
                    {result.targetDensity > 4 && "Too high! Risk of keyword stuffing penalty. Reduce usage."}
                  </p>
                </Card>
              )}

              <Card className="p-4">
                <h3 className="font-display font-bold mb-3">Top 20 Words</h3>
                <div className="space-y-2">
                  {result.topWords.map((w, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-5 text-muted-foreground text-right">{i + 1}.</span>
                      <span className="font-medium w-32 truncate">{w.word}</span>
                      <Progress value={Math.min((w.count / result.topWords[0].count) * 100, 100)} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground w-12 text-right">{w.count}x</span>
                      <span className="text-xs w-16 text-right">{w.density.toFixed(2)}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default KeywordDensityChecker;
