import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import TableOfContents from "@/components/blog/TableOfContents";
import { blogPosts, getTranslatedBlogPost, getTranslatedBlogPosts } from "@/data/blog-posts";
import { teamMembers } from "@/data/team";
import { featuresData } from "@/data/features";
import { Badge } from "@/components/ui/badge";
import { slugify, extractHeadings, extractFAQs, renderMarkdown } from "@/lib/markdown-renderer";
import { useTranslation } from "react-i18next";
import { formatDate, formatDateLong } from "@/lib/date-utils";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getTranslatedBlogPost(slug);
  const { t, i18n } = useTranslation("pages");
  const { lang } = useLang();

  const tocItems = useMemo(() => (post ? extractHeadings(post.content) : []), [post]);
  const faqItems = useMemo(() => (post ? extractFAQs(post.content) : []), [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">{t("postNotFound")}</h1>
          <p className="text-muted-foreground mb-6">{t("postNotFoundDesc")}</p>
          <LocalizedLink to="/resources/blog/" className="text-primary hover:underline">{t("backToBlog")}</LocalizedLink>
        </div>
      </Layout>
    );
  }

  const allTranslatedPosts = getTranslatedBlogPosts();
  const related = allTranslatedPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const relatedPillarPosts = (post.relatedSlugs || []).map((s) => allTranslatedPosts.find((p) => p.slug === s)).filter(Boolean) as typeof allTranslatedPosts;
  const hubPost = post.topicalMapHub ? allTranslatedPosts.find((p) => p.slug === post.topicalMapHub) : null;
  const spokeArticles = post.isHub ? allTranslatedPosts.filter((p) => p.topicalMapHub === post.slug) : [];
  const siblingSpokes = hubPost ? allTranslatedPosts.filter((p) => p.topicalMapHub === hubPost.slug && p.slug !== post.slug).slice(0, 4) : [];
  const authorMember = teamMembers.find((m) => m.name === post.author);
  const authorUrl = authorMember ? getCanonicalUrl(lang, `/company/team/${authorMember.authorSlug}/`) : getCanonicalUrl(lang, "/company/about-us/");
  const relatedFeatureData = (post.relatedFeatures || []).map((slug) => featuresData[slug]).filter(Boolean);
  const formattedDate = formatDateLong(post.date, i18n.language);
  const formattedModifiedDate = post.dateModified && post.dateModified !== post.date ? formatDate(post.dateModified, i18n.language) : null;
  const postUrl = getCanonicalUrl(lang, `/resources/blog/${post.slug}/`);

  const authorJsonLd: Record<string, unknown> = { "@type": "Person", name: post.author, url: authorUrl };
  if (authorMember) {
    authorJsonLd.jobTitle = authorMember.jobTitle;
    authorJsonLd.sameAs = authorMember.sameAs;
    authorJsonLd.knowsAbout = authorMember.knowsAbout;
  }

  const articleJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    datePublished: post.date, dateModified: post.dateModified || post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: authorJsonLd,
    publisher: { "@type": "Organization", name: "ZentroSEO", url: "https://zentroseo.com", logo: { "@type": "ImageObject", url: "https://zentroseo.com/zentroseo-logo.png" } },
    ...(post.featuredImage && { image: post.featuredImage }),
  };

  if (post.entities && post.entities.length > 0) {
    const toEntity = (e: { name: string; url?: string; type?: string }) => {
      const obj: Record<string, string> = { "@type": e.type || "Thing", name: e.name };
      if (e.url) obj.url = e.url;
      return obj;
    };
    articleJsonLd.about = post.entities.slice(0, 5).map(toEntity);
    if (post.entities.length > 5) articleJsonLd.mentions = post.entities.slice(5).map(toEntity);
  }

  if (hubPost) {
    articleJsonLd.isPartOf = { "@type": "Article", name: hubPost.title, url: getCanonicalUrl(lang, `/resources/blog/${hubPost.slug}/`) };
  }
  if (post.isHub && spokeArticles.length > 0) {
    articleJsonLd.hasPart = spokeArticles.map((sp) => ({ "@type": "Article", name: sp.title, url: getCanonicalUrl(lang, `/resources/blog/${sp.slug}/`) }));
  }

  const firstH2 = tocItems.find((t) => t.level === 2);
  if (firstH2) {
    articleJsonLd.speakable = { "@type": "SpeakableSpecification", cssSelector: [`#${firstH2.id}`, ".prose-custom > p:first-of-type"] };
  }

  const faqJsonLd = faqItems.length >= 2 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  } : null;

  const howToJsonLd = post.schemaType === "HowTo" && post.howToSteps ? {
    "@context": "https://schema.org", "@type": "HowTo", name: post.title, description: post.excerpt,
    step: post.howToSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  } : null;

  return (
    <Layout>
      <Helmet>
        <title>{post.title} – ZentroSEO Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featuredImage || "https://zentroseo.com/og-default.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post.featuredImage || "https://zentroseo.com/og-default.png"} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
        {howToJsonLd && <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>}
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("blog"), href: "/resources/blog/" }, { label: post.title }]} />

      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LocalizedLink to="/resources/blog/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> {t("backToBlog")}
            </LocalizedLink>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{post.category}</span>
              {post.isHub && <Badge variant="default" className="text-xs">{t("pillarGuide")}</Badge>}
            </div>
            {hubPost && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t("partOf")}</span>
                <LocalizedLink to={`/resources/blog/${hubPost.slug}/`} className="text-primary hover:underline font-medium">{hubPost.title}</LocalizedLink>
              </div>
            )}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {authorMember ? (<LocalizedLink to={`/company/team/${authorMember.authorSlug}/`} className="hover:text-primary transition-colors">{post.author}</LocalizedLink>) : post.author}
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formattedDate}</span>
              {formattedModifiedDate && (<span className="flex items-center gap-1.5 text-primary font-medium">{t("updated")} {formattedModifiedDate}</span>)}
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} {t("read")}</span>
            </div>
            {post.featuredImage && (<img src={post.featuredImage} alt={post.title} className="w-full rounded-xl mb-10 aspect-video object-cover" loading="eager" />)}
          </div>
          <div className="max-w-3xl mx-auto lg:hidden"><TableOfContents items={tocItems} /></div>
          <div className="flex gap-8 max-w-5xl mx-auto">
            <div role="main" className="prose-custom flex-1 min-w-0 max-w-3xl">{renderMarkdown(post.content)}</div>
            <div className="hidden lg:block"><TableOfContents items={tocItems} /></div>
          </div>
        </div>
      </article>

      {siblingSpokes.length > 0 && (
        <aside className="py-12 bg-accent/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-2">{t("continueReading")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("moreArticlesIn")} <LocalizedLink to={`/resources/blog/${hubPost!.slug}/`} className="text-primary hover:underline font-medium">{hubPost!.title}</LocalizedLink> {t("series")}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {siblingSpokes.map((sp) => (
                <LocalizedLink key={sp.slug} to={`/resources/blog/${sp.slug}/`} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div><h3 className="font-display font-semibold text-sm line-clamp-2">{sp.title}</h3><p className="text-xs text-muted-foreground mt-1">{sp.readTime} {t("read")}</p></div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto mt-1 shrink-0" />
                </LocalizedLink>
              ))}
            </div>
          </div>
        </aside>
      )}

      {post.isHub && spokeArticles.length > 0 && (
        <aside className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-2">{t("topicCluster")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("topicClusterDesc")}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {spokeArticles.map((sp) => (
                <LocalizedLink key={sp.slug} to={`/resources/blog/${sp.slug}/`} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div><h3 className="font-display font-semibold text-sm line-clamp-2">{sp.title}</h3><p className="text-xs text-muted-foreground mt-1">{sp.readTime} {t("read")}</p></div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto mt-1 shrink-0" />
                </LocalizedLink>
              ))}
            </div>
          </div>
        </aside>
      )}

      {relatedFeatureData.length > 0 && (
        <aside className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6">{t("recommendedTools")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedFeatureData.map((feat) => {
                const FIcon = feat.icon;
                return (
                  <LocalizedLink key={feat.slug} to={`/features/${feat.slug}/`} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all">
                    <FIcon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <div><h3 className="font-display font-semibold text-sm">{feat.name}</h3><p className="text-xs text-muted-foreground mt-0.5">{feat.tagline}</p></div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto mt-1 shrink-0" />
                  </LocalizedLink>
                );
              })}
            </div>
          </div>
        </aside>
      )}

      {relatedPillarPosts.length > 0 && (
        <aside className="py-12 bg-accent/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-2">{t("relatedPillarGuides")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("relatedPillarGuidesDesc")}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPillarPosts.map((rp) => (
                <LocalizedLink key={rp.slug} to={`/resources/blog/${rp.slug}/`} className="flex flex-col rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all overflow-hidden">
                  {rp.featuredImage && <img src={rp.featuredImage} alt={rp.title} className="w-full h-32 object-cover" loading="lazy" />}
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{rp.category}</span>
                    <h3 className="font-display font-semibold text-sm mt-1 line-clamp-2">{rp.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{rp.readTime} {t("read")}</p>
                  </div>
                </LocalizedLink>
              ))}
            </div>
          </div>
        </aside>
      )}

      {related.length > 0 && (
        <aside className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-6">{t("relatedArticles")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rp) => (
                <LocalizedLink key={rp.slug} to={`/resources/blog/${rp.slug}/`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all">
                  <span className="text-xs text-primary font-medium">{rp.category}</span>
                  <h3 className="font-display font-semibold text-sm mt-1 line-clamp-2">{rp.title}</h3>
                </LocalizedLink>
              ))}
            </div>
          </div>
        </aside>
      )}

      <CTASection />
    </Layout>
  );
};

export default BlogPostPage;
