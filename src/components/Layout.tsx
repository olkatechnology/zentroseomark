import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

const supportedLangs = ["en", "de", "es", "fr", "it", "nl", "pl", "pt", "sv", "vi", "tr", "zh", "ja", "ko"];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const canonicalPath = location.pathname;
  const baseUrl = "https://zentroseo.com";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        {supportedLangs.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`${baseUrl}${canonicalPath}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${canonicalPath}`} />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
