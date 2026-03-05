import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, ShoppingCart, PenTool, CheckCircle } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const audiences = [
  { labelKey: "forAgencies", href: "/solutions/for-agencies/", icon: Users, descriptionKey: "forAgenciesDesc", highlight: "ZentroWhite, ZentroAudit, ZentroFix" },
  { labelKey: "forStartups", href: "/solutions/for-startups/", icon: Rocket, descriptionKey: "forStartupsDesc", highlight: "ZentroAudit, ZentroFix, ZentroKeywords" },
  { labelKey: "forEcommerce", href: "/solutions/for-e-commerce/", icon: ShoppingCart, descriptionKey: "forEcommerceDesc", highlight: "ZentroMarkup, ZentroAudit, ZentroFix" },
  { labelKey: "forContentCreators", href: "/solutions/for-content-creators/", icon: PenTool, descriptionKey: "forContentCreatorsDesc", highlight: "ZentroWrite, ZentroKeywords, ZentroRank" },
];

const toolMatrix = [
  { tool: "ZentroAudit", agencies: true, startups: true, ecommerce: true, creators: false },
  { tool: "ZentroFix", agencies: true, startups: true, ecommerce: true, creators: false },
  { tool: "ZentroKeywords", agencies: true, startups: true, ecommerce: false, creators: true },
  { tool: "ZentroRank", agencies: true, startups: false, ecommerce: false, creators: true },
  { tool: "ZentroWrite", agencies: false, startups: true, ecommerce: false, creators: true },
  { tool: "ZentroCompare", agencies: true, startups: false, ecommerce: true, creators: false },
  { tool: "ZentroBacklinks", agencies: true, startups: false, ecommerce: false, creators: false },
  { tool: "ZentroMarkup", agencies: false, startups: false, ecommerce: true, creators: true },
  { tool: "ZentroWhite", agencies: true, startups: false, ecommerce: false, creators: false },
];

const SolutionHub = () => {
  const { t } = useTranslation(["pages", "nav"]);
  const { lang } = useLang();

  return (
    <Layout>
      <Helmet>
        <title>{t("pages:solutionsMetaTitle")}</title>
        <meta name="description" content={t("pages:solutionsMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/solutions/")} />
        <meta property="og:title" content={t("pages:solutionsMetaTitle")} />
        <meta property="og:description" content={t("pages:solutionsMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("pages:home"), href: "/" }, { label: t("pages:solutions") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("pages:solutionsHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">{t("pages:solutionsHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((a, i) => {
              const AIcon = a.icon;
              return (
                <motion.div key={a.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <LocalizedLink to={a.href} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                    <AIcon className="w-8 h-8 text-primary mb-4" />
                    <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{t(`nav:${a.labelKey}`)}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{t(`nav:${a.descriptionKey}`)}</p>
                    <p className="text-xs text-primary font-medium">{t("pages:keyTools")} {a.highlight}</p>
                  </LocalizedLink>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-8">{t("pages:whichToolsDoYouNeed")}</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">{t("pages:tool")}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t("pages:agencies")}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t("pages:startups")}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t("pages:ecommerce")}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t("pages:creators")}</th>
                </tr>
              </thead>
              <tbody>
                {toolMatrix.map((row) => (
                  <tr key={row.tool} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.tool}</td>
                    {[row.agencies, row.startups, row.ecommerce, row.creators].map((v, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {v ? <CheckCircle className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SolutionHub;
