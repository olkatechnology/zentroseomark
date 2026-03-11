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
import { useTranslation } from "react-i18next";

const Sitemap = () => {
  const { t } = useTranslation("pages");
  const categories = blogCategories.filter((c) => c !== "All");

  const siteStructure = [
    {
      title: t("features"),
      links: Object.values(featuresData).map((f) => ({ label: f.name, href: `/features/${f.slug}/` })),
      hubLink: { label: t("sitemapAllFeatures"), href: "/features/" },
    },
    {
      title: t("solutions"),
      links: [
        { label: t("nav:forAgencies", { ns: "nav" }), href: "/solutions/for-agencies/" },
        { label: t("nav:forStartups", { ns: "nav" }), href: "/solutions/for-startups/" },
        { label: t("nav:forEcommerce", { ns: "nav" }), href: "/solutions/for-e-commerce/" },
        { label: t("nav:forContentCreators", { ns: "nav" }), href: "/solutions/for-content-creators/" },
      ],
      hubLink: { label: t("allSolutions"), href: "/solutions/" },
    },
    {
      title: t("company"),
      links: [
        { label: t("aboutUs"), href: "/company/about-us/" },
        { label: t("contactUs"), href: "/company/contact-us/" },
      ],
      hubLink: { label: t("companyHub"), href: "/company/" },
    },
    {
      title: t("resources"),
      links: [
        { label: t("blog"), href: "/resources/blog/" },
        { label: t("guides"), href: "/resources/guides/" },
        { label: t("glossary"), href: "/resources/glossary/" },
        { label: t("topics"), href: "/resources/topics/" },
        { label: t("comparisons"), href: "/resources/comparisons/" },
        { label: t("helpCenterHeroTitle"), href: "/resources/help-center/" },
        { label: t("caseStudiesHeroTitle"), href: "/resources/case-studies/" },
        { label: t("docsHeroTitle"), href: "/resources/documentation/" },
        { label: t("seoToolkitHeroTitle"), href: "/resources/seo-toolkit/" },
      ],
      hubLink: { label: t("allResources"), href: "/resources/" },
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacyPolicy"), href: "/privacy-policy/" },
        { label: t("termsOfService"), href: "/terms-of-service/" },
        { label: t("common:refundPolicy", { ns: "common" }), href: "/refund-policy/" },
      ],
    },
  ];

  const sitemapJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("sitemapMetaTitle"),
    description: t("sitemapMetaDesc"),
    url: "https://zentroseo.com/sitemap/",
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("sitemapMetaTitle")}</title>
        <meta name="description" content={t("sitemapMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/sitemap/" />
        <script type="application/ld+json">{JSON.stringify(sitemapJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("sitemapTitle") }]} />

      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{t("sitemapTitle")}</h1>
          <p className="text-muted-foreground mb-10">{t("sitemapSubtitle")}</p>

          <div className="space-y-10">
            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("mainPages")}</h2>
              <ul className="mt-3 space-y-1.5">
                <li><Link to="/" className="text-primary hover:underline">{t("home")}</Link></li>
                <li><Link to="/pricing/" className="text-primary hover:underline">{t("common:viewPricing", { ns: "common" })}</Link></li>
              </ul>
            </section>

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

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("blog")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/blog/" className="text-primary hover:underline font-medium">{t("allBlogPosts")}</Link>
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

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("glossary")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/glossary/" className="text-primary hover:underline font-medium">{t("allGlossaryTerms")}</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {glossaryTerms.map((term) => (
                  <li key={term.slug}>
                    <Link to={`/resources/glossary/${term.slug}/`} className="text-sm text-primary hover:underline">
                      {term.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("topics")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/topics/" className="text-primary hover:underline font-medium">{t("allTopics")}</Link>
              </p>
              <ul className="ml-4 space-y-1">
                {topics.map((tp) => (
                  <li key={tp.slug}>
                    <Link to={`/resources/topics/${tp.slug}/`} className="text-sm text-primary hover:underline">
                      {tp.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("guides")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/guides/" className="text-primary hover:underline font-medium">{t("allSitemapGuides")}</Link>
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

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("comparisons")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/resources/comparisons/" className="text-primary hover:underline font-medium">{t("allSitemapComparisons")}</Link>
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
