import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Type, Bug, Bot, HelpCircle, Link2, SearchCode, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SEOToolkit = () => {
  const { t } = useTranslation("pages");

  const tools = [
    {
      icon: Type,
      titleKey: "toolTitleMetaChecker",
      descKey: "toolTitleMetaCheckerDesc",
      href: "/resources/seo-toolkit/title-meta-checker/",
      live: true,
    },
    {
      icon: Bug,
      titleKey: "toolWebsiteFixScanner",
      descKey: "toolWebsiteFixScannerDesc",
      href: "/resources/seo-toolkit/",
      live: false,
    },
    {
      icon: Bot,
      titleKey: "toolAIContentDetector",
      descKey: "toolAIContentDetectorDesc",
      href: "/resources/seo-toolkit/",
      live: false,
    },
    {
      icon: HelpCircle,
      titleKey: "toolPAAExtractor",
      descKey: "toolPAAExtractorDesc",
      href: "/resources/seo-toolkit/",
      live: false,
    },
    {
      icon: Link2,
      titleKey: "toolInternalLinkingFinder",
      descKey: "toolInternalLinkingFinderDesc",
      href: "/resources/seo-toolkit/",
      live: false,
    },
    {
      icon: SearchCode,
      titleKey: "toolAutocompleteFinder",
      descKey: "toolAutocompleteFinderDesc",
      href: "/resources/seo-toolkit/",
      live: false,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("seoToolkitMetaTitle")}</title>
        <meta name="description" content={t("seoToolkitMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/seo-toolkit/" />
      </Helmet>

      <Breadcrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("resources"), href: "/resources/" },
          { label: t("seoToolkitHeroTitle") },
        ]}
      />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {t("seoToolkitHeroTitle")}
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">
            {t("seoToolkitHeroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, i) => {
              const TIcon = tool.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-card flex flex-col relative"
                >
                  {!tool.live && (
                    <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                      {t("common:comingSoon")}
                    </Badge>
                  )}
                  <TIcon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-display text-lg font-bold mb-2">
                    {t(tool.titleKey)}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {t(tool.descKey)}
                  </p>
                  {tool.live ? (
                    <Link to={tool.href}>
                      <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full text-sm">
                        {t("useFreeTool")} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled variant="outline" className="w-full text-sm">
                      {t("common:comingSoon")}
                    </Button>
                  )}
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
