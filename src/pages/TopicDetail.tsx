import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen, Tag, Wrench } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { topics, getTranslatedTopics } from "@/data/topics";
import { blogPosts } from "@/data/blog-posts";
import { glossaryTerms } from "@/data/glossary";
import { featuresData } from "@/data/features";
import { renderMarkdown } from "@/lib/markdown-renderer";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const TopicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTranslatedTopics().find((t) => t.slug === slug);
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  if (!topic) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold mb-4">{t("topicNotFound")}</h1><LocalizedLink to="/resources/topics/" className="text-primary hover:underline">{t("backToTopics")}</LocalizedLink></div></Layout>);
  }

  const relatedPosts = topic.relatedBlogSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedGlossary = topic.relatedGlossaryTerms.map((s) => glossaryTerms.find((t) => t.slug === s)).filter(Boolean);
  const relatedFeats = topic.relatedFeatures.map((s) => featuresData[s]).filter(Boolean);

  const trendingPosts = relatedPosts.filter((p) => p && (p as any).trending);

  const topicUrl = getCanonicalUrl(lang, `/resources/topics/${topic.slug}/`);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: topic.name,
    description: topic.description,
    url: topicUrl,
    about: topic.entities.map((e) => ({ "@type": e.type || "Thing", name: e.name, ...(e.url && { url: e.url }) })),
    isPartOf: { "@type": "WebSite", name: "ZentroSEO", url: "https://zentroseo.com" },
  };

  return (
    <Layout>
      <Helmet>
        <title>{topic.name} – SEO Topic Guide | ZentroSEO</title>
        <meta name="description" content={topic.description} />
        <link rel="canonical" href={topicUrl} />
        <meta property="og:title" content={`${topic.name} – SEO Topic Guide`} />
        <meta property="og:description" content={topic.description} />
        <meta property="og:url" content={topicUrl} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("topics"), href: "/resources/topics/" }, { label: topic.name }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{topic.name}</h1>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto">{topic.description}</p>
        </div>
      </section>

      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <LocalizedLink to="/resources/topics/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {t("allTopics")}
          </LocalizedLink>

          <div className="prose-custom">
            {renderMarkdown(topic.heroContent)}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><Tag className="w-5 h-5 text-primary" /> {t("subtopicsHeading")}</h2>
            <div className="flex flex-wrap gap-2">
              {topic.subtopics.map((st) => (
                <span key={st} className="px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground">{st}</span>
              ))}
            </div>
          </div>

          {trendingPosts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">{t("trendingInTopic", { name: topic.name })}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {trendingPosts.map((p) => p && (
                  <LocalizedLink key={p.slug} to={`/resources/blog/${p.slug}/`} className="p-4 rounded-xl border border-primary/20 bg-accent/30 hover:border-primary/40 hover:shadow-card transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" className="text-[10px] px-2 py-0">{t("trending")}</Badge>
                    </div>
                    <h3 className="font-display font-semibold text-sm line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.readTime} · {p.category}</p>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> {t("relatedArticles")}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedPosts.map((p) => p && (
                  <LocalizedLink key={p.slug} to={`/resources/blog/${p.slug}/`} className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                    <h3 className="font-display font-semibold text-sm group-hover:text-primary line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.readTime} · {p.category}</p>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          )}

          {relatedGlossary.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">{t("keyTerms")}</h2>
              <div className="flex flex-wrap gap-2">
                {relatedGlossary.map((gt) => gt && (
                  <LocalizedLink key={gt.slug} to={`/resources/glossary/${gt.slug}/`} className="px-3 py-1.5 rounded-lg border border-border hover:border-primary/30 text-sm font-medium hover:text-primary transition-colors">{gt.term}</LocalizedLink>
                ))}
              </div>
            </div>
          )}

          {relatedFeats.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><Wrench className="w-5 h-5 text-primary" /> {t("toolsForTopic", { name: topic.name })}</h2>
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

export default TopicDetail;