import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import {
  blogPosts,
  blogCategories,
  categorySlug,
  categoryMeta,
  getPostsByCategory,
} from "@/data/blog-posts";

const BlogCategory = () => {
  const { category: catSlug } = useParams<{ category: string }>();

  // Resolve category name from slug
  const categoryName = blogCategories
    .filter((c) => c !== "All")
    .find((c) => categorySlug(c) === catSlug);

  if (!categoryName) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/resources/blog/" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const posts = getPostsByCategory(categoryName);
  const meta = categoryMeta[categoryName];
  const otherCategories = blogCategories
    .filter((c) => c !== "All" && c !== categoryName);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta?.title || categoryName,
    description: meta?.description || "",
    url: `https://zentroseo.com/resources/blog/category/${catSlug}/`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://zentroseo.com/resources/blog/${p.slug}/`,
        name: p.title,
      })),
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{meta?.title || categoryName} – ZentroSEO Blog</title>
        <meta name="description" content={meta?.description || `Browse all ${categoryName} articles on the ZentroSEO blog.`} />
        <link rel="canonical" href={`https://zentroseo.com/resources/blog/category/${catSlug}/`} />
        <meta property="og:title" content={`${meta?.title || categoryName} – ZentroSEO Blog`} />
        <meta property="og:description" content={meta?.description || ""} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(collectionJsonLd)}</script>
      </Helmet>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Blog", href: "/resources/blog/" },
          { label: categoryName },
        ]}
      />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {meta?.title || categoryName}
          </h1>
          {meta?.description && (
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">{meta.description}</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {posts.map((post, i) => (
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
                    <h2 className="font-display font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cross-links to related category hubs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4">Explore More Topics</h2>
            <div className="flex flex-wrap gap-3">
              {otherCategories.map((cat) => (
                <Link
                  key={cat}
                  to={`/resources/blog/category/${categorySlug(cat)}/`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  {cat}
                </Link>
              ))}
              <Link
                to="/resources/blog/"
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default BlogCategory;
