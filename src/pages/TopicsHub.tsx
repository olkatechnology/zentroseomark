import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { topics } from "@/data/topics";

const TopicsHub = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SEO Topics",
    numberOfItems: topics.length,
    itemListElement: topics.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `https://zentroseo.com/resources/topics/${t.slug}/` })),
  };

  return (
    <Layout>
      <Helmet>
        <title>SEO Topics – Complete Topic Index | ZentroSEO</title>
        <meta name="description" content="Explore every major SEO topic in depth — from technical SEO and semantic SEO to link building, local SEO, and AI-powered optimization." />
        <link rel="canonical" href="https://zentroseo.com/resources/topics/" />
        <meta property="og:title" content="SEO Topics – Complete Topic Index" />
        <meta property="og:description" content="Explore every major SEO topic in depth." />
        <meta property="og:url" content="https://zentroseo.com/resources/topics/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Topics" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">SEO Topics</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">Deep dives into every major area of search engine optimization.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {topics.map((t, i) => (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={`/resources/topics/${t.slug}/`} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                  <Layers className="w-7 h-7 text-primary mb-3" />
                  <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{t.name}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{t.description}</p>
                  <span className="text-xs text-primary font-medium">{t.subtopics.length} subtopics · {t.relatedBlogSlugs.length} articles →</span>
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
