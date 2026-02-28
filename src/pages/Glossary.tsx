import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";

const Glossary = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = glossaryTerms.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SEO Glossary",
    description: "Complete glossary of SEO terms and definitions.",
    numberOfItems: glossaryTerms.length,
    itemListElement: glossaryTerms.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.term,
      url: `https://zentroseo.com/resources/glossary/${t.slug}/`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>SEO Glossary – 30+ Terms Defined | ZentroSEO</title>
        <meta name="description" content="A comprehensive SEO glossary with clear definitions for every important SEO term — from topical authority and schema markup to crawlability and E-E-A-T." />
        <link rel="canonical" href="https://zentroseo.com/resources/glossary/" />
        <meta property="og:title" content="SEO Glossary – 30+ Terms Defined" />
        <meta property="og:description" content="Clear definitions for every important SEO term. Learn the language of search engine optimization." />
        <meta property="og:url" content="https://zentroseo.com/resources/glossary/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Glossary" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">SEO Glossary</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">Clear, concise definitions for every important SEO term.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...glossaryCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 mb-8">
            {alphabet.map((letter) => {
              const has = filtered.some((t) => t.term[0].toUpperCase() === letter);
              return (
                <a
                  key={letter}
                  href={has ? `#letter-${letter}` : undefined}
                  className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium ${has ? "text-primary hover:bg-accent cursor-pointer" : "text-muted-foreground/40 cursor-default"}`}
                >
                  {letter}
                </a>
              );
            })}
          </div>

          {alphabet.map((letter) => {
            const terms = filtered.filter((t) => t.term[0].toUpperCase() === letter);
            if (terms.length === 0) return null;
            return (
              <div key={letter} id={`letter-${letter}`} className="mb-8">
                <h2 className="font-display text-2xl font-bold mb-3 text-primary">{letter}</h2>
                <div className="space-y-3">
                  {terms.map((t) => (
                    <Link key={t.slug} to={`/resources/glossary/${t.slug}/`} className="block p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group">
                      <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{t.term}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.definition}</p>
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{t.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No terms match your search.</p>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Glossary;
