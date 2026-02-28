import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { comparisons } from "@/data/comparisons";

const ComparisonsHub = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SEO Comparisons",
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: `https://zentroseo.com/resources/comparisons/${c.slug}/` })),
  };

  return (
    <Layout>
      <Helmet>
        <title>SEO Comparisons – Side-by-Side Analysis | ZentroSEO</title>
        <meta name="description" content="Compare SEO tools, concepts, and strategies side by side. Make informed decisions with detailed feature comparisons and analysis." />
        <link rel="canonical" href="https://zentroseo.com/resources/comparisons/" />
        <meta property="og:title" content="SEO Comparisons – Side-by-Side Analysis" />
        <meta property="og:description" content="Compare SEO tools and concepts side by side." />
        <meta property="og:url" content="https://zentroseo.com/resources/comparisons/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Comparisons" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">SEO Comparisons</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">Side-by-side analysis of SEO tools, concepts, and strategies.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {comparisons.map((c, i) => (
              <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={`/resources/comparisons/${c.slug}/`} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
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

export default ComparisonsHub;
