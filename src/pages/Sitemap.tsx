import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { blogPosts, blogCategories, categorySlug } from "@/data/blog-posts";
import { featuresData } from "@/data/features";
import { glossaryTerms } from "@/data/glossary";
import { topics } from "@/data/topics";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";

const siteStructure = [
  {
    title: "Features",
    links: Object.values(featuresData).map((f) => ({
      label: f.name,
      href: `/features/${f.slug}/`,
    })),
    hubLink: { label: "All Features", href: "/features/" },
  },
  {
    title: "Solutions",
    links: [
      { label: "For Agencies", href: "/solutions/for-agencies/" },
      { label: "For Startups", href: "/solutions/for-startups/" },
      { label: "For E-commerce", href: "/solutions/for-e-commerce/" },
      { label: "For Content Creators", href: "/solutions/for-content-creators/" },
    ],
    hubLink: { label: "All Solutions", href: "/solutions/" },
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about-us/" },
      { label: "Contact Us", href: "/company/contact-us/" },
    ],
    hubLink: { label: "Company Hub", href: "/company/" },
  },
    {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "Glossary", href: "/resources/glossary/" },
      { label: "Topics", href: "/resources/topics/" },
      { label: "Comparisons", href: "/resources/comparisons/" },
      { label: "Help Center", href: "/resources/help-center/" },
      { label: "Case Studies", href: "/resources/case-studies/" },
      { label: "Documentation", href: "/resources/documentation/" },
      { label: "SEO Toolkit", href: "/resources/seo-toolkit/" },
    ],
    hubLink: { label: "All Resources", href: "/resources/" },
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Service", href: "/terms-of-service/" },
      { label: "Refund Policy", href: "/refund-policy/" },
    ],
  },
];

const Sitemap = () => {
  const categories = blogCategories.filter((c) => c !== "All");

  const sitemapJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sitemap – ZentroSEO",
    description: "Complete site map of ZentroSEO — browse all pages, features, solutions, blog posts, and resources.",
    url: "https://zentroseo.com/sitemap/",
  };

  return (
    <Layout>
      <Helmet>
        <title>Sitemap – ZentroSEO</title>
        <meta name="description" content="Browse the complete ZentroSEO sitemap. Find every page, feature, blog post, and resource organized by category." />
        <link rel="canonical" href="https://zentroseo.com/sitemap/" />
        <script type="application/ld+json">{JSON.stringify(sitemapJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />

      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Sitemap</h1>
          <p className="text-muted-foreground mb-10">Browse every page on ZentroSEO, organized by section.</p>

          <div className="space-y-10">
            {/* Core pages */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Main Pages</h2>
              <ul className="mt-3 space-y-1.5">
                <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
                <li><Link to="/pricing/" className="text-primary hover:underline">Pricing</Link></li>
              </ul>
            </section>

            {/* Structured sections */}
            {siteStructure.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-bold mb-1">{section.title}</h2>
                <ul className="mt-3 space-y-1.5">
                  {section.hubLink && (
                    <li>
                      <Link to={section.hubLink.href} className="text-primary hover:underline font-medium">
                        {section.hubLink.label}
                      </Link>
                    </li>
                  )}
                  {section.links.map((link) => (
                    <li key={link.href} className="ml-4">
                      <Link to={link.href} className="text-primary hover:underline">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Blog by Category */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Blog</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/blog/" className="text-primary hover:underline font-medium">All Blog Posts</Link>
              </p>
              {categories.map((cat) => {
                const posts = blogPosts.filter((p) => p.category === cat);
                if (posts.length === 0) return null;
                return (
                  <div key={cat} className="mb-6">
                    <h3 className="font-display text-base font-semibold mb-2">
                      <Link to={`/resources/blog/category/${categorySlug(cat)}/`} className="text-primary hover:underline">
                        {cat}
                      </Link>
                      <span className="text-muted-foreground text-sm font-normal ml-2">({posts.length})</span>
                    </h3>
                    <ul className="ml-4 space-y-1">
                      {posts.map((p) => (
                        <li key={p.slug}>
                          <Link to={`/resources/blog/${p.slug}/`} className="text-sm text-primary hover:underline">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>

            {/* Glossary */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Glossary</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/glossary/" className="text-primary hover:underline font-medium">All Glossary Terms</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {glossaryTerms.map((t) => (
                  <li key={t.slug}>
                    <Link to={`/resources/glossary/${t.slug}/`} className="text-sm text-primary hover:underline">
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Topics */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Topics</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/topics/" className="text-primary hover:underline font-medium">All Topics</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {topics.map((t) => (
                  <li key={t.slug}>
                    <Link to={`/resources/topics/${t.slug}/`} className="text-sm text-primary hover:underline">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Guides */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Guides</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/guides/" className="text-primary hover:underline font-medium">All Guides</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link to={`/resources/guides/${g.slug}/`} className="text-sm text-primary hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Comparisons */}
            <section>
              <h2 className="font-display text-xl font-bold mb-1">Comparisons</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/comparisons/" className="text-primary hover:underline font-medium">All Comparisons</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {comparisons.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/resources/comparisons/${c.slug}/`} className="text-sm text-primary hover:underline">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Sitemap;
