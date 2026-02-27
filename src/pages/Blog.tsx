import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { blogPosts, blogCategories, categorySlug } from "@/data/blog-posts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>ZentroSEO Blog – SEO Tips, Strategies & Case Studies</title>
        <meta name="description" content="Read the latest on SEO audits, ranking strategies, semantic content, and AI tools." />
        <link rel="canonical" href="https://zentroseo.com/resources/blog/" />
        <meta property="og:title" content="ZentroSEO Blog – SEO Tips, Strategies & Case Studies" />
        <meta property="og:description" content="Read the latest on SEO audits, ranking strategies, semantic content, and AI tools." />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Blog" }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Blog</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">SEO tips, strategies, and case studies from the ZentroSEO team.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {blogCategories.map((cat) =>
              cat === "All" ? (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
                >
                  {cat}
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

          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/resources/blog/${post.slug}/`}
                  className="group block rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all overflow-hidden h-full"
                >
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-3">
                      {post.category}
                    </span>
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
