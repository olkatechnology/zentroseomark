import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers, FileText, ArrowRight, Network, List } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { blogPosts } from "@/data/blog-posts";
import { topics } from "@/data/topics";
import { Badge } from "@/components/ui/badge";
import NetworkVisualization from "@/components/topical-map/NetworkVisualization";

const categoryColors: Record<string, string> = {
  "Technical SEO": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "On-Page SEO": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Semantic SEO": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Keyword Research & Content Strategy": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Link Building & Off-Page SEO": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  "Local & E-commerce SEO": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  "SEO Tools & AI": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
};

const TopicalMap = () => {
  const [view, setView] = useState<"network" | "list">("network");
  const hubs = blogPosts.filter((p) => p.isHub);
  const silos = hubs.map((hub) => {
    const spokes = blogPosts.filter((p) => p.topicalMapHub === hub.slug);
    const crossSiloLinks = hub.relatedSlugs || [];
    return { hub, spokes, crossSiloLinks };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Content Topical Map – ZentroSEO",
    description: "Interactive visualization of ZentroSEO's content hierarchy showing hub-and-spoke topic clusters across all SEO silos.",
    url: "https://zentroseo.com/resources/topics/map/",
  };

  return (
    <Layout>
      <Helmet>
        <title>Content Topical Map – SEO Knowledge Hierarchy | ZentroSEO</title>
        <meta name="description" content="Explore the complete ZentroSEO content hierarchy. See how pillar guides, cluster articles, and cross-silo links form an interconnected SEO knowledge network." />
        <link rel="canonical" href="https://zentroseo.com/resources/topics/map/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Topics", href: "/resources/topics/" }, { label: "Topical Map" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Network className="w-12 h-12 text-hero-accent mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Content Topical Map</h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              Explore how {blogPosts.length} articles connect across {silos.length} topic silos — each hub anchoring a cluster of specialized guides.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* View Toggle */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setView("network")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "network" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
            >
              <Network className="w-4 h-4" /> Network View
            </button>
            <button
              onClick={() => setView("list")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "list" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
            >
              <List className="w-4 h-4" /> List View
            </button>
          </div>

          {/* Network Visualization */}
          {view === "network" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <NetworkVisualization />
              <p className="text-xs text-muted-foreground text-center mt-3">Hover to highlight connections · Click any node to read the article</p>
            </motion.div>
          )}

          {/* Legend */}
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(categoryColors).map(([cat, cls]) => (
              <span key={cat} className={`text-xs font-medium px-3 py-1 rounded-full ${cls}`}>{cat}</span>
            ))}
          </div>

          {/* Silos (list view) */}
          {view === "list" && (<div className="space-y-8">
          {silos.map((silo, i) => (
            <motion.div
              key={silo.hub.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-2xl overflow-hidden"
            >
              {/* Hub header */}
              <Link
                to={`/resources/blog/${silo.hub.slug}/`}
                className="group flex items-start gap-4 p-6 bg-muted/50 hover:bg-muted transition-colors"
              >
                <Layers className="w-8 h-8 text-primary mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[silo.hub.category] || "bg-secondary text-secondary-foreground"}`}>
                      {silo.hub.category}
                    </span>
                    <Badge variant="outline" className="text-xs">Hub · Pillar</Badge>
                    {silo.hub.trending && <Badge className="text-xs bg-primary/10 text-primary border-primary/20">Trending</Badge>}
                  </div>
                  <h2 className="font-display text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                    {silo.hub.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{silo.hub.excerpt}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0" />
              </Link>

              {/* Spokes */}
              {silo.spokes.length > 0 && (
                <div className="divide-y divide-border">
                  {silo.spokes.map((spoke) => (
                    <Link
                      key={spoke.slug}
                      to={`/resources/blog/${spoke.slug}/`}
                      className="group flex items-center gap-3 px-6 py-3.5 pl-14 hover:bg-muted/30 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="text-sm font-medium group-hover:text-primary transition-colors flex-1 min-w-0 truncate">
                        {spoke.title}
                      </span>
                      <span className="text-xs text-muted-foreground shrink-0">{spoke.readTime}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Cross-silo links */}
              {silo.crossSiloLinks.length > 0 && (
                <div className="px-6 py-3 bg-accent/30 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground mr-2">Cross-silo links →</span>
                  {silo.crossSiloLinks.map((slug) => {
                    const target = blogPosts.find((p) => p.slug === slug);
                    if (!target) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/resources/blog/${slug}/`}
                        className="inline-block text-xs text-primary hover:underline mr-3"
                      >
                        {target.title.length > 50 ? target.title.slice(0, 50) + "…" : target.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
          </div>)}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { label: "Total Articles", value: blogPosts.length },
              { label: "Topic Silos", value: silos.length },
              { label: "Hub Pages", value: hubs.length },
              { label: "Topic Hubs", value: topics.length },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl border border-border">
                <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TopicalMap;
