import { useState, useMemo } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Type, Hash, Clock, FileText, AlignLeft, LetterText } from "lucide-react";
import { toolContent } from "@/data/tool-content";

function analyze(text: string) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed ? (trimmed.match(/[.!?]+/g) || []).length || (trimmed.length > 0 ? 1 : 0) : 0;
  const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 225));
  const speakingTime = Math.max(1, Math.ceil(words / 150));
  const avgWordLength = words > 0 ? (charactersNoSpaces / words).toFixed(1) : "0";

  return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTime, speakingTime, avgWordLength };
}

const stats = [
  { key: "words", label: "Words", icon: Type },
  { key: "characters", label: "Characters", icon: Hash },
  { key: "charactersNoSpaces", label: "Chars (no spaces)", icon: LetterText },
  { key: "sentences", label: "Sentences", icon: AlignLeft },
  { key: "paragraphs", label: "Paragraphs", icon: FileText },
  { key: "readingTime", label: "Reading Time (min)", icon: Clock },
] as const;

const WordCounter = () => {
  const [text, setText] = useState("");
  const data = useMemo(() => analyze(text), [text]);

  const tc = toolContent["word-counter"];

  return (
    <ToolLayout
      toolName="Word Counter & Text Analyzer"
      toolDescription="Count words, characters, sentences, and estimate reading time instantly."
      metaTitle="Word Counter & Text Analyzer – Free SEO Tool | ZentroSEO"
      metaDescription="Free word counter tool. Count words, characters, sentences, paragraphs, and estimate reading time for your content. Optimize content length for SEO."
      canonicalPath="/resources/seo-toolkit/word-counter/"
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
      <Textarea
        placeholder="Paste or type your text here..."
        className="min-h-[200px] text-base mb-6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => {
          const Icon = s.icon;
          const value = data[s.key];
          return (
            <Card key={s.key} className="p-4 flex flex-col items-center text-center gap-1">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
        <Badge variant="outline">Speaking Time: ~{data.speakingTime} min</Badge>
        <Badge variant="outline">Avg Word Length: {data.avgWordLength} chars</Badge>
      </div>
    </ToolLayout>
  );
};

export default WordCounter;
