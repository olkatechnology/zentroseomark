import { Helmet } from "react-helmet-async";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { blogPosts, blogCategories, categorySlug } from "@/data/blog-posts";
import { featuresData } from "@/data/features";
import { glossaryTerms } from "@/data/glossary";
import { topics } from "@/data/topics";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const Sitemap = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();
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
    url: getCanonicalUrl(lang, "/sitemap/"),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("sitemapMetaTitle")}</title>
        <meta name="description" content={t("sitemapMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/sitemap/")} />
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
                <li><LocalizedLink to="/" className="text-primary hover:underline">{t("home")}</LocalizedLink></li>
                <li><LocalizedLink to="/pricing/" className="text-primary hover:underline">{t("common:viewPricing", { ns: "common" })}</LocalizedLink></li>
              </ul>
            </section>

            {siteStructure.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-bold mb-1">{section.title}</h2>
                <ul className="mt-3 space-y-1.5">
                  {section.hubLink && (
                    <li>
                      <LocalizedLink to={section.hubLink.href} className="text-primary hover:underline font-medium">
                        {section.hubLink.label}
                      </LocalizedLink>
                    </li>
                  )}
                  {section.links.map((link) => (
                    <li key={link.href} className="ml-4">
                      <LocalizedLink to={link.href} className="text-primary hover:underline">{link.label}</LocalizedLink>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("blog")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <LocalizedLink to="/resources/blog/" className="text-primary hover:underline font-medium">{t("allBlogPosts")}</LocalizedLink>
              </p>
              {categories.map((cat) => {
                const posts = blogPosts.filter((p) => p.category === cat);
                if (posts.length === 0) return null;
                return (
                  <div key={cat} className="mb-6">
                    <h3 className="font-display text-base font-semibold mb-2">
                      <LocalizedLink to={`/resources/blog/category/${categorySlug(cat)}/`} className="text-primary hover:underline">
                        {cat}
                      </LocalizedLink>
                      <span className="text-muted-foreground text-sm font-normal ml-2">({posts.length})</span>
                    </h3>
                    <ul className="ml-4 space-y-1">
                      {posts.map((p) => (
                        <li key={p.slug}>
                          <LocalizedLink to={`/resources/blog/${p.slug}/`} className="text-sm text-primary hover:underline">
                            {p.title}
                          </LocalizedLink>
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
                <LocalizedLink to="/resources/glossary/" className="text-primary hover:underline font-medium">{t("allGlossaryTerms")}</LocalizedLink>
              </p>
              <ul className="ml-4 space-y-1">
                {glossaryTerms.map((term) => (
                  <li key={term.slug}>
                    <LocalizedLink to={`/resources/glossary/${term.slug}/`} className="text-sm text-primary hover:underline">
                      {term.term}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("topics")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <LocalizedLink to="/resources/topics/" className="text-primary hover:underline font-medium">{t("allTopics")}</LocalizedLink>
              </p>
              <ul className="ml-4 space-y-1">
                {topics.map((tp) => (
                  <li key={tp.slug}>
                    <LocalizedLink to={`/resources/topics/${tp.slug}/`} className="text-sm text-primary hover:underline">
                      {tp.name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("guides")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <LocalizedLink to="/resources/guides/" className="text-primary hover:underline font-medium">{t("allSitemapGuides")}</LocalizedLink>
              </p>
              <ul className="ml-4 space-y-1">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <LocalizedLink to={`/resources/guides/${g.slug}/`} className="text-sm text-primary hover:underline">
                      {g.title}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-1">{t("comparisons")}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <LocalizedLink to="/resources/comparisons/" className="text-primary hover:underline font-medium">{t("allSitemapComparisons")}</LocalizedLink>
              </p>
              <ul className="ml-4 space-y-1">
                {comparisons.map((c) => (
                  <li key={c.slug}>
                    <LocalizedLink to={`/resources/comparisons/${c.slug}/`} className="text-sm text-primary hover:underline">
                      {c.title}
                    </LocalizedLink>
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