import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Search, BarChart3, Wrench, TrendingUp, FileText, Link2, Users, Code2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

/* ---------- Mini mock UI illustrations ---------- */

const MockAudit = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 rounded-full border-4 border-hero-accent flex items-center justify-center text-hero-foreground font-display font-bold text-lg">87</div>
      <div className="flex-1 space-y-1.5">
        <div className="h-2 rounded-full bg-green-500/60 w-3/4" />
        <div className="h-2 rounded-full bg-yellow-500/60 w-1/2" />
        <div className="h-2 rounded-full bg-red-500/40 w-1/4" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 text-[10px] text-hero-muted">
      {["Errors: 3", "Warnings: 12", "Passed: 148"].map((t) => (
        <div key={t} className="bg-hero-foreground/5 rounded px-2 py-1 text-center">{t}</div>
      ))}
    </div>
  </div>
);

const MockFixes = () => (
  <div className="space-y-2">
    {["Missing meta description on /blog", "H1 tag duplicated on /pricing", "Image alt text missing (4 pages)"].map((t, i) => (
      <div key={i} className="flex items-center gap-2 bg-hero-foreground/5 rounded px-3 py-2 text-[11px] text-hero-muted">
        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
        <span className="flex-1">{t}</span>
        <span className="text-hero-accent text-[10px] font-medium">Fix →</span>
      </div>
    ))}
  </div>
);

