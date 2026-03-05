import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Target, Rocket, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const CompanyHub = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const stats = [
    { value: "100+", labelKey: "statWebsites" },
    { value: "2,500+", labelKey: "statIssuesFixed" },
    { value: "340%", labelKey: "statTrafficGrowth" },
    { value: "99.9%", labelKey: "statUptime" },
  ];

  const values = [
    { icon: Lightbulb, titleKey: "valueInnovative", descKey: "valueInnovativeDesc" },
    { icon: Zap, titleKey: "valueSimplicity", descKey: "valueSimplicityDesc" },
    { icon: Target, titleKey: "valueAccuracy", descKey: "valueAccuracyDesc" },
    { icon: Rocket, titleKey: "valueEmpowerment", descKey: "valueEmpowermentDesc" },
  ];

  const contactInfo = [
    { icon: Mail, labelKey: "contactEmail", value: "hello@zentroseo.com", href: "mailto:hello@zentroseo.com" },
    { icon: Phone, labelKey: "contactPhone", value: "+1 281 7290 300", href: "tel:+12817290300" },
    { icon: MapPin, labelKey: "contactAddress", value: "Sheridan, WY, United States", href: undefined },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("companyMetaTitle")}</title>
        <meta name="description" content={t("companyMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/company/")} />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("company") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("companyHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">{t("companyHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">{t("ourStory")}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
            <p>
              {t("companyStoryP1").split("Tomisin Sode")[0]}
              <LocalizedLink to="/company/team/tomisin-sode/" className="text-primary hover:underline font-medium">Tomisin Sode</LocalizedLink>
              {" "}{t("companyStoryP1").includes("and") ? "and" : t("companyStoryP1").split("Tomisin Sode")[1]?.split("Olayinka Olayokun")[0]}
              <LocalizedLink to="/company/team/olayinka-olayokun/" className="text-primary hover:underline font-medium">Olayinka Olayokun</LocalizedLink>
              {t("companyStoryP1").split("Olayinka Olayokun")[1]}
            </p>
            <p>{t("companyStoryP2")}</p>
            <p>{t("companyStoryP3")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{t(s.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display text-3xl font-bold mb-4">{t("ourMission")}</h2>
            <p className="text-lg text-muted-foreground">{t("companyMissionText")}</p>
          </motion.div>

          <h3 className="font-display text-2xl font-bold text-center mb-10">{t("ourValues")}</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border">
                  <VIcon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-display font-semibold mb-2">{t(v.titleKey)}</h4>
                  <p className="text-sm text-muted-foreground">{t(v.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">{t("meetTheFounders")}</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">{t("meetTheFoundersSubtitle")}</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div key={member.authorSlug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                    <LocalizedLink to={`/company/team/${member.authorSlug}/`} className="hover:underline">
                      <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                    </LocalizedLink>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>}
                      {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <LocalizedLink to="/company/about-us/">
              <Button variant="outline">{t("learnMoreAboutUs")} <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">{t("joinOurTeam")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("joinOurTeamDesc")}</p>
            <LocalizedLink to="/company/careers/">
              <Button>{t("viewOpenPositions")} <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </LocalizedLink>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-10">{t("getInTouch")}</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((item, i) => {
              const CIcon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href ? { href: item.href } : {};
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="text-center h-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <CIcon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t(item.labelKey)}</p>
                      <Wrapper {...wrapperProps} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</Wrapper>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CompanyHub;
