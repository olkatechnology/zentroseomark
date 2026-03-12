import { useState, useCallback, useRef, useEffect } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import ToolCTA from "@/components/tools/ToolCTA";

const TITLE_PX_LIMIT = 580;
const TITLE_CHAR_LIMIT = 60;
const DESC_PX_LIMIT = 920;
const DESC_CHAR_LIMIT = 160;

function measurePixelWidth(text: string, font: string): number {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 0;
  ctx.font = font;
  return Math.round(ctx.measureText(text).width);
}

function getBarColor(value: number, limit: number) {
  const ratio = value / limit;
  if (ratio <= 0.85) return "bg-green-500";
  if (ratio <= 1) return "bg-yellow-500";
  return "bg-destructive";
}

function PassFail({ pass }: { pass: boolean }) {
  return pass ? (
    <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
      <CheckCircle2 className="w-4 h-4" /> Pass
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-destructive text-sm font-medium">
      <XCircle className="w-4 h-4" /> Too long
    </span>
  );
}

const TitleMetaChecker = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const [titlePx, setTitlePx] = useState(0);
  const [descPx, setDescPx] = useState(0);

  const analyze = useCallback(() => {
    setTitlePx(measurePixelWidth(title, "20px Arial"));
    setDescPx(measurePixelWidth(desc, "14px Arial"));
    setAnalyzed(true);
  }, [title, desc]);

  const reset = () => {
    setTitle("");
    setDesc("");
    setAnalyzed(false);
    setTitlePx(0);
    setDescPx(0);
  };

  const titleCharOk = title.length <= TITLE_CHAR_LIMIT;
  const titlePxOk = titlePx <= TITLE_PX_LIMIT;
  const descCharOk = desc.length <= DESC_CHAR_LIMIT;
  const descPxOk = descPx <= DESC_PX_LIMIT;

  return (
    <ToolLayout
      toolName="Title & Meta Description Checker"
      toolDescription="Check if your title tags and meta descriptions fit Google's SERP pixel limits. Get a live preview of how your snippet will look in search results."
      metaTitle="Title & Meta Description Pixel Checker – Free SEO Tool | ZentroSEO"
      metaDescription="Check your title tag and meta description pixel widths against Google's SERP limits. Preview your search snippet and fix truncation issues."
      canonicalPath="/resources/seo-toolkit/title-meta-checker/"
      showCTA={analyzed}
    >
      {/* Form */}
      <div className="space-y-5">
        <div>
          <Label htmlFor="title-input" className="mb-1.5 block">
            Title Tag
          </Label>
          <Textarea
            id="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your page title tag..."
            rows={2}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {title.length} / {TITLE_CHAR_LIMIT} characters
          </p>
        </div>

        <div>
          <Label htmlFor="desc-input" className="mb-1.5 block">
            Meta Description
          </Label>
          <Textarea
            id="desc-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter your meta description..."
            rows={3}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {desc.length} / {DESC_CHAR_LIMIT} characters
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={analyze}
            disabled={!title.trim() && !desc.trim()}
            className="bg-gradient-cta hover:opacity-90 text-primary-foreground"
          >
            Analyze
          </Button>
          {analyzed && (
            <Button variant="outline" onClick={reset}>
              <RotateCcw className="w-4 h-4 mr-1" /> Reset
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {analyzed && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 space-y-8"
        >
          {/* Title results */}
          {title.trim() && (
            <div className="rounded-xl border border-border p-5 space-y-3">
              <h3 className="font-display font-bold text-lg">Title Tag</h3>
              <div className="flex justify-between text-sm">
                <span>
                  Pixel width: <strong>{titlePx}px</strong> / {TITLE_PX_LIMIT}px
                </span>
                <PassFail pass={titlePxOk} />
              </div>
              <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full transition-all ${getBarColor(titlePx, TITLE_PX_LIMIT)}`}
                  style={{
                    width: `${Math.min((titlePx / TITLE_PX_LIMIT) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  Characters: <strong>{title.length}</strong> / {TITLE_CHAR_LIMIT}
                </span>
                <PassFail pass={titleCharOk} />
              </div>
            </div>
          )}

          {/* Description results */}
          {desc.trim() && (
            <div className="rounded-xl border border-border p-5 space-y-3">
              <h3 className="font-display font-bold text-lg">
                Meta Description
              </h3>
              <div className="flex justify-between text-sm">
                <span>
                  Pixel width: <strong>{descPx}px</strong> / {DESC_PX_LIMIT}px
                </span>
                <PassFail pass={descPxOk} />
              </div>
              <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full transition-all ${getBarColor(descPx, DESC_PX_LIMIT)}`}
                  style={{
                    width: `${Math.min((descPx / DESC_PX_LIMIT) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  Characters: <strong>{desc.length}</strong> / {DESC_CHAR_LIMIT}
                </span>
                <PassFail pass={descCharOk} />
              </div>
            </div>
          )}

          {/* SERP Preview */}
          <div className="rounded-xl border border-border p-5">
            <h3 className="font-display font-bold text-lg mb-4">
              Google SERP Preview
            </h3>
            <div className="bg-card rounded-lg p-4 space-y-1 max-w-lg">
              <p
                className="text-[20px] leading-[1.3] text-[#1a0dab] hover:underline cursor-pointer truncate"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {title || "Page Title"}
              </p>
              <p
                className="text-[14px] text-[#006621]"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                https://example.com › page
              </p>
              <p
                className="text-[14px] text-[#545454] line-clamp-2"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {desc || "Meta description will appear here..."}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </ToolLayout>
  );
};

export default TitleMetaChecker;
