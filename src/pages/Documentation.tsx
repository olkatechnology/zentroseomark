import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Code2, FileText, Rocket, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";

const sections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics of ZentroSEO and set up your first project.",
    links: [
      { label: "Create Your Account", href: "https://app.zentroseo.com/signup?flow=direct" },
      { label: "Run Your First Audit", href: "/resources/help-center/" },
      { label: "Connect Google Search Console", href: "/resources/help-center/" },
    ],
  },
  {
    icon: BookOpen,
    title: "Feature Guides",
    description: "In-depth guides for each ZentroSEO tool.",
    links: [
      { label: "ZentroAudit Guide", href: "/features/zentroaudit/" },
      { label: "ZentroFix Guide", href: "/features/zentrofix/" },
      { label: "ZentroKeywords Guide", href: "/features/zentrokeywords/" },
      { label: "ZentroWrite Guide", href: "/features/zentrowrite/" },
      { label: "ZentroMarkup Guide", href: "/features/zentromarkup/" },
      { label: "All Features →", href: "/features/" },
    ],
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Integrate ZentroSEO into your workflows with our API.",
    links: [
      { label: "API Overview (Coming Soon)", href: "#" },
      { label: "Authentication", href: "#" },
      { label: "Rate Limits", href: "#" },
    ],
  },
  {
    icon: FileText,
    title: "Resources",
    description: "Additional resources to master SEO with ZentroSEO.",
    links: [
      { label: "Blog", href: "/resources/blog/" },
      { label: "Case Studies", href: "/resources/case-studies/" },
      { label: "Help Center", href: "/resources/help-center/" },
    ],
  },
];

const Documentation = () => {
  return (
    <Layout>
      <Helmet>
        <title>Documentation - ZentroSEO</title>
        <meta name="description" content="Product documentation and guides for ZentroSEO." />
        <link rel="canonical" href="https://zentroseo.com/resources/documentation/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Documentation" }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Documentation</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">Product docs and guides to help you get the most from ZentroSEO.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border">
                  <SIcon className="w-6 h-6 text-primary mb-3" />
                  <h2 className="font-display text-lg font-bold mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                  <ul className="space-y-2">
                    {s.links.map((link, li) => (
                      <li key={li}>
                        {link.href.startsWith("http") ? (
                          <a href={link.href} className="text-sm text-primary hover:underline flex items-center gap-1">
                            {link.label} <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link to={link.href} className="text-sm text-primary hover:underline flex items-center gap-1">
                            {link.label} <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
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

export default Documentation;
