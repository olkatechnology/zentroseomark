import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, HelpCircle, BarChart3, FileText, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";

const resources = [
  { icon: BookOpen, title: "Blog", description: "SEO tips, strategies, and in-depth guides from the ZentroSEO team.", href: "/resources/blog/" },
  { icon: HelpCircle, title: "Help Center", description: "FAQs, troubleshooting, and guides to get the most from ZentroSEO.", href: "/resources/help-center/" },
  { icon: BarChart3, title: "Case Studies", description: "Real results from real businesses using ZentroSEO.", href: "/resources/case-studies/" },
  { icon: FileText, title: "Documentation", description: "Technical docs, API references, and feature guides.", href: "/resources/documentation/" },
  { icon: Wrench, title: "Free SEO Toolkit", description: "Free tools to check your website score, meta tags, and schema.", href: "/resources/seo-toolkit/" },
];

const ResourcesHub = () => {
  return (
    <Layout>
      <Helmet>
        <title>SEO Resources Library – Guides, Templates & Tutorials</title>
        <meta name="description" content="Access free SEO resources including guides, checklists, templates, and walkthroughs to grow your traffic." />
        <link rel="canonical" href="https://zentroseo.com/resources/" />
        <meta property="og:title" content="SEO Resources Library – Guides, Templates & Tutorials" />
        <meta property="og:description" content="Access free SEO resources including guides, checklists, templates, and walkthroughs to grow your traffic." />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">SEO Resources</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">Guides, templates, and tutorials to grow your traffic and master SEO.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resources.map((r, i) => {
              const RIcon = r.icon;
              return (
                <motion.div key={r.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={r.href} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                    <RIcon className="w-8 h-8 text-primary mb-4" />
                    <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{r.title}</h2>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                  </Link>
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

export default ResourcesHub;
