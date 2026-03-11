import { useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import ToolLayout from "@/components/tools/ToolLayout";
import ToolCTA from "@/components/tools/ToolCTA";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

interface AnalysisResult {
  text: string;
  charCount: number;
  charLimit: number;
  pixelWidth: number;
  pixelLimit: number;
  charPass: boolean;
  pixelPass: boolean;
}

const TITLE_CHAR_LIMIT = 60;
const TITLE_PIXEL_LIMIT = 580;
const DESC_CHAR_LIMIT = 160;
const DESC_PIXEL_LIMIT = 920;

function measurePixelWidth(text: string, font: string): number {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 0;
  ctx.font = font;
  return Math.round(ctx.measureText(text).width);
}

function getBarColor(value: number, limit: number): string {
  const ratio = value / limit;
  if (ratio <= 0.85) return "bg-green-500";
  if (ratio <= 1.0) return "bg-yellow-500";
  return "bg-destructive";
}

function getStatusLabel(pass: boolean, t: (key: string) => string) {
  return pass ? (
    <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm">
      <CheckCircle className="w-4 h-4" /> {t("pass")}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-destructive font-medium text-sm">
      <XCircle className="w-4 h-4" /> {t("tooLong")}
    </span>
  );
}

const TitleMetaChecker = () => {
  const { t } = useTranslation("pages");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleResult, setTitleResult] = useState<AnalysisResult | null>(null);
  const [descResult, setDescResult] = useState<AnalysisResult | null>(null);
  const [analyzed, setAnalyzed] = useState(false);

  const analyze = useCallback(() => {
    const titlePx = measurePixelWidth(title, "20px Arial");
    const descPx = measurePixelWidth(description, "14px Arial");

    setTitleResult({
      text: title,
      charCount: title.length,
      charLimit: TITLE_CHAR_LIMIT,
      pixelWidth: titlePx,
      pixelLimit: TITLE_PIXEL_LIMIT,
      charPass: title.length <= TITLE_CHAR_LIMIT,
      pixelPass: titlePx <= TITLE_PIXEL_LIMIT,
    });

    setDescResult({
      text: description,
      charCount: description.length,
      charLimit: DESC_CHAR_LIMIT,
      pixelWidth: descPx,
      pixelLimit: DESC_PIXEL_LIMIT,
      charPass: description.length <= DESC_CHAR_LIMIT,
      pixelPass: descPx <= DESC_PIXEL_LIMIT,
    });

    setAnalyzed(true);
  }, [title, description]);

  const reset = () => {
    setTitle("");
    setDescription("");
    setTitleResult(null);
    setDescResult(null);
    setAnalyzed(false);
  };

  const canAnalyze = title.trim().length > 0 || description.trim().length > 0;

  return (
    <ToolLayout
      toolName={t("toolTitleMetaChecker")}
      toolDescription={t("toolTitleMetaCheckerDesc")}
      metaTitle={t("toolTitleMetaCheckerMeta")}
      metaDescription={t("toolTitleMetaCheckerMetaDesc")}
      canonicalPath="/resources/seo-toolkit/title-meta-checker/"
    >
      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {t("enterTitle")}
          </label>
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("enterTitlePlaceholder")}
            rows={2}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {title.length} / {TITLE_CHAR_LIMIT} {t("charCount")}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {t("enterMetaDescription")}
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("enterMetaDescPlaceholder")}
            rows={3}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {description.length} / {DESC_CHAR_LIMIT} {t("charCount")}
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={analyze}
            disabled={!canAnalyze}
            className="bg-gradient-cta hover:opacity-90 text-primary-foreground flex-1"
          >
            {t("analyzeButton")}
          </Button>
          {analyzed && (
            <Button variant="outline" onClick={reset}>
              <RotateCcw className="w-4 h-4 mr-1" /> {t("resetButton")}
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {analyzed && titleResult && descResult && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 space-y-8"
        >
          {/* Title Analysis */}
          <ResultCard label={t("titleLimit")} result={titleResult} t={t} />

          {/* Description Analysis */}
          <ResultCard label={t("descLimit")} result={descResult} t={t} />

          {/* SERP Preview */}
          <div>
            <h3 className="font-display text-lg font-bold mb-3">
              {t("serpPreview")}
            </h3>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="max-w-[600px]">
                <p className="text-sm text-green-700 mb-0.5 truncate">
                  https://example.com › page
                </p>
                <h3
                  className="text-xl font-normal mb-1 truncate"
                  style={{
                    color: "hsl(217, 89%, 42%)",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "20px",
                  }}
                >
                  {titleResult.text || "Your Title Tag Here"}
                </h3>
                <p
                  className="text-sm leading-snug"
                  style={{
                    color: "hsl(0, 0%, 27%)",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {descResult.text || "Your meta description will appear here."}
                </p>
              </div>
            </div>
          </div>

          <ToolCTA />
        </motion.div>
      )}
    </ToolLayout>
  );
};

function ResultCard({
  label,
  result,
  t,
}: {
  label: string;
  result: AnalysisResult;
  t: (key: string) => string;
}) {
  const charPct = Math.min((result.charCount / result.charLimit) * 100, 100);
  const pxPct = Math.min((result.pixelWidth / result.pixelLimit) * 100, 100);

  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-4">
      <h3 className="font-display text-base font-bold">{label}</h3>

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t("charCount")}</span>
          <span>
            {result.charCount} / {result.charLimit}{" "}
            {getStatusLabel(result.charPass, t)}
          </span>
        </div>
        <div className="relative h-2.5 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${getBarColor(result.charCount, result.charLimit)}`}
            style={{ width: `${charPct}%` }}
          />
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t("pixelWidth")}</span>
          <span>
            {result.pixelWidth}px / {result.pixelLimit}px{" "}
            {getStatusLabel(result.pixelPass, t)}
          </span>
        </div>
        <div className="relative h-2.5 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${getBarColor(result.pixelWidth, result.pixelLimit)}`}
            style={{ width: `${pxPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default TitleMetaChecker;
