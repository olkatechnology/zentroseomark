import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import CTASection from "@/components/home/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const featuresFaqs = [
  {
    q: "What SEO features does ZentroSEO include?",
    a: "ZentroSEO includes 8 core tools: ZentroAudit (entity-based SEO audits), ZentroFix (one-click fixes), ZentroKeywords (keyword research), ZentroRank (rank tracking), ZentroWrite (AI content optimization), ZentroCompare (competitor analysis), ZentroBacklinks (backlink monitoring), and ZentroMarkup (schema markup generation). All tools work together in one platform.",
  },
  {
    q: "Can I try ZentroSEO features for free?",
    a: "Yes. The free plan gives you access to core audit features, limited keyword research, and our full suite of 18 free SEO tools. You can upgrade anytime to unlock deeper analysis, more projects, and advanced features like rank tracking and competitor monitoring.",
  },
  {
    q: "How is ZentroSEO different from Ahrefs or SEMrush?",
    a: "ZentroSEO is built for semantic SEO and entity-based optimization from the ground up. While Ahrefs and SEMrush focus on traditional keyword and backlink metrics, ZentroSEO analyzes topical authority, entity coverage, and content depth — the signals modern search engines actually use to rank pages.",
  },
  {
    q: "Do I need technical knowledge to use ZentroSEO?",
    a: "No. ZentroSEO is designed for non-technical marketers and business owners. Every audit finding includes plain-English explanations, one-click fixes, and step-by-step guidance. You don't need to know HTML, JavaScript, or server configuration.",
  },
];

const Features = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("featuresMetaTitle"),
    description: t("featuresMetaDesc"),
    url: getCanonicalUrl(lang, "/features/"),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: 8,
      itemListElement: [
        { "@type": "ListItem", position: 1, url: getCanonicalUrl(lang, "/features/zentroaudit/"), name: "ZentroAudit" },
        { "@type": "ListItem", position: 2, url: getCanonicalUrl(lang, "/features/zentrofix/"), name: "ZentroFix" },
        { "@type": "ListItem", position: 3, url: getCanonicalUrl(lang, "/features/zentrokeywords/"), name: "ZentroKeywords" },
        { "@type": "ListItem", position: 4, url: getCanonicalUrl(lang, "/features/zentrorank/"), name: "ZentroRank" },
        { "@type": "ListItem", position: 5, url: getCanonicalUrl(lang, "/features/zentrowrite/"), name: "ZentroWrite" },
        { "@type": "ListItem", position: 6, url: getCanonicalUrl(lang, "/features/zentrocompare/"), name: "ZentroCompare" },
        { "@type": "ListItem", position: 7, url: getCanonicalUrl(lang, "/features/zentrobacklinks/"), name: "ZentroBacklinks" },
        { "@type": "ListItem", position: 8, url: getCanonicalUrl(lang, "/features/zentromarkup/"), name: "ZentroMarkup" },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: featuresFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("featuresMetaTitle")}</title>
        <meta name="description" content={t("featuresMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/features/")} />
        <meta property="og:title" content={t("featuresMetaTitle")} />
        <meta property="og:description" content={t("featuresMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(collectionJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {t("featuresHeroTitle")} <span className="text-gradient-primary">{t("featuresHeroHighlight")}</span>
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">
            {t("featuresHeroSubtitle")}
          </p>
        </div>
      </section>

      {/* Introductory content for semantic depth */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Everything You Need to Rank Higher
          </h2>
          <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
            <p>
              ZentroSEO combines eight purpose-built tools into a single platform designed around how modern search engines actually work. Instead of treating SEO as a checklist of keywords and backlinks, ZentroSEO analyzes your site through the lens of <strong>topical authority</strong>, <strong>entity coverage</strong>, and <strong>semantic content depth</strong> — the signals that Google, Bing, and AI search platforms use to determine which pages deserve to rank.
            </p>
            <p>
              From your first audit to ongoing rank tracking, every feature works together. ZentroAudit identifies issues, ZentroFix resolves them, ZentroKeywords finds opportunities, and ZentroWrite helps you create content that covers topics comprehensively. No more switching between five different tools — one platform, one workflow, better rankings.
            </p>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* FAQ section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {featuresFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Features;
