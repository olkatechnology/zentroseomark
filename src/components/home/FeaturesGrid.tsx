import { motion } from "framer-motion";
import { Search, Wrench, BarChart3, PenTool, GitCompare, Link2, Code2, FileText, Sparkles, Map, FileEdit, CalendarClock, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FeaturesGrid = () => {
  const { t } = useTranslation("home");

  const tools = [
    { icon: Wrench, name: "ZentroFix", desc: t("toolZentroFixDesc"), href: "/features/zentrofix/", tag: t("common:comingSoon", { ns: "common" }) },
    { icon: Search, name: "ZentroAudit", desc: t("toolZentroAuditDesc"), href: "/features/zentroaudit/" },
    { icon: BarChart3, name: "ZentroRank", desc: t("toolZentroRankDesc"), href: "/features/zentrorank/" },
    { icon: PenTool, name: "ZentroWrite", desc: t("toolZentroWriteDesc"), href: "/features/zentrowrite/" },
    { icon: Sparkles, name: "ZentroKeywords", desc: t("toolZentroKeywordsDesc"), href: "/features/zentrokeywords/" },
    { icon: GitCompare, name: "ZentroCompare", desc: t("toolZentroCompareDesc"), href: "/features/zentrocompare/" },
    { icon: Link2, name: "ZentroBacklinks", desc: t("toolZentroBacklinksDesc"), href: "/features/zentrobacklinks/" },
    { icon: Code2, name: "ZentroMarkup", desc: t("toolZentroMarkupDesc"), href: "/features/zentromarkup/" },
    { icon: FileText, name: "ZentroWhite", desc: t("toolZentroWhiteDesc"), href: "/features/zentrowhite/" },
    { icon: Map, name: "ZentroTopicalMap", desc: t("toolZentroTopicalMapDesc"), href: "/features/zentrotopicalmap/", tag: t("common:new", { ns: "common" }) },
    { icon: FileEdit, name: "ZentroContentBrief", desc: t("toolZentroContentBriefDesc"), href: "/features/zentrocontentbrief/", tag: t("common:new", { ns: "common" }) },
    { icon: CalendarClock, name: "ZentroContentPlan", desc: t("toolZentroContentPlanDesc"), href: "/features/zentrocontentplan/", tag: t("common:new", { ns: "common" }) },
    { icon: Gauge, name: "ZentroTopicality", desc: t("toolZentroTopicalityDesc"), href: "/features/zentrotopicality/", tag: t("common:new", { ns: "common" }) },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("featuresTitle")}</h2>
          <p className="text-muted-foreground text-lg">{t("featuresSubtitle")}</p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={item}>
              <Link to={tool.href} className="group block p-6 rounded-xl border bg-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground">{tool.name}</h3>
                      {tool.tag && <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-primary/10 text-primary">{tool.tag}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
