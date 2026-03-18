import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, X, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

interface Plan {
  nameKey: string;
  monthlyPrice: string;
  yearlyPrice: string;
  descKey: string;
  outcomeKey: string;
  popular?: boolean;
  free?: boolean;
  href: string;
}

const plans: Plan[] = [
  {
    nameKey: "free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    descKey: "freeDesc",
    outcomeKey: "freeOutcome",
    free: true,
    href: "https://app.zentroseo.com/signup?plan=free&flow=pricing",
  },
  {
    nameKey: "starter",
    monthlyPrice: "$19",
    yearlyPrice: "$190",
    descKey: "starterDesc",
    outcomeKey: "starterOutcome",
    href: "https://app.zentroseo.com/signup?plan=starter&flow=pricing",
  },
  {
    nameKey: "growth",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    descKey: "growthDesc",
    outcomeKey: "growthOutcome",
    popular: true,
    href: "https://app.zentroseo.com/signup?plan=growth&flow=pricing",
  },
  {
    nameKey: "business",
    monthlyPrice: "$99",
    yearlyPrice: "$990",
    descKey: "businessDesc",
    outcomeKey: "businessOutcome",
    href: "https://app.zentroseo.com/signup?plan=business&flow=pricing",
  },
];

const faqKeys = ["faqCancel", "faqTrial", "faqData", "faqDifference"] as const;

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const { t } = useTranslation(["pricing", "common"]);
  const { lang } = useLang();

  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZentroSEO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: getCanonicalUrl(lang, "/pricing/"),
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: t(`pricing:${plan.nameKey}`),
      description: t(`pricing:${plan.descKey}`),
      price: (billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice).replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      url: plan.href,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: t(`pricing:${key}Q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`pricing:${key}A`),
      },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("pricing:metaTitle")}</title>
        <meta name="description" content={t("pricing:metaDescription")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/pricing/")} />
        <meta property="og:title" content={t("pricing:metaTitle")} />
        <meta property="og:description" content={t("pricing:metaDescription")} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(pricingJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {t("pricing:heroTitle")}{" "}
            <span className="text-gradient-primary">{t("pricing:heroTitleHighlight")}</span>
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto mb-8">
            {t("pricing:heroSubtitle")}
          </p>

          <div className="inline-flex items-center bg-hero-foreground/10 rounded-full p-1 border border-hero-muted/20">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                billing === "monthly" ? "bg-primary text-primary-foreground" : "text-hero-muted"
              }`}
            >
              {t("pricing:monthly")}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                billing === "yearly" ? "bg-primary text-primary-foreground" : "text-hero-muted"
              }`}
            >
              {t("pricing:yearly")}{" "}
              <span className="text-xs opacity-80">{t("pricing:saveYearly")}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-16 bg-background -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const period = billing === "monthly" ? "/mo" : "/yr";
              const planName = t(`pricing:${plan.nameKey}`);

              return (
                <motion.div
                  key={plan.nameKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative rounded-xl border p-6 bg-card flex flex-col ${
                    plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {t("pricing:mostPopular")}
                    </div>
                  )}
                  {plan.free && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full border">
                      {t("pricing:freeForever")}
                    </div>
                  )}

                  <h3 className="font-display text-lg font-semibold text-foreground">{planName}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t(`pricing:${plan.outcomeKey}`)}</p>

                  <div className="mt-4 mb-2">
                    <span className="text-3xl font-display font-bold text-foreground">{price}</span>
                    {!plan.free && <span className="text-muted-foreground text-sm">{period}</span>}
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {t(`pricing:${plan.descKey}`)}
                  </p>

                  <a href={`${plan.href}&billing=${billing}`}>
                    <Button
                      className={`w-full font-semibold ${
                        plan.popular ? "bg-gradient-cta hover:opacity-90 text-primary-foreground" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {t("pricing:startWith", { plan: planName })}
                    </Button>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" /> {t("pricing:noCreditCard")}
            </span>
            <span className="flex items-center gap-1.5">
              <X className="w-4 h-4 text-primary" /> {t("pricing:cancelAnytime")}
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-primary" /> {t("pricing:dataAlwaysYours")}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            {t("pricing:pricingFaqTitle")}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-left text-foreground">
                  {t(`pricing:${key}Q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`pricing:${key}A`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
