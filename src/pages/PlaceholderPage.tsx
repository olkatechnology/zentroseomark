import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import CTASection from "@/components/home/CTASection";

interface PlaceholderPageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  heading: string;
  description: string;
}

const PlaceholderPage = ({ title, metaTitle, metaDescription, canonicalPath, heading, description }: PlaceholderPageProps) => {
  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://zentroseo.com${canonicalPath}`} />
      </Helmet>

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {heading}
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{description}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg">This page is being updated. Check back soon for fresh content.</p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default PlaceholderPage;
