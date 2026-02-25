import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyDifferent from "@/components/home/WhyDifferent";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings</title>
        <meta name="description" content="ZentroSEO is the AI-powered SEO platform that helps marketers and businesses grow faster with audits, fixes, schema, keywords, & rank tracking all in one place." />
        <meta property="og:title" content="ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings" />
        <meta property="og:description" content="ZentroSEO is the AI-powered SEO platform that helps marketers and businesses grow faster with audits, fixes, schema, keywords, & rank tracking all in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentroseo.com/" />
        <link rel="canonical" href="https://zentroseo.com/" />
      </Helmet>

      <HeroSection />
      <WhyDifferent />
      <FeaturesGrid />
      <HowItWorks />
      <FAQSection />
      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
