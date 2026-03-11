import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, HelpCircle, BarChart3, FileText, Wrench, GraduationCap, BookA, Map, GitCompareArrows } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { useTranslation } from "react-i18next";

const ResourcesHub = () => {
  const { t } = useTranslation("pages");

  const resources = [
    { icon: BookOpen, title: t("blog"), description: t("blogHeroSubtitle"), href: "/resources/blog/" },
    { icon: GraduationCap, title: t("resGuides"), description: t("resGuidesDesc"), href: "/resources/guides/" },
    { icon: BookA, title: t("resGlossary"), description: t("resGlossaryDesc"), href: "/resources/glossary/" },
    { icon: Map, title: t("resTopics"), description: t("resTopicsDesc"), href: "/resources/topics/" },
    { icon: GitCompareArrows, title: t("resComparisons"), description: t("resComparisonsDesc"), href: "/resources/comparisons/" },
    { icon: HelpCircle, title: t("resHelpCenter"), description: t("resHelpCenterDesc"), href: "/resources/help-center/" },
    { icon: BarChart3, title: t("resCaseStudies"), description: t("resCaseStudiesDesc"), href: "/resources/case-studies/" },
    { icon: FileText, title: t("resDocumentation"), description: t("resDocumentationDesc"), href: "/resources/documentation/" },
    { icon: Wrench, title: t("resSeoToolkit"), description: t("resSeoToolkitDesc"), href: "/resources/seo-toolkit/" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("resourcesMetaTitle")}</title>
        <meta name="description" content={t("resourcesMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/" />
        <meta property="og:title" content={t("resourcesMetaTitle")} />
        <meta property="og:description" content={t("resourcesMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("resourcesHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("resourcesHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resources.map((r, i) => {
              const RIcon = r.icon;
              return (
                <motion.div key={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={r.href} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                    <RIcon className="w-8 h-8 text-primary mb-4" />
                    <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{r.title}</h2>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                  </Link>
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

export default ResourcesHub;
