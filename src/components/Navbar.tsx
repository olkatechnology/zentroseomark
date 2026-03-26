import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import { useLang } from "@/hooks/use-lang";
import { localizedPath, stripLangPrefix } from "@/lib/lang-utils";
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

interface NavChild {
  label: string;
  href: string;
  desc: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  footerLink?: { label: string; href: string };
}

const Navbar = () => {
  const { t } = useTranslation(["nav", "common"]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, pathWithoutLang } = useLang();

  const handleLangSelect = (code: string) => {
    const currentPath = stripLangPrefix(location.pathname);
    const newPath = localizedPath(code, currentPath);
    navigate(newPath);
    setLangOpen(false);
    setMobileOpen(false);
  };

  const navItems: NavItem[] = [
    {
      label: t("nav:whatWeDo"),
      href: "/features/",
      children: [
        { label: t("nav:visibility"), href: "/features/zentroaudit/", desc: t("nav:visibilityDesc") },
        { label: t("nav:fixIssues"), href: "/features/zentrofix/", desc: t("nav:fixIssuesDesc") },
        { label: t("nav:createContent"), href: "/features/zentrowrite/", desc: t("nav:createContentDesc") },
        { label: t("nav:trackProgress"), href: "/features/zentrorank/", desc: t("nav:trackProgressDesc") },
      ],
      footerLink: { label: t("nav:seeAllFeatures"), href: "/features/" },
    },
    {
      label: t("nav:whoItsFor"),
      href: "/solutions/",
      children: [
        { label: t("nav:smallBusinesses"), href: "/solutions/for-startups/", desc: t("nav:smallBusinessesDesc") },
        { label: t("nav:agencies"), href: "/solutions/for-agencies/", desc: t("nav:agenciesDesc") },
        { label: t("nav:ecommerce"), href: "/solutions/for-e-commerce/", desc: t("nav:ecommerceDesc") },
        { label: t("nav:contentCreators"), href: "/solutions/for-content-creators/", desc: t("nav:contentCreatorsDesc") },
      ],
    },
    { label: t("nav:pricing"), href: "/pricing/" },
    { label: t("nav:discover"), href: "/discover/" },
    {
      label: t("nav:learn"),
      href: "/resources/",
      children: [
        { label: t("nav:blog"), href: "/resources/blog/", desc: t("nav:blogDesc") },
        { label: t("nav:guides"), href: "/resources/guides/", desc: t("nav:guidesDesc") },
        { label: t("nav:helpCenter"), href: "/resources/help-center/", desc: t("nav:helpCenterDesc") },
        { label: t("nav:caseStudies"), href: "/resources/case-studies/", desc: t("nav:caseStudiesDesc") },
      ],
    },
    {
      label: t("nav:about"),
      href: "/company/",
      children: [
        { label: t("nav:ourStory"), href: "/company/about-us/", desc: t("nav:ourStoryDesc") },
        { label: t("nav:contact"), href: "/company/contact-us/", desc: t("nav:contactDesc") },
      ],
    },
  ];

  const isActive = (href: string) => pathWithoutLang.startsWith(href);

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <LocalizedLink to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="ZentroSEO" className="h-8" />
        </LocalizedLink>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <LocalizedLink
                to={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive(item.href) ? "text-hero-accent" : "text-hero-foreground/80 hover:text-hero-foreground"}`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </LocalizedLink>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-card rounded-lg shadow-lg border p-2">
                    {item.children.map((child) => (
                      <LocalizedLink
                        key={child.href}
                        to={child.href}
                        className="block px-3 py-2.5 rounded-md hover:bg-accent transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{child.label}</div>
                        <div className="text-xs text-muted-foreground">{child.desc}</div>
                      </LocalizedLink>
                    ))}
                    {item.footerLink && (
                      <LocalizedLink
                        to={item.footerLink.href}
                        className="block px-3 py-2 mt-1 text-xs font-medium text-primary hover:text-primary/80 border-t pt-2.5"
                      >
                        {item.footerLink.label} →
                      </LocalizedLink>
                    )}
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
              {lang.toUpperCase()}
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 pt-2 w-48 animate-fade-in z-50">
                <div className="bg-card rounded-lg shadow-lg border p-1.5 max-h-72 overflow-y-auto">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangSelect(l.code)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        lang === l.code
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {l.label}
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
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-3 pb-2 space-y-0.5 animate-fade-in">
                        {item.children.map((child) => (
                          <LocalizedLink
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-md hover:bg-hero-foreground/5"
                          >
                            <div className="text-sm font-medium text-hero-foreground/90">{child.label}</div>
                            <div className="text-xs text-hero-muted">{child.desc}</div>
                          </LocalizedLink>
                        ))}
                        {item.footerLink && (
                          <LocalizedLink
                            to={item.footerLink.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs font-medium text-primary"
                          >
                            {item.footerLink.label} →
                          </LocalizedLink>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <LocalizedLink
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground"
                  >
                    {item.label}
                  </LocalizedLink>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="border-t border-hero-muted/10 pt-3">
              <div className="px-3 pb-2 text-xs font-medium text-hero-muted uppercase tracking-wider">{t("common:language")}</div>
              <select
                value={lang}
                onChange={(e) => handleLangSelect(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-hero-foreground/10 text-hero-foreground rounded-lg border border-hero-muted/20 focus:outline-none"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
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
