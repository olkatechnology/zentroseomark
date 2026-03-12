import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ToolCTA from "@/components/tools/ToolCTA";

const TITLE_PIXEL_LIMIT = 580;
const DESC_CHAR_LIMIT = 160;
const TITLE_CHAR_LIMIT = 60;

const SERPSimulator = () => {
  const [url, setUrl] = useState("https://example.com/your-page");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [favicon, setFavicon] = useState("");
  const [siteName, setSiteName] = useState("");

  const titleLen = title.length;
  const descLen = description.length;

  const displayUrl = (() => {
    try {
      const u = new URL(url);
      const parts = u.pathname.split("/").filter(Boolean);
      return (
        <span className="flex items-center gap-1 text-sm text-[#202124]">
          {favicon && <img src={favicon} alt="" className="w-4 h-4 rounded-full mr-1" />}
          <span className="text-[#202124]">{siteName || u.hostname}</span>
          {parts.length > 0 && (
            <span className="text-[#4d5156]">
              {" › "}{parts.join(" › ")}
            </span>
          )}
        </span>
      );
    } catch {
      return <span className="text-sm text-[#4d5156]">{url}</span>;
    }
  })();

  return (
    <ToolLayout
      toolName="Google SERP Simulator"
      toolDescription="Preview exactly how your page will appear in Google search results. Optimize titles and descriptions for maximum click-through rate."
      metaTitle="Google SERP Simulator – Free SEO Preview Tool | ZentroSEO"
      metaDescription="Free Google SERP simulator. Preview how your page appears in search results. Optimize title tags and meta descriptions for better click-through rates."
      canonicalPath="/resources/seo-toolkit/serp-simulator/"
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Page URL</label>
            <Input placeholder="https://example.com/your-page" value={url} onChange={e => setUrl(e.target.value)} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Title Tag</label>
              <Badge variant={titleLen > TITLE_CHAR_LIMIT ? "destructive" : "outline"} className="text-xs">
                {titleLen}/{TITLE_CHAR_LIMIT} chars
              </Badge>
            </div>
            <Input placeholder="Your Page Title — Brand Name" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Meta Description</label>
              <Badge variant={descLen > DESC_CHAR_LIMIT ? "destructive" : "outline"} className="text-xs">
                {descLen}/{DESC_CHAR_LIMIT} chars
              </Badge>
            </div>
            <Textarea placeholder="A compelling description of your page content..." value={description} onChange={e => setDescription(e.target.value)} rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Site Name (optional)</label>
              <Input placeholder="Example.com" value={siteName} onChange={e => setSiteName(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Date (optional)</label>
              <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Favicon URL (optional)</label>
            <Input placeholder="https://example.com/favicon.ico" value={favicon} onChange={e => setFavicon(e.target.value)} />
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold mb-3">SERP Preview</h2>

          {/* Desktop Preview */}
          <p className="text-xs text-muted-foreground mb-2 font-medium">Desktop</p>
          <Card className="p-5 bg-white border max-w-[600px]">
            <div className="mb-1">{displayUrl}</div>
            <h3
              className="text-xl leading-snug mb-1 cursor-pointer"
              style={{ color: "#1a0dab", fontFamily: "arial, sans-serif" }}
            >
              {title || "Your Page Title"}
              {titleLen > TITLE_CHAR_LIMIT && "..."}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#4d5156", fontFamily: "arial, sans-serif" }}>
              {date && <span className="text-[#70757a]">{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} — </span>}
              {description || "Your meta description will appear here. Write a compelling description to improve click-through rate."}
              {descLen > DESC_CHAR_LIMIT && "..."}
            </p>
          </Card>

          {/* Mobile Preview */}
          <p className="text-xs text-muted-foreground mb-2 mt-6 font-medium">Mobile</p>
          <Card className="p-4 bg-white border max-w-[360px]">
            <div className="mb-1">{displayUrl}</div>
            <h3
              className="text-base leading-snug mb-1 cursor-pointer"
              style={{ color: "#1a0dab", fontFamily: "arial, sans-serif" }}
            >
              {title || "Your Page Title"}
              {titleLen > TITLE_CHAR_LIMIT && "..."}
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "#4d5156", fontFamily: "arial, sans-serif" }}>
              {date && <span className="text-[#70757a]">{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} — </span>}
              {(description || "Your meta description will appear here.").slice(0, 120)}
              {(description || "").length > 120 && "..."}
            </p>
          </Card>
        </div>

        {/* Tips */}
        <Card className="p-4 bg-muted/50">
          <h3 className="font-display text-sm font-bold mb-2">Optimization Tips</h3>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
            {titleLen === 0 && <li>Add a title tag — it's the most important on-page SEO element.</li>}
            {titleLen > TITLE_CHAR_LIMIT && <li className="text-destructive">Title exceeds {TITLE_CHAR_LIMIT} characters and may be truncated in search results.</li>}
            {titleLen > 0 && titleLen <= TITLE_CHAR_LIMIT && <li className="text-green-600">Title length is within the recommended limit. ✓</li>}
            {descLen === 0 && <li>Add a meta description to control what appears in search results.</li>}
            {descLen > DESC_CHAR_LIMIT && <li className="text-destructive">Description exceeds {DESC_CHAR_LIMIT} characters and will likely be truncated.</li>}
            {descLen > 0 && descLen <= DESC_CHAR_LIMIT && <li className="text-green-600">Description length is within the recommended limit. ✓</li>}
          </ul>
        </Card>
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default SERPSimulator;
