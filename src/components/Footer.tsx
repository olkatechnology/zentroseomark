import { Link } from "react-router-dom";
import logo from "@/assets/zentroseo-logo.png";

const footerLinks = {
  Features: [
    { label: "ZentroAudit", href: "/features/zentroaudit/" },
    { label: "ZentroFix", href: "/features/zentrofix/" },
    { label: "ZentroKeywords", href: "/features/zentrokeywords/" },
    { label: "ZentroRank", href: "/features/zentrorank/" },
    { label: "ZentroWrite", href: "/features/zentrowrite/" },
    { label: "ZentroCompare", href: "/features/zentrocompare/" },
    { label: "ZentroBacklinks", href: "/features/zentrobacklinks/" },
    { label: "ZentroMarkup", href: "/features/zentromarkup/" },
  ],
  Solutions: [
    { label: "For Agencies", href: "/solutions/for-agencies/" },
    { label: "For Startups", href: "/solutions/for-startups/" },
    { label: "For E-commerce", href: "/solutions/for-e-commerce/" },
    { label: "For Content Creators", href: "/solutions/for-content-creators/" },
  ],
  Resources: [
    { label: "Blog", href: "/resources/blog/" },
    { label: "Help Center", href: "/resources/help-center/" },
    { label: "Case Studies", href: "/resources/case-studies/" },
    { label: "Documentation", href: "/resources/documentation/" },
    { label: "SEO Toolkit", href: "/resources/seo-toolkit/" },
  ],
  Company: [
    { label: "About Us", href: "/company/about-us/" },
    { label: "Contact Us", href: "/company/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
    { label: "Refund Policy", href: "/refund-policy/" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="ZentroSEO" className="h-8 mb-4" />
            <p className="text-sm text-hero-muted leading-relaxed">
              AI-powered SEO platform for smarter rankings. Built for beginners, loved by pros.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-hero-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-hero-muted">© {new Date().getFullYear()} ZentroSEO by OLKA Technology LTD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy/" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Privacy</Link>
            <Link to="/terms-of-service/" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
