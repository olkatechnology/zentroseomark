import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import CTASection from "@/components/home/CTASection";

const Features = () => {
  return (
    <Layout>
      <Helmet>
        <title>All ZentroSEO Features – AI Tools for Every SEO Task</title>
        <meta name="description" content="Discover ZentroSEO's powerful features including audits, fixes, schema generation, rank tracking, and competitor analysis, all designed to simplify SEO and maximize visibility." />
        <link rel="canonical" href="https://zentroseo.com/features/" />
        <meta property="og:title" content="All ZentroSEO Features – AI Tools for Every SEO Task" />
        <meta property="og:description" content="Discover ZentroSEO's powerful features including audits, fixes, schema generation, rank tracking, and competitor analysis." />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            All <span className="text-gradient-primary">Features</span>
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">
            A complete SEO solution designed to simplify optimization and maximize your search visibility.
          </p>
        </div>
      </section>

      <FeaturesGrid />
      <CTASection />
    </Layout>
  );
};

export default Features;
