import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowLeftRight } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { comparisons, getTranslatedComparisons } from "@/data/comparisons";
import { blogPosts } from "@/data/blog-posts";
import { featuresData } from "@/data/features";
import { renderMarkdown } from "@/lib/markdown-renderer";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const ComparisonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const comp = getTranslatedComparisons().find((c) => c.slug === slug);
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  if (!comp) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold mb-4">{t("comparisonNotFound")}</h1><LocalizedLink to="/resources/comparisons/" className="text-primary hover:underline">{t("backToComparisons")}</LocalizedLink></div></Layout>);
  }

  const relatedPosts = comp.relatedBlogSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedFeats = comp.relatedFeatures.map((s) => featuresData[s]).filter(Boolean);
  const compUrl = getCanonicalUrl(lang, `/resources/comparisons/${comp.slug}/`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comp.title,
    description: comp.excerpt,
    url: compUrl,
    about: comp.entities.map((e) => ({ "@type": e.type || "Thing", name: e.name, ...(e.url && { url: e.url }) })),
    publisher: { "@type": "Organization", name: "ZentroSEO", url: "https://zentroseo.com" },
  };

  return (
    <Layout>
      <Helmet>
        <title>{comp.title} | ZentroSEO</title>
        <meta name="description" content={comp.excerpt} />
        <link rel="canonical" href={compUrl} />
        <meta property="og:title" content={comp.title} />
        <meta property="og:description" content={comp.excerpt} />
        <meta property="og:url" content={compUrl} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("comparisons"), href: "/resources/comparisons/" }, { label: comp.title }]} />

      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <LocalizedLink to="/resources/comparisons/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> {t("backToComparisons")}
          </LocalizedLink>

          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">{comp.category}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">{comp.title}</h1>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-xl border border-border bg-card">
              <h2 className="font-display font-bold mb-2">{comp.itemA.name}</h2>
              <p className="text-sm text-muted-foreground">{comp.itemA.description}</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <h2 className="font-display font-bold mb-2">{comp.itemB.name}</h2>
              <p className="text-sm text-muted-foreground">{comp.itemB.description}</p>
            </div>
          </div>

          <div className="prose-custom">{renderMarkdown(comp.content)}</div>

          <div className="mt-10 p-6 rounded-xl bg-accent/50 border border-primary/20">
            <h2 className="font-display font-bold mb-2 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5 text-primary" /> {t("theVerdict")}</h2>
            <p className="text-muted-foreground">{comp.verdict}</p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">{t("relatedReading")}</h2>
              <ul className="space-y-2">
                {relatedPosts.map((p) => p && <li key={p.slug}><LocalizedLink to={`/resources/blog/${p.slug}/`} className="text-primary hover:underline text-sm">{p.title}</LocalizedLink></li>)}
              </ul>
            </div>
          )}

          {relatedFeats.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">{t("relatedTools")}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedFeats.map((f) => (
                  <LocalizedLink key={f.slug} to={`/features/${f.slug}/`} className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                    <h3 className="font-display font-semibold text-sm">{f.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{f.tagline}</p>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </Layout>
  );
};

export default ComparisonDetail;