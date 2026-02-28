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

const Index = () => {
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
        <title>ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings</title>
        <meta name="description" content="ZentroSEO is the AI-powered SEO platform that helps marketers and businesses grow faster with audits, fixes, schema, keywords, & rank tracking all in one place." />
        <meta property="og:title" content="ZentroSEO – All-in-One AI SEO Engine for Smarter Rankings" />
        <meta property="og:description" content="ZentroSEO is the AI-powered SEO platform that helps marketers and businesses grow faster with audits, fixes, schema, keywords, & rank tracking all in one place." />
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
      <Testimonials testimonials={[
        { quote: "ZentroSEO cut our audit time by 80%. The AI suggestions are spot-on and actionable.", name: "Sarah Chen", role: "Head of SEO", company: "TechFlow" },
        { quote: "We went from page 5 to page 1 for our core keywords in under 3 months. Incredible tool.", name: "Marcus Rivera", role: "Marketing Director", company: "ScaleUp" },
        { quote: "The schema markup generator alone is worth the subscription. Saves us hours every week.", name: "Priya Sharma", role: "Content Lead", company: "GrowthLab" },
        { quote: "Best SEO platform we've used. The keyword clustering feature is a game-changer.", name: "James Okonkwo", role: "Founder", company: "DataPulse" },
        { quote: "Finally an SEO tool that doesn't require a PhD to use. Our whole team adopted it in days.", name: "Emily Larsson", role: "VP Marketing", company: "BrightEdge" },
        { quote: "The rank tracking accuracy and real-time alerts keep us ahead of our competitors.", name: "David Kim", role: "SEO Manager", company: "ClickRise" },
      ]} />
      <FAQSection />
      <CTASection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </Layout>
  );
};

export default Index;
