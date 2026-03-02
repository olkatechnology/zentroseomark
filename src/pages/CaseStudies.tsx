import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Target } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t } = useTranslation("pages");

  const caseStudies = [
    {
      titleKey: "caseStudy1Title",
      industryKey: "caseStudy1Industry",
      icon: TrendingUp,
      challengeKey: "caseStudy1Challenge",
      solutionKey: "caseStudy1Solution",
      results: [
        { metric: "340%", labelKey: "caseStudy1R1" },
        { metric: "52", labelKey: "caseStudy1R2" },
        { metric: "15", labelKey: "caseStudy1R3" },
        { metric: "2.1s → 0.8s", labelKey: "caseStudy1R4" },
      ],
    },
    {
      titleKey: "caseStudy2Title",
      industryKey: "caseStudy2Industry",
      icon: BarChart3,
      challengeKey: "caseStudy2Challenge",
      solutionKey: "caseStudy2Solution",
      results: [
        { metric: "12% → 89%", labelKey: "caseStudy2R1" },
        { metric: "200+", labelKey: "caseStudy2R2" },
        { metric: "156%", labelKey: "caseStudy2R3" },
        { metric: "34%", labelKey: "caseStudy2R4" },
      ],
    },
    {
      titleKey: "caseStudy3Title",
      industryKey: "caseStudy3Industry",
      icon: Target,
      challengeKey: "caseStudy3Challenge",
      solutionKey: "caseStudy3Solution",
      results: [
        { metric: "8 → 25", labelKey: "caseStudy3R1" },
        { metric: "20hrs → 3hrs", labelKey: "caseStudy3R2" },
        { metric: "4 → 1", labelKey: "caseStudy3R3" },
        { metric: "40%", labelKey: "caseStudy3R4" },
      ],
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("caseStudiesMetaTitle")}</title>
        <meta name="description" content={t("caseStudiesMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/case-studies/" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("caseStudiesHeroTitle") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("caseStudiesHeroTitle")}</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("caseStudiesHeroSubtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {caseStudies.map((cs, i) => {
            const CSIcon = cs.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CSIcon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1">{t(cs.industryKey)}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-4">{t(cs.titleKey)}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-sm mb-1 text-destructive">{t("challenge")}</h3>
                      <p className="text-sm text-muted-foreground">{t(cs.challengeKey)}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1 text-primary">{t("solution")}</h3>
                      <p className="text-sm text-muted-foreground">{t(cs.solutionKey)}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="text-center p-3 rounded-lg bg-secondary/50">
                        <p className="font-display text-xl font-bold text-primary">{r.metric}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t(r.labelKey)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;
