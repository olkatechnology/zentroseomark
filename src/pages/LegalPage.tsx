import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { legalPages } from "@/data/legal";

interface LegalPageProps {
  slug?: string;
}

const LegalPage = ({ slug: propSlug }: LegalPageProps) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug;
  const page = slug ? legalPages[slug] : null;

  if (!page) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Page not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://zentroseo.com/${page.slug}/`} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.title }]} />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-2">{page.title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {page.lastUpdated}</p>
          
          <div className="space-y-8">
            {page.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
