import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { comparisons, getTranslatedComparisons } from "@/data/comparisons";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const ComparisonsHub = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const translatedComparisons = getTranslatedComparisons();

  const itemListJsonLd = {
    "@context": "https://schema.org", "@type": "ItemList", name: t("comparisonsHeroTitle"),
    numberOfItems: translatedComparisons.length,
    itemListElement: translatedComparisons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: getCanonicalUrl(lang, `/resources/comparisons/${c.slug}/`) })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("comparisonsMetaTitle")}</title>
        <meta name="description" content={t("comparisonsMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/resources/comparisons/")} />
        <meta property="og:title" content={t("comparisonsMetaTitle")} />
        <meta property="og:description" content={t("comparisonsMetaDesc")} />
        <meta property="og:url" content={getCanonicalUrl(lang, "/resources/comparisons/")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("comparisons") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("comparisonsHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("comparisonsHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {translatedComparisons.map((c, i) => (
              <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <LocalizedLink to={`/resources/comparisons/${c.slug}/`} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{c.category}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold group-hover:text-primary transition-colors mb-2">{c.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{c.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{c.itemA.name}</span>
                    <ArrowLeftRight className="w-3 h-3" />
                    <span className="font-medium text-foreground">{c.itemB.name}</span>
                  </div>
                </LocalizedLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ComparisonsHub;