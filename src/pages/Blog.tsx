import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { blogPosts, blogCategories, categorySlug } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation("pages");

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    if (!searchQuery.trim()) return matchesCategory;
    const q = searchQuery.toLowerCase();
    return matchesCategory && (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  });

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ZentroSEO Blog",
    description: t("blogMetaDesc"),
    url: "https://zentroseo.com/resources/blog/",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://zentroseo.com/resources/blog/${post.slug}/`,
        name: post.title,
      })),
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("blogMetaTitle")}</title>
        <meta name="description" content={t("blogMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/blog/" />
        <meta property="og:title" content={t("blogMetaTitle")} />
        <meta property="og:description" content={t("blogMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(collectionJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("blog") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("blogHeroTitle")}</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("blogHeroSubtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("searchArticles")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {blogCategories.map((cat) =>
              cat === "All" ? (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
                >
                  {t("all")}
                </button>
              ) : (
                <Link
                  key={cat}
                  to={`/resources/blog/category/${categorySlug(cat)}/`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cat}
                </Link>
              )
            )}
          </div>

          {activeCategory === "All" && !searchQuery.trim() && (
            (() => {
              const trendingPosts = blogPosts.filter((p) => p.trending);
              return trendingPosts.length > 0 ? (
                <div className="max-w-5xl mx-auto mb-12">
                  <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">{t("trendingArticles")}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trendingPosts.slice(0, 3).map((post) => (
                      <Link key={post.slug} to={`/resources/blog/${post.slug}/`} className="group block rounded-xl border border-primary/20 bg-accent/30 hover:border-primary/40 hover:shadow-card transition-all overflow-hidden">
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="default" className="text-[10px] px-2 py-0">{t("trending")}</Badge>
                            <span className="text-xs text-muted-foreground">{post.category}</span>
                          </div>
                          <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null;
            })()
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/resources/blog/${post.slug}/`} className="group block rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all overflow-hidden h-full">
                  {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="w-full h-40 object-cover" loading="lazy" />}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">{post.category}</span>
                      {post.isHub && <Badge variant="default" className="text-[10px] px-2 py-0">{t("pillarGuide")}</Badge>}
                      {post.trending && <Badge variant="secondary" className="text-[10px] px-2 py-0">🔥 {t("trending")}</Badge>}
                    </div>
                    <h2 className="font-display font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
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

export default Blog;
