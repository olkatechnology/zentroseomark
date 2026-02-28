import { motion } from "framer-motion";
import { Search, Wrench, BarChart3, PenTool, GitCompare, Link2, Code2, FileText, Sparkles, Map, FileEdit, CalendarClock, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { icon: Wrench, name: "ZentroFix", desc: "1-Click AI SEO fixer that auto-corrects critical issues", href: "/features/zentrofix/", tag: "Coming Soon" },
  { icon: Search, name: "ZentroAudit", desc: "Technical & on-page SEO audit powered by AI", href: "/features/zentroaudit/" },
  { icon: BarChart3, name: "ZentroRank", desc: "Track keyword rankings across devices & locations", href: "/features/zentrorank/" },
  { icon: PenTool, name: "ZentroWrite", desc: "AI-powered meta & content generator", href: "/features/zentrowrite/" },
  { icon: Sparkles, name: "ZentroKeywords", desc: "Discover high-impact keyword opportunities", href: "/features/zentrokeywords/" },
  { icon: GitCompare, name: "ZentroCompare", desc: "Competitor analysis & gap identification", href: "/features/zentrocompare/" },
  { icon: Link2, name: "ZentroBacklinks", desc: "Monitor & analyze your backlink profile", href: "/features/zentrobacklinks/" },
  { icon: Code2, name: "ZentroMarkup", desc: "Auto-generate JSON-LD schema markup", href: "/features/zentromarkup/" },
  { icon: FileText, name: "ZentroWhite", desc: "White-label SEO reports for your clients", href: "/features/zentrowhite/" },
  { icon: Map, name: "ZentroTopicalMap", desc: "Build entity-based topical maps for topic authority", href: "/features/zentrotopicalmap/", tag: "New" },
  { icon: FileEdit, name: "ZentroContentBrief", desc: "Generate EAV-optimized semantic content briefs", href: "/features/zentrocontentbrief/", tag: "New" },
  { icon: CalendarClock, name: "ZentroContentPlan", desc: "Schedule 6-month semantic audits automatically", href: "/features/zentrocontentplan/", tag: "New" },
  { icon: Gauge, name: "ZentroTopicality", desc: "Score content topical depth with NLP analysis", href: "/features/zentrotopicality/", tag: "New" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturesGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            9 Powerful SEO Tools in One Engine
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to dominate search rankings, all powered by AI automation.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={item}>
              <Link
                to={tool.href}
                className="group block p-6 rounded-xl border bg-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground">{tool.name}</h3>
                      {tool.tag && (
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-primary/10 text-primary">{tool.tag}</span>
                      )}
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
