import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ToolCTA from "@/components/tools/ToolCTA";

const AIMetaDescriptionGenerator = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [content, setContent] = useState("");
  const [keyword, setKeyword] = useState("");
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generate = async () => {
    if (!pageTitle.trim() && !content.trim()) {
      toast.error("Please enter a page title or content.");
      return;
    }
    setLoading(true);
    setDescriptions([]);

    try {
      const { data, error } = await supabase.functions.invoke("ai-meta-descriptions", {
        body: { pageTitle: pageTitle.trim(), content: content.trim(), keyword: keyword.trim() },
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

      setDescriptions(data.descriptions || []);
    } catch (e: any) {
      console.error(e);
      toast.error("Failed to generate descriptions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <ToolLayout
      toolName="AI Meta Description Generator"
      toolDescription="Generate compelling, SEO-optimized meta descriptions powered by AI. Improve click-through rates from search results."
      metaTitle="AI Meta Description Generator – Free SEO Tool | ZentroSEO"
      metaDescription="Free AI meta description generator. Create compelling, SEO-optimized meta descriptions from your page title or content. Boost CTR from search results."
      canonicalPath="/resources/seo-toolkit/ai-meta-description-generator/"
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Page Title *</label>
            <Input
              placeholder="e.g. Complete Guide to Technical SEO Audits in 2025"
              value={pageTitle}
              onChange={e => setPageTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Page Content (optional, for better results)</label>
            <Textarea
              placeholder="Paste a summary or excerpt of your page content..."
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Target Keyword (optional)</label>
            <Input placeholder="e.g. technical SEO audit" value={keyword} onChange={e => setKeyword(e.target.value)} />
          </div>
        </div>

        <Button
          onClick={generate}
          disabled={loading || (!pageTitle.trim() && !content.trim())}
          className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full"
        >
          {loading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Sparkles className="w-4 h-4 mr-1" />}
          {loading ? "Generating..." : "Generate Descriptions"}
        </Button>

        {descriptions.length > 0 && (
          <div className="space-y-2">
            <h2 className="font-display text-lg font-bold">Generated Meta Descriptions</h2>
            {descriptions.map((desc, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm mb-2">{desc}</p>
                    <Badge variant={desc.length > 160 ? "destructive" : "outline"} className="text-xs">
                      {desc.length}/160 chars
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => copy(desc, i)}>
                    {copiedIdx === i ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default AIMetaDescriptionGenerator;
