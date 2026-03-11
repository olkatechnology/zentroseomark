import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ToolCTA = () => {
  const { t } = useTranslation("pages");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 rounded-2xl bg-hero p-8 md:p-12 text-center"
    >
      <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="font-display text-2xl md:text-3xl font-bold text-hero-foreground mb-3">
        {t("toolCtaHeading")}
      </h3>
      <p className="text-hero-muted text-base max-w-lg mx-auto mb-6">
        {t("toolCtaDescription")}
      </p>
      <a href="https://app.zentroseo.com/signup?flow=tools">
        <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground px-8 py-3 text-base">
          {t("toolCtaButton")} <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </motion.div>
  );
};

export default ToolCTA;
