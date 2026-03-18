import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { useLang } from "@/hooks/use-lang";
import { supportedLangs, getCanonicalUrl, stripLangPrefix } from "@/lib/lang-utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { lang, pathWithoutLang } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        {/* Canonical: points to the current language version */}
        <link rel="canonical" href={getCanonicalUrl(lang, pathWithoutLang)} />

        {/* hreflang: each language gets its own distinct URL */}
        {supportedLangs.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={getCanonicalUrl(l, pathWithoutLang)}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={getCanonicalUrl("en", pathWithoutLang)} />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
