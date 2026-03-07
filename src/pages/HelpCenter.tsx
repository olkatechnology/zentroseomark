import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const HelpCenter = () => {
  const { t } = useTranslation("pages");

  const categories = [
    {
      titleKey: "helpCatGettingStarted",
      faqs: [
        { qKey: "helpGS1Q", aKey: "helpGS1A" },
        { qKey: "helpGS2Q", aKey: "helpGS2A" },
        { qKey: "helpGS3Q", aKey: "helpGS3A" },
        { qKey: "helpGS4Q", aKey: "helpGS4A" },
      ],
    },
    {
      titleKey: "helpCatAccountBilling",
      faqs: [
        { qKey: "helpAB1Q", aKey: "helpAB1A" },
        { qKey: "helpAB2Q", aKey: "helpAB2A" },
        { qKey: "helpAB3Q", aKey: "helpAB3A" },
        { qKey: "helpAB4Q", aKey: "helpAB4A" },
      ],
    },
    {
      titleKey: "helpCatFeaturesTools",
      faqs: [
        { qKey: "helpFT1Q", aKey: "helpFT1A" },
        { qKey: "helpFT2Q", aKey: "helpFT2A" },
        { qKey: "helpFT3Q", aKey: "helpFT3A" },
        { qKey: "helpFT4Q", aKey: "helpFT4A" },
      ],
    },
    {
      titleKey: "helpCatTroubleshooting",
      faqs: [
        { qKey: "helpTS1Q", aKey: "helpTS1A" },
        { qKey: "helpTS2Q", aKey: "helpTS2A" },
        { qKey: "helpTS3Q", aKey: "helpTS3A" },
        { qKey: "helpTS4Q", aKey: "helpTS4A" },
      ],
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((c) =>
      c.faqs.map((f) => ({
        "@type": "Question",
        name: t(f.qKey),
        acceptedAnswer: { "@type": "Answer", text: t(f.aKey) },
      }))
    ),
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("helpCenterMetaTitle")}</title>
        <meta name="description" content={t("helpCenterMetaDesc")} />
        <link rel="canonical" href="https://zentroseo.com/resources/help-center/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("helpCenterHeroTitle") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("helpCenterHeroTitle")}</h1>
          <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">{t("helpCenterHeroSubtitle")}</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hero-muted" />
            <Input placeholder={t("helpCenterSearchPlaceholder")} className="pl-10 bg-hero-foreground/10 border-hero-muted/20 text-hero-foreground placeholder:text-hero-muted/50" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {categories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" /> {t(cat.titleKey)}
              </h2>
              <Accordion type="single" collapsible>
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem key={fi} value={`${ci}-${fi}`}>
                    <AccordionTrigger className="text-left">{t(faq.qKey)}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{t(faq.aKey)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default HelpCenter;
