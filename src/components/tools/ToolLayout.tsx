import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ToolCTA from "./ToolCTA";
import RelatedTools from "./RelatedTools";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedTool {
  title: string;
  href: string;
  description: string;
}

interface ToolLayoutProps {
  toolName: string;
  toolDescription: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  children: React.ReactNode;
  showCTA?: boolean;
  ctaHeadline?: string;
  ctaSubtitle?: string;
  howToUse?: string[];
  whatIs?: string;
  whatIsTitle?: string;
  whyMatters?: string;
  whyMattersTitle?: string;
  faqs?: FAQ[];
  relatedTools?: RelatedTool[];
}

const ToolLayout = ({
  toolName,
  toolDescription,
  metaTitle,
  metaDescription,
  canonicalPath,
  children,
  showCTA = false,
  ctaHeadline,
  ctaSubtitle,
  howToUse,
  whatIs,
  whatIsTitle,
  whyMatters,
  whyMattersTitle,
  faqs,
  relatedTools,
}: ToolLayoutProps) => {
  const { lang } = useLang();
  const { t } = useTranslation("pages");
  const canonicalUrl = getCanonicalUrl(lang, canonicalPath);

  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: toolName,
    description: toolDescription,
    url: canonicalUrl,
    applicationCategory: "SEO Tool",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "ZentroSEO",
      url: "https://zentroseo.com",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(webAppSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Breadcrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("resources"), href: "/resources/" },
          { label: t("seoToolkitHeroTitle"), href: "/resources/seo-toolkit/" },
          { label: toolName },
        ]}
      />

      <section className="bg-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-3">
            {toolName}
          </h1>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto">
            {toolDescription}
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">{children}</div>
      </section>

      {/* How to Use */}
      {howToUse && howToUse.length > 0 && (
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-5">How to Use This Tool</h2>
            <ol className="space-y-3">
              {howToUse.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* What Is... */}
      {whatIs && (
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-4">
              {whatIsTitle || `What Is a ${toolName}?`}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{whatIs}</p>
          </div>
        </section>
      )}

      {/* Why It Matters */}
      {whyMatters && (
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-4">
              {whyMattersTitle || `Why ${toolName} Matters for SEO`}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{whyMatters}</p>
          </div>
        </section>
      )}

      {/* Related Tools */}
      {relatedTools && relatedTools.length > 0 && (
        <RelatedTools tools={relatedTools} />
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-5">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {showCTA && (
        <ToolCTA headline={ctaHeadline} subtitle={ctaSubtitle} />
      )}
    </Layout>
  );
};

export default ToolLayout;
