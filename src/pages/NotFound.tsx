import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Search, BookOpen, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation("pages");

  const helpfulLinks = [
    { icon: Home, label: t("home"), href: "/", description: t("backToHomepage") },
    { icon: Search, label: t("features"), href: "/features/", description: t("exploreTools") },
    { icon: BookOpen, label: t("blog"), href: "/resources/blog/", description: t("readSeoTips") },
    { icon: Mail, label: t("contactUs"), href: "/company/contact-us/", description: t("getInTouchWithTeam") },
  ];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>{t("pageNotFound")} – ZentroSEO</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={t("pageNotFoundDesc")} />
      </Helmet>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-7xl md:text-8xl font-display font-bold text-primary mb-4">404</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-3">{t("pageNotFound")}</h1>
          <p className="text-muted-foreground mb-10">
            {t("pageNotFoundDesc")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {helpfulLinks.map((link) => {
              const LIcon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
                >
                  <LIcon className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-sm">{link.label}</span>
                  <span className="text-xs text-muted-foreground">{link.description}</span>
                </Link>
              );
            })}
          </div>

          <Link to="/">
            <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground px-8">
              {t("goToHomepage")}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
