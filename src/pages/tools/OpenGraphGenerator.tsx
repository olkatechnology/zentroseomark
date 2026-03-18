import { useState, useCallback } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Eye } from "lucide-react";
import { toast } from "sonner";
import { toolContent } from "@/data/tool-content";

const OG_TYPES = ["website", "article", "product", "profile", "video.other", "music.song"] as const;

const OpenGraphGenerator = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [ogType, setOgType] = useState<string>("website");
  const [twitterCard, setTwitterCard] = useState<string>("summary_large_image");
  const [twitterSite, setTwitterSite] = useState("");
  const [locale, setLocale] = useState("en_US");

  const generateTags = useCallback(() => {
    const tags: string[] = [];
    if (title) tags.push(`<meta property="og:title" content="${title}" />`);
    if (description) tags.push(`<meta property="og:description" content="${description}" />`);
    if (url) tags.push(`<meta property="og:url" content="${url}" />`);
    if (imageUrl) tags.push(`<meta property="og:image" content="${imageUrl}" />`);
    if (siteName) tags.push(`<meta property="og:site_name" content="${siteName}" />`);
    tags.push(`<meta property="og:type" content="${ogType}" />`);
    tags.push(`<meta property="og:locale" content="${locale}" />`);
    tags.push("");
    tags.push(`<meta name="twitter:card" content="${twitterCard}" />`);
    if (title) tags.push(`<meta name="twitter:title" content="${title}" />`);
    if (description) tags.push(`<meta name="twitter:description" content="${description}" />`);
    if (imageUrl) tags.push(`<meta name="twitter:image" content="${imageUrl}" />`);
    if (twitterSite) tags.push(`<meta name="twitter:site" content="${twitterSite}" />`);
    return tags.join("\n");
  }, [title, description, url, imageUrl, siteName, ogType, twitterCard, twitterSite, locale]);

  const copy = () => {
    navigator.clipboard.writeText(generateTags());
    toast.success("Tags copied to clipboard!");
  };

  const content = toolContent["open-graph-generator"];

  return (
    <ToolLayout
      toolName="Open Graph Meta Tag Generator"
      toolDescription="Generate Open Graph and Twitter Card meta tags for perfect social media sharing previews."
      metaTitle="Open Graph Meta Tag Generator – Free SEO Tool | ZentroSEO"
      metaDescription="Generate Open Graph (OG) and Twitter Card meta tags for your website. Preview how your content will look when shared on social media. Free tool."
      canonicalPath="/resources/seo-toolkit/open-graph-generator/"
      howToUse={content.howToUse}
      whatIs={content.whatIs}
      whatIsTitle={content.whatIsTitle}
      whyMatters={content.whyMatters}
      whyMattersTitle={content.whyMattersTitle}
      faqs={content.faqs}
      relatedTools={content.relatedTools}
      showCTA
      ctaHeadline={content.ctaHeadline}
      ctaSubtitle={content.ctaSubtitle}
    >
      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Page Title *</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="My Awesome Page" className="mt-1" />
          </div>
          <div>
            <Label>Site Name</Label>
            <Input value={siteName} onChange={(e) => setSiteName(e.target.value)} placeholder="My Website" className="mt-1" />
          </div>
        </div>

        <div>
          <Label>Description</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A brief description of your page..." className="mt-1" rows={3} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Page URL</Label>
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/page" className="mt-1" />
          </div>
          <div>
            <Label>Image URL</Label>
            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/image.jpg" className="mt-1" />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <Label>OG Type</Label>
            <Select value={ogType} onValueChange={setOgType}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                {OG_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Twitter Card</Label>
            <Select value={twitterCard} onValueChange={setTwitterCard}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="summary_large_image">summary_large_image</SelectItem>
                <SelectItem value="summary">summary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Locale</Label>
            <Input value={locale} onChange={(e) => setLocale(e.target.value)} placeholder="en_US" className="mt-1" />
          </div>
        </div>

        <div>
          <Label>Twitter @handle</Label>
          <Input value={twitterSite} onChange={(e) => setTwitterSite(e.target.value)} placeholder="@yoursite" className="mt-1 max-w-xs" />
        </div>

        {/* Preview */}
        {title && (
          <Card className="p-0 overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Eye className="w-3.5 h-3.5" /> Social Share Preview
            </div>
            {imageUrl && <img src={imageUrl} alt="OG Preview" className="w-full h-48 object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />}
            <div className="p-4">
              <p className="text-xs text-muted-foreground uppercase">{url ? new URL(url).hostname : "example.com"}</p>
              <h3 className="font-bold text-foreground line-clamp-2">{title}</h3>
              {description && <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>}
            </div>
          </Card>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>Generated Meta Tags</Label>
            <Button size="sm" onClick={copy}><Copy className="w-3 h-3 mr-1" /> Copy</Button>
          </div>
          <Textarea readOnly value={generateTags()} className="min-h-[200px] font-mono text-xs" />
        </div>
      </div>
    </ToolLayout>
  );
};

export default OpenGraphGenerator;
