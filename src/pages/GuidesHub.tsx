import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { guides } from "@/data/guides";
import { useTranslation } from "react-i18next";

const difficultyColor: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const GuidesHub = () => {
  const { t } = useTranslation("pages");

  const itemListJsonLd = {
    "@context": "https://schema.org", "@type": "ItemList", name: t("guidesHeroTitle"),
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.title, url: `https://zentroseo.com/resources/guides/${g.slug}/` })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("guidesMetaTitle")}</title>
        <meta name="description" content={t("guidesMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/guides/" />
        <meta property="og:title" content={t("guidesMetaTitle")} />
        <meta property="og:description" content={t("guidesMetaDesc")} />
        <meta property="og:url" content="https://zentroseo.com/resources/guides/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("guides") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("guidesHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("guidesHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {guides.map((g, i) => (
              <motion.div key={g.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={`/resources/guides/${g.slug}/`} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColor[g.difficulty]}`}>{g.difficulty}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {g.estimatedTime}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><BarChart3 className="w-3 h-3" /> {g.steps.length} {t("steps")}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold group-hover:text-primary transition-colors mb-2">{g.title}</h2>
                  <p className="text-sm text-muted-foreground">{g.excerpt}</p>
                  <span className="inline-block mt-3 text-xs text-primary font-medium flex items-center gap-1"><BookOpen className="w-3 h-3" /> {t("readGuide")}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default GuidesHub;
