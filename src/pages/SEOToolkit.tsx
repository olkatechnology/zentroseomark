import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Code2, BarChart3, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const SEOToolkit = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const tools = [
    { icon: BarChart3, titleKey: "toolScoreChecker", descKey: "toolScoreCheckerDesc", ctaKey: "toolScoreCheckerCta" },
    { icon: Search, titleKey: "toolMetaAnalyzer", descKey: "toolMetaAnalyzerDesc", ctaKey: "toolMetaAnalyzerCta" },
    { icon: Code2, titleKey: "toolSchemaValidator", descKey: "toolSchemaValidatorDesc", ctaKey: "toolSchemaValidatorCta" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("seoToolkitMetaTitle")}</title>
        <meta name="description" content={t("seoToolkitMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/resources/seo-toolkit/")} />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("seoToolkitHeroTitle") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("seoToolkitHeroTitle")}</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("seoToolkitHeroSubtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, i) => {
              const TIcon = tool.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border flex flex-col">
                  <TIcon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-display text-lg font-bold mb-2">{t(tool.titleKey)}</h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{t(tool.descKey)}</p>
                  <a href="https://app.zentroseo.com/signup?flow=direct">
                    <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full text-sm">
                      {t(tool.ctaKey)} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SEOToolkit;