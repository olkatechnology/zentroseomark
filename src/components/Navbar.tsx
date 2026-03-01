import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/zentroseo-logo-marketing.png";

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português (Brasil)" },
  { code: "sv", label: "Svenska" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "tr", label: "Türkçe" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation(["nav", "common"]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const selectedLang = i18n.language;

  const handleLangSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("zentro-lang", code.toUpperCase());
    setLangOpen(false);
  };

  const navItems = [
    {
      label: t("nav:features"),
      href: "/features/",
      children: [
        { label: "ZentroAudit", href: "/features/zentroaudit/", desc: t("nav:zentroauditDesc") },
        { label: "ZentroFix", href: "/features/zentrofix/", desc: t("nav:zentrofixDesc") },
        { label: "ZentroKeywords", href: "/features/zentrokeywords/", desc: t("nav:zentrokeywordsDesc") },
        { label: "ZentroRank", href: "/features/zentrorank/", desc: t("nav:zentrorankDesc") },
        { label: "ZentroWrite", href: "/features/zentrowrite/", desc: t("nav:zentrowriteDesc") },
        { label: "ZentroCompare", href: "/features/zentrocompare/", desc: t("nav:zentrocompareDesc") },
        { label: "ZentroBacklinks", href: "/features/zentrobacklinks/", desc: t("nav:zentrobacklinksDesc") },
        { label: "ZentroMarkup", href: "/features/zentromarkup/", desc: t("nav:zentromarkupDesc") },
        { label: "ZentroWhite", href: "/features/zentrowhite/", desc: t("nav:zentrowhiteDesc") },
      ],
    },
    {
      label: t("nav:solutions"),
      href: "/solutions/",
      children: [
        { label: t("nav:forAgencies"), href: "/solutions/for-agencies/", desc: t("nav:forAgenciesDesc") },
        { label: t("nav:forStartups"), href: "/solutions/for-startups/", desc: t("nav:forStartupsDesc") },
        { label: t("nav:forEcommerce"), href: "/solutions/for-e-commerce/", desc: t("nav:forEcommerceDesc") },
        { label: t("nav:forContentCreators"), href: "/solutions/for-content-creators/", desc: t("nav:forContentCreatorsDesc") },
      ],
    },
    { label: t("nav:pricing"), href: "/pricing/" },
    {
      label: t("nav:resources"),
      href: "/resources/",
      children: [
        { label: t("nav:blog"), href: "/resources/blog/", desc: t("nav:blogDesc") },
        { label: t("nav:guides"), href: "/resources/guides/", desc: t("nav:guidesDesc") },
        { label: t("nav:glossary"), href: "/resources/glossary/", desc: t("nav:glossaryDesc") },
        { label: t("nav:topics"), href: "/resources/topics/", desc: t("nav:topicsDesc") },
        { label: t("nav:comparisons"), href: "/resources/comparisons/", desc: t("nav:comparisonsDesc") },
        { label: t("nav:helpCenter"), href: "/resources/help-center/", desc: t("nav:helpCenterDesc") },
        { label: t("nav:caseStudies"), href: "/resources/case-studies/", desc: t("nav:caseStudiesDesc") },
        { label: t("nav:documentation"), href: "/resources/documentation/", desc: t("nav:documentationDesc") },
      ],
    },
    {
      label: t("nav:company"),
      href: "/company/",
      children: [
        { label: t("nav:aboutUs"), href: "/company/about-us/", desc: t("nav:aboutUsDesc") },
        { label: t("nav:contact"), href: "/company/contact-us/", desc: t("nav:contactDesc") },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="ZentroSEO" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${location.pathname.startsWith(item.href) ? "text-hero-accent" : "text-hero-foreground/80 hover:text-hero-foreground"}`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-card rounded-lg shadow-lg border p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-3 py-2.5 rounded-md hover:bg-accent transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{child.label}</div>
                        <div className="text-xs text-muted-foreground">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground transition-colors rounded-md">
              <Globe className="w-4 h-4" />
              {selectedLang.toUpperCase()}
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 pt-2 w-48 animate-fade-in z-50">
                <div className="bg-card rounded-lg shadow-lg border p-1.5 max-h-72 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedLang === lang.code
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="https://app.zentroseo.com/login" className="text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground transition-colors px-3 py-2">
            {t("common:login")}
          </a>
          <a href="https://app.zentroseo.com/signup?flow=direct">
            <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-5">
              {t("common:getStarted")}
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-hero-foreground p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-hero border-t border-hero-muted/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground"
                >
                  {item.label}
                </Link>
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="border-t border-hero-muted/10 pt-3">
              <div className="px-3 pb-2 text-xs font-medium text-hero-muted uppercase tracking-wider">{t("common:language")}</div>
              <select
                value={selectedLang}
                onChange={(e) => handleLangSelect(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-hero-foreground/10 text-hero-foreground rounded-lg border border-hero-muted/20 focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <a href="https://app.zentroseo.com/login" className="text-sm text-center font-medium text-hero-foreground/80 py-2">{t("common:login")}</a>
              <a href="https://app.zentroseo.com/signup?flow=direct">
                <Button className="w-full bg-gradient-cta text-primary-foreground font-semibold">{t("common:getStarted")}</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
