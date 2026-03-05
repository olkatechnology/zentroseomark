import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation("home");
  return (
    <section className="py-20 md:py-28 bg-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-4">{t("ctaTitle")}</h2>
        <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">{t("ctaSubtitle")}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.zentroseo.com/signup?flow=direct">
            <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 text-base flex items-center gap-2">
              {t("common:startFreeTrial", { ns: "common" })} <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="/pricing/">
            <Button className="border border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-3 text-base">
              {t("common:viewPricing", { ns: "common" })}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
