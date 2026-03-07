import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";
import { useTranslation } from "react-i18next";

const Glossary = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useTranslation("pages");

  const filtered = glossaryTerms.filter((term) => {
    const matchSearch = term.term.toLowerCase().includes(search.toLowerCase()) || term.definition.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || term.category === activeCategory;
    return matchSearch && matchCat;
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("glossaryHeroTitle"),
    description: t("glossaryMetaDesc"),
    numberOfItems: glossaryTerms.length,
    itemListElement: glossaryTerms.map((term, i) => ({
      "@type": "ListItem", position: i + 1, name: term.term,
      url: `https://zentroseo.com/resources/glossary/${term.slug}/`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("glossaryMetaTitle")}</title>
        <meta name="description" content={t("glossaryMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/glossary/" />
        <meta property="og:title" content={t("glossaryMetaTitle")} />
        <meta property="og:description" content={t("glossaryMetaDesc")} />
        <meta property="og:url" content="https://zentroseo.com/resources/glossary/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("glossary") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("glossaryHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("glossaryHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("searchTerms")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[t("all"), ...glossaryCategories].map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(idx === 0 ? "All" : glossaryCategories[idx - 1])}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${(idx === 0 ? activeCategory === "All" : activeCategory === glossaryCategories[idx - 1]) ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 mb-8">
            {alphabet.map((letter) => {
              const has = filtered.some((term) => term.term[0].toUpperCase() === letter);
              return (
                <a key={letter} href={has ? `#letter-${letter}` : undefined}
                  className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium ${has ? "text-primary hover:bg-accent cursor-pointer" : "text-muted-foreground/40 cursor-default"}`}>
                  {letter}
                </a>
              );
            })}
          </div>

          {alphabet.map((letter) => {
            const terms = filtered.filter((term) => term.term[0].toUpperCase() === letter);
            if (terms.length === 0) return null;
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-3 text-primary">{letter}</h2>
                <div className="space-y-3">
                  {terms.map((term) => (
                    <Link key={term.slug} to={`/resources/glossary/${term.slug}/`} className="block p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                      <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{term.term}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{term.definition}</p>
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{term.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("noTermsMatch")}</p>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Glossary;
