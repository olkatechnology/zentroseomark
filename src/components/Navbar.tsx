import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/zentroseo-logo-marketing.png";

const navItems = [
  {
    label: "Features",
    href: "/features/",
    children: [
      { label: "ZentroAudit", href: "/features/zentroaudit/", desc: "Technical & on-page SEO audit" },
      { label: "ZentroFix", href: "/features/zentrofix/", desc: "1-Click AI SEO fixer" },
      { label: "ZentroKeywords", href: "/features/zentrokeywords/", desc: "Keyword explorer" },
      { label: "ZentroRank", href: "/features/zentrorank/", desc: "Keyword rank tracker" },
      { label: "ZentroWrite", href: "/features/zentrowrite/", desc: "AI content generator" },
      { label: "ZentroCompare", href: "/features/zentrocompare/", desc: "Competitor analysis" },
      { label: "ZentroBacklinks", href: "/features/zentrobacklinks/", desc: "Backlink tracker" },
      { label: "ZentroMarkup", href: "/features/zentromarkup/", desc: "Schema markup builder" },
      { label: "ZentroWhite", href: "/features/zentrowhite/", desc: "White-label reporting" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/",
    children: [
      { label: "For Agencies", href: "/solutions/for-agencies/", desc: "Scale with white label SEO" },
      { label: "For Startups", href: "/solutions/for-startups/", desc: "Launch with organic growth" },
      { label: "For E-commerce", href: "/solutions/for-e-commerce/", desc: "Boost rankings & sales" },
      { label: "For Content Creators", href: "/solutions/for-content-creators/", desc: "Rank your work faster" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "Blog", href: "/resources/blog/", desc: "SEO tips & strategies" },
      { label: "Help Center", href: "/resources/help-center/", desc: "Support & FAQs" },
      { label: "Case Studies", href: "/resources/case-studies/", desc: "Real results" },
      { label: "Documentation", href: "/resources/documentation/", desc: "Product docs" },
    ],
  },
  {
    label: "Company",
    href: "/company/",
    children: [
      { label: "About Us", href: "/company/about-us/", desc: "Our story & team" },
      { label: "Contact", href: "/company/contact-us/", desc: "Get in touch" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

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
          <a href="https://app.zentroseo.com/login" className="text-sm font-medium text-hero-foreground/80 hover:text-hero-foreground transition-colors px-3 py-2">
            Login
          </a>
          <a href="https://app.zentroseo.com/signup?flow=direct">
            <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-5">
              Get Started
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
            <div className="pt-3 flex flex-col gap-2">
              <a href="https://app.zentroseo.com/login" className="text-sm text-center font-medium text-hero-foreground/80 py-2">Login</a>
              <a href="https://app.zentroseo.com/signup?flow=direct">
                <Button className="w-full bg-gradient-cta text-primary-foreground font-semibold">Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
