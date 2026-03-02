import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { topics } from "@/data/topics";
import { useTranslation } from "react-i18next";

const TopicsHub = () => {
  const { t } = useTranslation("pages");

  const itemListJsonLd = {
    "@context": "https://schema.org", "@type": "ItemList", name: t("topicsHeroTitle"),
    numberOfItems: topics.length,
    itemListElement: topics.map((tp, i) => ({ "@type": "ListItem", position: i + 1, name: tp.name, url: `https://zentroseo.com/resources/topics/${tp.slug}/` })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("topicsMetaTitle")}</title>
        <meta name="description" content={t("topicsMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/topics/" />
        <meta property="og:title" content={t("topicsMetaTitle")} />
        <meta property="og:description" content={t("topicsMetaDesc")} />
        <meta property="og:url" content="https://zentroseo.com/resources/topics/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("topics") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("topicsHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("topicsHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {topics.map((tp, i) => (
              <motion.div key={tp.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={`/resources/topics/${tp.slug}/`} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                  <Layers className="w-7 h-7 text-primary mb-3" />
                  <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tp.name}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{tp.description}</p>
                  <span className="text-xs text-primary font-medium">{tp.subtopics.length} {t("subtopics")} · {tp.relatedBlogSlugs.length} {t("articles")} →</span>
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

export default TopicsHub;
