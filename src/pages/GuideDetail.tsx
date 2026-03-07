import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { guides } from "@/data/guides";
import { blogPosts } from "@/data/blog-posts";
import { featuresData } from "@/data/features";
import { renderMarkdown } from "@/lib/markdown-renderer";
import { useTranslation } from "react-i18next";

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((g) => g.slug === slug);
  const { t } = useTranslation("pages");

  if (!guide) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold mb-4">{t("guideNotFound")}</h1><Link to="/resources/guides/" className="text-primary hover:underline">{t("backToGuides")}</Link></div></Layout>);
  }

  const relatedPosts = guide.relatedBlogSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedFeats = guide.relatedFeatures.map((s) => featuresData[s]).filter(Boolean);
  const guideUrl = `https://zentroseo.com/resources/guides/${guide.slug}/`;

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.excerpt,
    totalTime: `PT${parseInt(guide.estimatedTime)}M`,
    step: guide.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{guide.title} – SEO Guide | ZentroSEO</title>
        <meta name="description" content={guide.excerpt} />
        <link rel="canonical" href={guideUrl} />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.excerpt} />
        <meta property="og:url" content={guideUrl} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("guides"), href: "/resources/guides/" }, { label: guide.title }]} />

      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/resources/guides/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> {t("backToGuides")}
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{guide.difficulty}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> {guide.estimatedTime}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{guide.excerpt}</p>

          <div className="bg-secondary/50 rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-display font-bold mb-4">{t("stepsInGuide")}</h2>
            <ol className="space-y-3">
              {guide.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <p className="font-medium text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {guide.prerequisites.length > 0 && (
            <div className="mb-8">
              <h2 className="font-display font-bold mb-2">{t("prerequisites")}</h2>
              <ul className="space-y-1.5">
                {guide.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {p}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose-custom">{renderMarkdown(guide.content)}</div>

          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">{t("relatedReading")}</h2>
              <ul className="space-y-2">
                {relatedPosts.map((p) => p && <li key={p.slug}><Link to={`/resources/blog/${p.slug}/`} className="text-primary hover:underline text-sm">{p.title}</Link></li>)}
              </ul>
            </div>
          )}

          {relatedFeats.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">{t("toolsInGuide")}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedFeats.map((f) => (
                  <Link key={f.slug} to={`/features/${f.slug}/`} className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                    <h3 className="font-display font-semibold text-sm">{f.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{f.tagline}</p>
                  </Link>
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

export default GuideDetail;
