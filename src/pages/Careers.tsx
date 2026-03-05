import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Zap, Users, Globe } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const Careers = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const values = [
    { icon: Zap, titleKey: "careersValueInnovation", descKey: "careersValueInnovationDesc" },
    { icon: Heart, titleKey: "careersValueUserObsessed", descKey: "careersValueUserObsessedDesc" },
    { icon: Users, titleKey: "careersValueCollaborative", descKey: "careersValueCollaborativeDesc" },
    { icon: Globe, titleKey: "careersValueRemote", descKey: "careersValueRemoteDesc" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("careersMetaTitle")}</title>
        <meta name="description" content={t("careersMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/company/careers/")} />
        <meta property="og:title" content={t("careersMetaTitle")} />
        <meta property="og:description" content={t("careersMetaDesc")} />
        <meta property="og:url" content={getCanonicalUrl(lang, "/company/careers/")} />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("company"), href: "/company/" }, { label: t("careers") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4"
          >
            {t("careersHeroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="text-hero-muted text-lg"
          >
            {t("careersHeroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">{t("careersValuesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.titleKey}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{t(v.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(v.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-2xl font-bold mb-3">{t("careersDontSeeRole")}</h2>
          <p className="text-muted-foreground mb-6">{t("careersDontSeeRoleDesc")}</p>
          <LocalizedLink to="/company/contact-us/">
            <Button>{t("getInTouch")}</Button>
          </LocalizedLink>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Careers;
