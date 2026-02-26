import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Code2, BarChart3, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: BarChart3,
    title: "Website Score Checker",
    description: "Get an instant SEO health score for any website. Checks technical SEO, content quality, mobile-friendliness, and Core Web Vitals.",
    cta: "Check Your Score",
  },
  {
    icon: Search,
    title: "Meta Tag Analyzer",
    description: "Analyze your page's title tags, meta descriptions, and Open Graph tags. Get AI-powered suggestions for improvement.",
    cta: "Analyze Meta Tags",
  },
  {
    icon: Code2,
    title: "Schema Validator",
    description: "Validate your JSON-LD structured data against Google's rich results requirements. Detect errors and missing properties.",
    cta: "Validate Schema",
  },
];

const SEOToolkit = () => {
  return (
    <Layout>
      <Helmet>
        <title>Free SEO Toolkit – ZentroSEO</title>
        <meta name="description" content="Access free SEO tools and resources." />
        <link rel="canonical" href="https://zentroseo.com/resources/seo-toolkit/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "SEO Toolkit" }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Free SEO Toolkit</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">Free tools to check, analyze, and improve your website's SEO.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, i) => {
              const TIcon = tool.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border flex flex-col">
                  <TIcon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-display text-lg font-bold mb-2">{tool.title}</h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{tool.description}</p>
                  <a href="https://app.zentroseo.com/signup">
                    <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full text-sm">
                      {tool.cta} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </a>
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

export default SEOToolkit;
