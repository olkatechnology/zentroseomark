import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Code2, FileText, Rocket, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { useTranslation } from "react-i18next";

const Documentation = () => {
  const { t } = useTranslation("pages");

  const sections = [
    {
      icon: Rocket,
      titleKey: "docsGettingStarted",
      descKey: "docsGettingStartedDesc",
      links: [
        { labelKey: "docsCreateAccount", href: "https://app.zentroseo.com/signup?flow=direct" },
        { labelKey: "docsRunFirstAudit", href: "/resources/help-center/" },
        { labelKey: "docsConnectGSC", href: "/resources/help-center/" },
      ],
    },
    {
      icon: BookOpen,
      titleKey: "docsFeatureGuides",
      descKey: "docsFeatureGuidesDesc",
      links: [
        { label: "ZentroAudit Guide", href: "/features/zentroaudit/" },
        { label: "ZentroFix Guide", href: "/features/zentrofix/" },
        { label: "ZentroKeywords Guide", href: "/features/zentrokeywords/" },
        { label: "ZentroWrite Guide", href: "/features/zentrowrite/" },
        { label: "ZentroMarkup Guide", href: "/features/zentromarkup/" },
        { labelKey: "docsAllFeatures", href: "/features/" },
      ],
    },
    {
      icon: Code2,
      titleKey: "docsApiReference",
      descKey: "docsApiReferenceDesc",
      links: [
        { labelKey: "docsApiOverview", href: "#" },
        { labelKey: "docsAuthentication", href: "#" },
        { labelKey: "docsRateLimits", href: "#" },
      ],
    },
    {
      icon: FileText,
      titleKey: "docsResources",
      descKey: "docsResourcesDesc",
      links: [
        { labelKey: "blog", href: "/resources/blog/" },
        { label: "Case Studies", href: "/resources/case-studies/" },
        { label: "Help Center", href: "/resources/help-center/" },
      ],
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("docsMetaTitle")}</title>
        <meta name="description" content={t("docsMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/documentation/" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("docsHeroTitle") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("docsHeroTitle")}</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("docsHeroSubtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border">
                  <SIcon className="w-6 h-6 text-primary mb-3" />
                  <h2 className="font-display text-lg font-bold mb-2">{t(s.titleKey)}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{t(s.descKey)}</p>
                  <ul className="space-y-2">
                    {s.links.map((link, li) => {
                      const label = link.labelKey ? t(link.labelKey) : link.label;
                      return (
                        <li key={li}>
                          {link.href.startsWith("http") ? (
                            <a href={link.href} className="text-sm text-primary hover:underline flex items-center gap-1">
                              {label} <ArrowRight className="w-3 h-3" />
                            </a>
                          ) : (
                            <Link to={link.href} className="text-sm text-primary hover:underline flex items-center gap-1">
                              {label} <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
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

export default Documentation;
