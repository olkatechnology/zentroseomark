import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import logo from "@/assets/zentroseo-logo-marketing.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/zentroseo/", label: "ZentroSEO on LinkedIn" },
  { icon: Twitter, href: "https://x.com/ZentroSEO", label: "ZentroSEO on X" },
  { icon: Facebook, href: "https://www.facebook.com/ZentroSEO/", label: "ZentroSEO on Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@ZentroSEO", label: "ZentroSEO on YouTube" },
];

const Footer = () => {
  const { t } = useTranslation("common");

  const footerLinks = {
    [t("footerFeatures")]: [
      { label: "ZentroAudit", href: "/features/zentroaudit/" },
      { label: "ZentroFix", href: "/features/zentrofix/" },
      { label: "ZentroKeywords", href: "/features/zentrokeywords/" },
      { label: "ZentroRank", href: "/features/zentrorank/" },
      { label: "ZentroWrite", href: "/features/zentrowrite/" },
      { label: "ZentroCompare", href: "/features/zentrocompare/" },
      { label: "ZentroBacklinks", href: "/features/zentrobacklinks/" },
      { label: "ZentroMarkup", href: "/features/zentromarkup/" },
    ],
    [t("footerSolutions")]: [
      { label: t("nav:forAgencies", { ns: "nav", defaultValue: "For Agencies" }), href: "/solutions/for-agencies/" },
      { label: t("nav:forStartups", { ns: "nav", defaultValue: "For Startups" }), href: "/solutions/for-startups/" },
      { label: t("nav:forEcommerce", { ns: "nav", defaultValue: "For E-commerce" }), href: "/solutions/for-e-commerce/" },
      { label: t("nav:forContentCreators", { ns: "nav", defaultValue: "For Content Creators" }), href: "/solutions/for-content-creators/" },
    ],
    [t("footerResources")]: [
      { label: t("blog"), href: "/resources/blog/" },
      { label: t("nav:guides", { ns: "nav", defaultValue: "Guides" }), href: "/resources/guides/" },
      { label: t("nav:glossary", { ns: "nav", defaultValue: "Glossary" }), href: "/resources/glossary/" },
      { label: t("nav:topics", { ns: "nav", defaultValue: "Topics" }), href: "/resources/topics/" },
      { label: t("nav:comparisons", { ns: "nav", defaultValue: "Comparisons" }), href: "/resources/comparisons/" },
      { label: t("nav:helpCenter", { ns: "nav", defaultValue: "Help Center" }), href: "/resources/help-center/" },
      { label: t("nav:caseStudies", { ns: "nav", defaultValue: "Case Studies" }), href: "/resources/case-studies/" },
      { label: t("nav:documentation", { ns: "nav", defaultValue: "Documentation" }), href: "/resources/documentation/" },
      { label: t("seoToolkit"), href: "/resources/seo-toolkit/" },
    ],
    [t("footerCompany")]: [
      { label: t("nav:aboutUs", { ns: "nav", defaultValue: "About Us" }), href: "/company/about-us/" },
      { label: t("contactUs"), href: "/company/contact-us/" },
      { label: t("privacy"), href: "/privacy-policy/" },
      { label: t("terms"), href: "/terms-of-service/" },
      { label: t("refundPolicy"), href: "/refund-policy/" },
      { label: t("sitemap"), href: "/sitemap/" },
    ],
  };

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="ZentroSEO" className="h-8 mb-4" />
            <p className="text-sm text-hero-muted leading-relaxed mb-4">
              {t("footerDescription")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const SIcon = social.icon;
                return (
                  <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-hero-muted hover:text-hero-foreground transition-colors">
                    <SIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <LocalizedLink to={link.href} className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-hero-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-hero-muted">{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-4">
            <LocalizedLink to="/privacy-policy/" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">{t("privacy")}</LocalizedLink>
            <LocalizedLink to="/terms-of-service/" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">{t("terms")}</LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
