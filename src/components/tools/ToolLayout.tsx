import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useTranslation } from "react-i18next";

interface ToolLayoutProps {
  toolName: string;
  toolDescription: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  children: React.ReactNode;
}

const ToolLayout = ({
  toolName,
  toolDescription,
  metaTitle,
  metaDescription,
  canonicalPath,
  children,
}: ToolLayoutProps) => {
  const { t } = useTranslation("pages");

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://zentroseo.com${canonicalPath}`} />
      </Helmet>

      <Breadcrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("resources"), href: "/resources/" },
          { label: t("seoToolkitHeroTitle"), href: "/resources/seo-toolkit/" },
          { label: toolName },
        ]}
      />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {toolName}
          </h1>
          <p className="text-hero-muted text-lg max-w-2xl mx-auto">
            {toolDescription}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">{children}</div>
      </section>
    </Layout>
  );
};

export default ToolLayout;
