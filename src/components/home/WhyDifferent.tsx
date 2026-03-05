import { motion } from "framer-motion";
import { Zap, Brain, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyDifferent = () => {
  const { t } = useTranslation("home");
  const differentiators = [
    { icon: Brain, title: t("diff1Title"), desc: t("diff1Desc") },
    { icon: Zap, title: t("diff2Title"), desc: t("diff2Desc") },
    { icon: Eye, title: t("diff3Title"), desc: t("diff3Desc") },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("whyDifferentTitle")}</h2>
              <p className="text-muted-foreground text-lg mb-8">{t("whyDifferentSubtitle")}</p>
              <a href="https://app.zentroseo.com/signup?flow=direct" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">{t("whyDifferentCta")}</a>
            </div>
            <div className="space-y-5">
              {differentiators.map((d, i) => (
                <motion.div key={d.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="flex items-start gap-4 p-5 rounded-xl border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0"><d.icon className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
