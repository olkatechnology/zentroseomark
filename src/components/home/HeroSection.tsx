import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const isValidUrl = (input: string) => {
  const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
  return pattern.test(input.trim());
};

const HeroSection = () => {
  const { t } = useTranslation(["home", "common"]);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) { setError(t("home:urlError")); return; }
    if (!isValidUrl(url)) { setError(t("home:urlErrorInvalid")); return; }
    setError("");
    window.location.href = `https://app.zentroseo.com/signup?url=${encodeURIComponent(url.trim())}&flow=hero`;
  };

  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-4">
            {t("home:heroTitle1")}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-gradient-primary mb-8">
            {t("home:heroTitle2")}
          </p>
          <form onSubmit={handleCheck} className="max-w-xl mx-auto mb-4">
            <div className="flex flex-col sm:flex-row bg-hero-foreground/10 backdrop-blur rounded-xl p-1.5 border border-hero-muted/20">
              <input type="text" placeholder={t("home:urlPlaceholder")} value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1 bg-transparent text-hero-foreground placeholder:text-hero-muted/60 px-4 py-3 text-sm focus:outline-none" />
              <Button type="submit" className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                {t("common:seeHowFindable")} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
          <p className="text-hero-muted/70 text-sm mb-8">{t("home:heroTimeEstimate")}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-hero-muted">
            {[t("home:chipNoTechSkills"), t("home:chipFreeToStart"), t("home:chipAnyWebsite"), t("home:chipResultsInMinutes")].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full border border-hero-foreground/10 bg-hero-foreground/5">{chip}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
