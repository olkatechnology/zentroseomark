import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import CTASection from "@/components/home/CTASection";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation("pages");

  return (
    <Layout>
      <Helmet>
        <title>{t("featuresMetaTitle")}</title>
        <meta name="description" content={t("featuresMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/features/" />
        <meta property="og:title" content={t("featuresMetaTitle")} />
        <meta property="og:description" content={t("featuresMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
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

      <FeaturesGrid />
      <CTASection />
    </Layout>
  );
};

export default Features;
