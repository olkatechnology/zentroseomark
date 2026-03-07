import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ToolkitsSection from "@/components/home/ToolkitsSection";
import Testimonials from "@/components/shared/Testimonials";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyDifferent from "@/components/home/WhyDifferent";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation("home");

  const testimonials = [
    { quote: t("testimonial1Quote"), name: t("testimonial1Name"), role: t("testimonial1Role"), company: t("testimonial1Company") },
    { quote: t("testimonial2Quote"), name: t("testimonial2Name"), role: t("testimonial2Role"), company: t("testimonial2Company") },
    { quote: t("testimonial3Quote"), name: t("testimonial3Name"), role: t("testimonial3Role"), company: t("testimonial3Company") },
    { quote: t("testimonial4Quote"), name: t("testimonial4Name"), role: t("testimonial4Role"), company: t("testimonial4Company") },
    { quote: t("testimonial5Quote"), name: t("testimonial5Name"), role: t("testimonial5Role"), company: t("testimonial5Company") },
    { quote: t("testimonial6Quote"), name: t("testimonial6Name"), role: t("testimonial6Role"), company: t("testimonial6Company") },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZentroSEO",
    url: "https://zentroseo.com",
    logo: "https://zentroseo.com/zentroseo-logo.png",
    description: "AI-powered SEO platform that helps marketers and businesses grow faster with audits, fixes, schema, keywords, and rank tracking.",
    foundingDate: "2021",
    founders: [
      { "@type": "Person", name: "Tomisin Sode", url: "https://www.linkedin.com/in/tomisinsode/" },
      { "@type": "Person", name: "Olayinka Olayokun", url: "https://www.linkedin.com/in/olayinkaolayokun/" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/zentroseo/",
      "https://x.com/ZentroSEO",
      "https://www.youtube.com/@ZentroSEO",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@zentroseo.com",
      contactType: "customer support",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ZentroSEO",
    url: "https://zentroseo.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zentroseo.com/resources/blog/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZentroSEO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "AI-powered SEO platform for smarter rankings",
    url: "https://zentroseo.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan available",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("home:metaTitle", { ns: "home", defaultValue: "ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings" })}</title>
        <meta name="description" content={t("home:metaDescription", { ns: "home", defaultValue: "ZentroSEO is the AI-powered SEO platform for non-techies to run audits, schema, keywords, and rank tracking — all in one place." })} />
        <meta property="og:title" content={t("home:metaTitle", { ns: "home", defaultValue: "ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings" })} />
        <meta property="og:description" content={t("home:metaDescription", { ns: "home", defaultValue: "ZentroSEO is the AI-powered SEO platform for non-techies to run audits, schema, keywords, and rank tracking — all in one place." })} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentroseo.com/" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <link rel="canonical" href="https://zentroseo.com/" />
      </Helmet>

      <HeroSection />
      <TrustedBy />
      <ToolkitsSection />
      <WhyDifferent />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials testimonials={testimonials} />
      <FAQSection />
      <CTASection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </Layout>
  );
};

export default Index;