const MockRank = () => (
  <div className="space-y-2">
    <div className="flex gap-1 items-end h-16">
      {[40, 55, 48, 62, 58, 72, 78, 85, 80, 90].map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-hero-accent/60" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="flex justify-between text-[10px] text-hero-muted">
      <span>Feb 1</span><span>Feb 25</span>
    </div>
  </div>
);

const MockKeywords = () => (
  <div className="space-y-2">
    {[
      { kw: "seo audit tool", vol: "2.4K", diff: 34 },
      { kw: "website seo checker", vol: "5.1K", diff: 58 },
      { kw: "fix seo errors", vol: "1.8K", diff: 22 },
    ].map((r) => (
      <div key={r.kw} className="flex items-center gap-2 text-[11px] text-hero-muted">
        <span className="flex-1 truncate">{r.kw}</span>
        <span className="text-hero-foreground/70 w-10 text-right">{r.vol}</span>
        <div className="w-12 h-1.5 rounded-full bg-hero-foreground/10 overflow-hidden">
          <div className="h-full rounded-full bg-hero-accent/70" style={{ width: `${r.diff}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const MockContent = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full border-[3px] border-green-400 flex items-center justify-center text-hero-foreground font-bold text-xs">92</div>
      <span className="text-[11px] text-hero-muted">Content Score</span>
    </div>
    <div className="space-y-1">
      {["Readability", "Keyword Usage", "Structure"].map((l) => (
        <div key={l} className="flex items-center gap-2 text-[10px] text-hero-muted">
          <span className="w-20">{l}</span>
          <div className="flex-1 h-1.5 rounded-full bg-hero-foreground/10 overflow-hidden">
            <div className="h-full rounded-full bg-green-400/70" style={{ width: `${70 + Math.random() * 25}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MockBacklinks = () => (
  <div className="space-y-2">
    <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-hero-muted">
      {[["1.2K", "Total"], ["342", "Referring"], ["48", "New"]].map(([v, l]) => (
        <div key={l} className="bg-hero-foreground/5 rounded px-2 py-2">
          <div className="text-hero-foreground font-bold text-sm">{v}</div>
          <div>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

const MockCompetitors = () => (
  <div className="space-y-2">
    {[
      { name: "You", score: 72, color: "bg-hero-accent" },
      { name: "Competitor A", score: 65, color: "bg-yellow-500/60" },
      { name: "Competitor B", score: 54, color: "bg-hero-foreground/20" },
    ].map((c) => (
      <div key={c.name} className="flex items-center gap-2 text-[11px] text-hero-muted">
        <span className="w-24 truncate">{c.name}</span>
        <div className="flex-1 h-2 rounded-full bg-hero-foreground/10 overflow-hidden">
          <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.score}%` }} />
        </div>
        <span className="w-6 text-right text-hero-foreground/70">{c.score}</span>
      </div>
    ))}
  </div>
);

const MockSchema = () => (
  <div className="space-y-2 text-[11px] text-hero-muted font-mono">
    <div className="bg-hero-foreground/5 rounded p-2 space-y-0.5">
      <div>{"{"}</div>
      <div className="pl-3"><span className="text-hero-accent">"@type"</span>: "FAQPage",</div>
      <div className="pl-3"><span className="text-hero-accent">"mainEntity"</span>: [...]</div>
      <div>{"}"}</div>
    </div>
    <div className="flex items-center gap-1.5 text-green-400 text-[10px]">
      <CheckCircle2 className="w-3 h-3" /> Valid structured data
    </div>
  </div>
);

const mockComponents: Record<string, React.FC> = {
  audit: MockAudit,
  fixes: MockFixes,
  rank: MockRank,
  keywords: MockKeywords,
  content: MockContent,
  backlinks: MockBacklinks,
  competitors: MockCompetitors,
  schema: MockSchema,
};

/* ---------- Main Component ---------- */

const ToolkitsSection = () => {
  const { t } = useTranslation("home");

  const toolkits = [
    {
      id: "audit", label: t("tabSiteAudit"), name: "ZentroAudit", icon: Search,
      bullets: [t("auditBullet1"), t("auditBullet2"), t("auditBullet3")],
      mockType: "audit" as const,
    },
    {
      id: "fixes", label: t("tabSeoFixes"), name: "ZentroFix", icon: Wrench,
      bullets: [t("fixBullet1"), t("fixBullet2"), t("fixBullet3")],
      mockType: "fixes" as const,
    },
    {
      id: "rank", label: t("tabRankTracking"), name: "ZentroRank", icon: TrendingUp,
      bullets: [t("rankBullet1"), t("rankBullet2"), t("rankBullet3")],
      mockType: "rank" as const,
    },
    {
      id: "keywords", label: t("tabKeywords"), name: "ZentroKeywords", icon: BarChart3,
      bullets: [t("keywordsBullet1"), t("keywordsBullet2"), t("keywordsBullet3")],
      mockType: "keywords" as const,
    },
    {
      id: "content", label: t("tabContent"), name: "ZentroWrite", icon: FileText,
      bullets: [t("contentBullet1"), t("contentBullet2"), t("contentBullet3")],
      mockType: "content" as const,
    },
    {
      id: "backlinks", label: t("tabBacklinks"), name: "ZentroBacklinks", icon: Link2,
      bullets: [t("backlinksBullet1"), t("backlinksBullet2"), t("backlinksBullet3")],
      mockType: "backlinks" as const,
    },
    {
      id: "competitors", label: t("tabCompetitors"), name: "ZentroCompare", icon: Users,
      bullets: [t("competitorsBullet1"), t("competitorsBullet2"), t("competitorsBullet3")],
      mockType: "competitors" as const,
    },
    {
      id: "schema", label: t("tabSchema"), name: "ZentroMarkup", icon: Code2,
      bullets: [t("schemaBullet1"), t("schemaBullet2"), t("schemaBullet3")],
      mockType: "schema" as const,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = toolkits[activeIndex];
  const Icon = active.icon;
  const MockUI = mockComponents[active.mockType];

  const prev = () => setActiveIndex((i) => (i - 1 + toolkits.length) % toolkits.length);
  const next = () => setActiveIndex((i) => (i + 1) % toolkits.length);

  const prevIndex = (activeIndex - 1 + toolkits.length) % toolkits.length;
  const nextIndex = (activeIndex + 1) % toolkits.length;

  return (
    <section className="bg-hero relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground text-center max-w-3xl mx-auto mb-10"
        >
          {t("toolkitsHeading")}{" "}
          <span className="text-gradient-primary">{t("toolkitsHeadingHighlight")}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 overflow-x-auto pb-2 mb-12 justify-start md:justify-center scrollbar-none"
        >
          {toolkits.map((tk, i) => (
            <button
              key={tk.id}
              onClick={() => setActiveIndex(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                i === activeIndex
                  ? "bg-hero-accent text-primary-foreground shadow-lg"
                  : "bg-hero-foreground/8 text-hero-muted hover:bg-hero-foreground/15 hover:text-hero-foreground"
              }`}
            >
              {tk.label}
            </button>
          ))}
        </motion.div>

        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          <button onClick={prev} className="absolute left-0 md:relative z-20 w-10 h-10 rounded-full bg-hero-foreground/10 hover:bg-hero-foreground/20 flex items-center justify-center text-hero-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="hidden lg:block w-56 shrink-0 opacity-40 scale-90 blur-[1px]">
            <div className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                {(() => { const SI = toolkits[prevIndex].icon; return <SI className="w-5 h-5 text-hero-accent" />; })()}
                <span className="text-hero-foreground font-display font-semibold text-sm">{toolkits[prevIndex].name}</span>
              </div>
              <div className="space-y-1.5">
                {toolkits[prevIndex].bullets.slice(0, 2).map((b, i) => (
                  <div key={i} className="h-2 rounded bg-hero-foreground/10 w-full" />
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl bg-hero-foreground/[0.06] border border-hero-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-hero-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-hero-accent" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-hero-foreground">{active.name}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-hero-muted">
                        <CheckCircle2 className="w-4 h-4 text-hero-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="https://app.zentroseo.com/signup?flow=direct">
                    <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-6 rounded-lg mt-2">
                      {t("common:tryForFree", { ns: "common" })} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="bg-hero-foreground/[0.04] border border-hero-foreground/10 rounded-xl p-4">
                    <MockUI />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hidden lg:block w-56 shrink-0 opacity-40 scale-90 blur-[1px]">
            <div className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                {(() => { const SI = toolkits[nextIndex].icon; return <SI className="w-5 h-5 text-hero-accent" />; })()}
                <span className="text-hero-foreground font-display font-semibold text-sm">{toolkits[nextIndex].name}</span>
              </div>
              <div className="space-y-1.5">
                {toolkits[nextIndex].bullets.slice(0, 2).map((b, i) => (
                  <div key={i} className="h-2 rounded bg-hero-foreground/10 w-full" />
                ))}
              </div>
            </div>
          </div>

          <button onClick={next} className="absolute right-0 md:relative z-20 w-10 h-10 rounded-full bg-hero-foreground/10 hover:bg-hero-foreground/20 flex items-center justify-center text-hero-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolkitsSection;
