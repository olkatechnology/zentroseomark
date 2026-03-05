import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FAQSection from "@/components/home/FAQSection";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const starterFeatures = ["f_1Website", "f_4BasicAudits", "f_3KeywordTracking", "f_monthlyReports", "f_emailSupport"] as const;
const starterLimits = ["l_100PagesScanned", "l_basicReportingOnly"] as const;
const standardFeatures = ["f_3Websites", "f_20CompleteAudits", "f_100KeywordResearch", "f_50KeywordTracking", "f_5CompetitorAnalysis", "f_backlinkAnalysis", "f_limitedAiWriting", "f_schemaGenerator", "f_weeklyReports", "f_priorityEmailSupport"] as const;
const proFeatures = ["f_10Websites", "f_20CompleteAudits", "f_100KeywordResearch", "f_50KeywordTracking", "f_10CompetitorAnalysis", "f_backlinkAnalysis", "f_unlimitedAiWriting", "f_schemaGeneration", "f_dailyReports", "f_autoSchedulingReports", "f_phoneEmailSupport", "f_whiteLabelReports"] as const;
const advancedFeatures = ["f_unlimitedWebsites", "f_unlimitedAudits", "f_unlimitedKeywordResearch", "f_unlimitedKeywordTracking", "f_unlimitedCompetitorAnalysis", "f_backlinkAnalysis", "f_unlimitedAiWritingShort", "f_schemaGeneration", "f_dailyReports", "f_dedicatedAccountManager", "f_fullWhiteLabel"] as const;

const plans = {
  monthly: [
    { nameKey: "starter", price: "$19", period: "/mo", descKey: "starterDesc", featureKeys: starterFeatures, limitKeys: starterLimits, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=starter_monthly&flow=pricing" },
    { nameKey: "standard", price: "$49", period: "/mo", descKey: "standardDesc", featureKeys: standardFeatures, popular: true, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=standard_monthly&flow=pricing" },
    { nameKey: "pro", price: "$99", period: "/mo", descKey: "proDesc", featureKeys: proFeatures, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=pro_monthly&flow=pricing" },
    { nameKey: "advanced", price: "$299", period: "/mo", descKey: "advancedDesc", featureKeys: advancedFeatures, ctaKey: "contactSales", href: "/company/contact-us/" },
  ],
  yearly: [
    { nameKey: "starter", price: "$190", period: "/yr", descKey: "starterDesc", featureKeys: starterFeatures, limitKeys: starterLimits, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=starter_yearly&flow=pricing" },
    { nameKey: "standard", price: "$490", period: "/yr", descKey: "standardDesc", featureKeys: standardFeatures, popular: true, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=standard_yearly&flow=pricing" },
    { nameKey: "pro", price: "$990", period: "/yr", descKey: "proDesc", featureKeys: proFeatures, ctaKey: "startTrial", href: "https://app.zentroseo.com/signup?plan=pro_yearly&flow=pricing" },
    { nameKey: "advanced", price: "$2,990", period: "/yr", descKey: "advancedDesc", featureKeys: advancedFeatures, ctaKey: "contactSales", href: "/company/contact-us/" },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const { t } = useTranslation(["pricing", "common"]);
  const { lang } = useLang();

  const currentPlans = plans[billing];

  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZentroSEO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: getCanonicalUrl(lang, "/pricing/"),
    offers: currentPlans.map((plan) => ({
      "@type": "Offer",
      name: t(`pricing:${plan.nameKey}`),
      description: t(`pricing:${plan.descKey}`),
      price: plan.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      url: plan.href.startsWith("http") ? plan.href : `https://zentroseo.com${plan.href}`,
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
      </Helmet>

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            {t("pricing:heroTitle")} <span className="text-gradient-primary">{t("pricing:heroTitleHighlight")}</span>
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto mb-8">
            {t("pricing:heroSubtitle")}
          </p>

          <div className="inline-flex items-center bg-hero-foreground/10 rounded-full p-1 border border-hero-muted/20">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${billing === "monthly" ? "bg-primary text-primary-foreground" : "text-hero-muted"}`}
            >
              {t("pricing:monthly")}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${billing === "yearly" ? "bg-primary text-primary-foreground" : "text-hero-muted"}`}
            >
              {t("pricing:yearly")} <span className="text-xs opacity-80">{t("pricing:twoMonthsFree")}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans[billing].map((plan, i) => (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-xl border p-6 bg-card flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {t("pricing:mostPopular")}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{t(`pricing:${plan.nameKey}`)}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-display font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{t(`pricing:${plan.descKey}`)}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.featureKeys.map((fKey) => (
                    <li key={fKey} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {t(`pricing:${fKey}`)}
                    </li>
                  ))}
                </ul>

                {"limitKeys" in plan && plan.limitKeys && (
                  <div className="mb-6 text-xs text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">{t("pricing:limitations")}:</p>
                    {plan.limitKeys.map((lKey) => <p key={lKey}>• {t(`pricing:${lKey}`)}</p>)}
                  </div>
                )}

                <a href={plan.href}>
                  <Button className={`w-full font-semibold ${plan.popular ? "bg-gradient-cta hover:opacity-90 text-primary-foreground" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    {t(`pricing:${plan.ctaKey}`)}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </Layout>
  );
};

export default Pricing;
