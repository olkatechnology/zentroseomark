import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { teamMembers } from "@/data/team";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const AboutUs = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const stats = [
    { value: "100+", labelKey: "aboutStatWebsites" },
    { value: "2500+", labelKey: "aboutStatIssuesFixed" },
    { value: "340%", labelKey: "aboutStatTrafficGrowth" },
    { value: "99.9%", labelKey: "aboutStatUptime" },
  ];

  const timeline = [
    { year: "2021", titleKey: "timelineBeginning", descKey: "timelineBeginningDesc" },
    { year: "2022", titleKey: "timelineFirstTools", descKey: "timelineFirstToolsDesc" },
    { year: "2023", titleKey: "timelinePlatformGrowth", descKey: "timelinePlatformGrowthDesc" },
    { year: "2024", titleKey: "timelineSemanticSeo", descKey: "timelineSemanticSeoDesc" },
    { year: "2025", titleKey: "timelineScalingUp", descKey: "timelineScalingUpDesc" },
  ];

  const values = [
    { icon: Heart, titleKey: "aboutValueCustomerFirst", descKey: "aboutValueCustomerFirstDesc" },
    { icon: Zap, titleKey: "aboutValueInnovation", descKey: "aboutValueInnovationDesc" },
    { icon: Shield, titleKey: "aboutValueReliability", descKey: "aboutValueReliabilityDesc" },
    { icon: Target, titleKey: "aboutValueCollaboration", descKey: "aboutValueCollaborationDesc" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("aboutMetaTitle")}</title>
        <meta name="description" content={t("aboutMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/company/about-us/")} />
        <meta property="og:title" content={t("aboutMetaTitle")} />
        <meta property="og:description" content={t("aboutMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("company"), href: "/company/" }, { label: t("aboutUs") }]} />

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">{t("aboutHeroSubtitle")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-5 leading-tight">
              {t("aboutHeroTitle")}
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">{t("aboutHeroDesc")}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-6">{t("ourMission")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutMissionP1")}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">{t("aboutMissionP2")}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">{t("ourValues")}</h2>
            <p className="text-muted-foreground">{t("ourValuesSubtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-xl bg-card border border-border">
                  <VIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold mb-2">{t(v.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(v.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">{t("ourJourney")}</h2>
            <p className="text-muted-foreground">{t("ourJourneySubtitle")}</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((tl, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-display font-bold text-primary text-lg">{tl.year}</span>
                </div>
                <div className="w-px bg-border relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="pb-2">
                  <h3 className="font-display font-semibold mb-1">{t(tl.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(tl.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">{t("meetOurTeam")}</h2>
            <p className="text-muted-foreground">{t("meetOurTeamSubtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="p-6 rounded-xl bg-card border border-border text-center">
                <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-muted" loading="lazy" />
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} on LinkedIn`}><Linkedin className="w-5 h-5" /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} on X`}><Twitter className="w-5 h-5" /></a>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutUs;
