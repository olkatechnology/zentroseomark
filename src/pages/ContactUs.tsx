import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: t("messageSent"), description: t("messageSentDesc") });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <Helmet>
        <title>{t("contactMetaTitle")}</title>
        <meta name="description" content={t("contactMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/company/contact-us/")} />
        <meta property="og:title" content={t("contactMetaTitle")} />
        <meta property="og:description" content={t("contactMetaDesc")} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("company"), href: "/company/" }, { label: t("contactUs") }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("contactHeroTitle")}</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("contactHeroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl font-bold mb-6">{t("sendUsMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input id="name" placeholder={t("namePlaceholder")} required />
                  </div>
                  <div>
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input id="email" type="email" placeholder={t("emailPlaceholder")} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">{t("subject")}</Label>
                  <Input id="subject" placeholder={t("subjectPlaceholder")} required />
                </div>
                <div>
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea id="message" placeholder={t("messagePlaceholder")} rows={5} required />
                </div>
                <Button type="submit" className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full sm:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? t("sending") : t("sendMessage")}
                </Button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">{t("getInTouch")}</h2>
              {[
                { icon: Mail, title: t("email"), detail: "hello@zentroseo.com" },
                { icon: Clock, title: t("responseTime"), detail: t("within24Hours") },
                { icon: MessageSquare, title: t("supportHours"), detail: t("supportHoursValue") },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                    <ItemIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;