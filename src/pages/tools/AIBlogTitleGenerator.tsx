import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { toolContent } from "@/data/tool-content";

const TONES = ["Professional", "Casual", "Clickbait", "Informative", "Listicle", "How-To"];

const AIBlogTitleGenerator = () => {
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [tone, setTone] = useState("Professional");
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generate = async () => {
    if (!topic.trim()) { toast.error("Please enter a topic."); return; }
    setLoading(true);
    setTitles([]);

    try {
      const { data, error } = await supabase.functions.invoke("ai-blog-titles", {
        body: { topic: topic.trim(), keyword: keyword.trim(), tone },
      });

      if (error) throw error;
      if (data?.error) {
        if (data.error.includes("Rate limit") || data.error.includes("429")) {
          toast.error("Rate limit reached. Please try again in a moment.");
        } else if (data.error.includes("402") || data.error.includes("Payment")) {
          toast.error("AI credits exhausted. Please try again later.");
        } else {
          toast.error(data.error);
        }
        return;
      }

      setTitles(data.titles || []);
    } catch (e: any) {
      console.error(e);
      toast.error("Failed to generate titles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyTitle = (title: string, idx: number) => {
    navigator.clipboard.writeText(title);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const tc = toolContent["ai-blog-title-generator"];

  return (
    <ToolLayout
      toolName="AI Blog Title Generator"
      toolDescription="Generate click-worthy, SEO-optimized blog titles powered by AI. Enter a topic and get 10 unique title suggestions."
      metaTitle="AI Blog Title Generator – Free SEO Tool | ZentroSEO"
      metaDescription="Free AI blog title generator. Get 10 click-worthy, SEO-optimized blog title suggestions for any topic. Powered by AI with tone customization."
      canonicalPath="/resources/seo-toolkit/ai-blog-title-generator/"
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
      <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Topic / Subject *</label>
            <Textarea
              placeholder="e.g. How to improve website loading speed for better SEO"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Target Keyword (optional)</label>
              <Input placeholder="e.g. page speed optimization" value={keyword} onChange={e => setKeyword(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Tone / Style</label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {TONES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button
          onClick={generate}
          disabled={loading || !topic.trim()}
          className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full"
        >
          {loading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Sparkles className="w-4 h-4 mr-1" />}
          {loading ? "Generating..." : "Generate Titles"}
        </Button>

        {titles.length > 0 && (
          <div className="space-y-2">
            <h2 className="font-display text-lg font-bold">Generated Titles</h2>
            {titles.map((title, i) => (
              <Card key={i} className="p-3 flex items-center justify-between gap-3">
                <span className="text-sm flex-1">{title}</span>
                <Button variant="ghost" size="icon" onClick={() => copyTitle(title, i)}>
                  {copiedIdx === i ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default AIBlogTitleGenerator;
