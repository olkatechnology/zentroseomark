import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, ShoppingCart, PenTool, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

const audiences = [
  { label: "For Agencies", href: "/solutions/for-agencies/", icon: Users, description: "Scale SEO across clients with white-label tools, automated reporting, and bulk management.", highlight: "ZentroWhite, ZentroAudit, ZentroFix" },
  { label: "For Startups", href: "/solutions/for-startups/", icon: Rocket, description: "Build organic visibility from day one with AI-powered audits, keyword research, and 1-click fixes.", highlight: "ZentroAudit, ZentroFix, ZentroKeywords" },
  { label: "For E-commerce", href: "/solutions/for-e-commerce/", icon: ShoppingCart, description: "Optimize thousands of product pages, generate schema, and fix crawl issues at scale.", highlight: "ZentroMarkup, ZentroAudit, ZentroFix" },
  { label: "For Content Creators", href: "/solutions/for-content-creators/", icon: PenTool, description: "Create entity-rich content that ranks with AI writing tools and semantic keyword research.", highlight: "ZentroWrite, ZentroKeywords, ZentroRank" },
];

const toolMatrix = [
  { tool: "ZentroAudit", agencies: true, startups: true, ecommerce: true, creators: false },
  { tool: "ZentroFix", agencies: true, startups: true, ecommerce: true, creators: false },
  { tool: "ZentroKeywords", agencies: true, startups: true, ecommerce: false, creators: true },
  { tool: "ZentroRank", agencies: true, startups: false, ecommerce: false, creators: true },
  { tool: "ZentroWrite", agencies: false, startups: true, ecommerce: false, creators: true },
  { tool: "ZentroCompare", agencies: true, startups: false, ecommerce: true, creators: false },
  { tool: "ZentroBacklinks", agencies: true, startups: false, ecommerce: false, creators: false },
  { tool: "ZentroMarkup", agencies: false, startups: false, ecommerce: true, creators: true },
  { tool: "ZentroWhite", agencies: true, startups: false, ecommerce: false, creators: false },
];

const SolutionHub = () => {
  return (
    <Layout>
      <Helmet>
        <title>SEO Solutions by ZentroSEO – Tailored for Your Industry</title>
        <meta name="description" content="ZentroSEO offers targeted SEO solutions for agencies, content teams, e-commerce, local businesses, and startups." />
        <link rel="canonical" href="https://zentroseo.com/solutions/" />
        <meta property="og:title" content="SEO Solutions by ZentroSEO – Tailored for Your Industry" />
        <meta property="og:description" content="ZentroSEO offers targeted SEO solutions for agencies, content teams, e-commerce, and startups." />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
              SEO Solutions for Every Business
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              Whether you're an agency managing dozens of clients or a solo creator building your audience, ZentroSEO has the right tools for your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((a, i) => {
              const AIcon = a.icon;
              return (
                <motion.div
                  key={a.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={a.href} className="group block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                    <AIcon className="w-8 h-8 text-primary mb-4" />
                    <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{a.label}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{a.description}</p>
                    <p className="text-xs text-primary font-medium">Key tools: {a.highlight}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Which Tools Do You Need?</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Tool</th>
                  <th className="py-3 px-4 font-semibold text-center">Agencies</th>
                  <th className="py-3 px-4 font-semibold text-center">Startups</th>
                  <th className="py-3 px-4 font-semibold text-center">E-commerce</th>
                  <th className="py-3 px-4 font-semibold text-center">Creators</th>
                </tr>
              </thead>
              <tbody>
                {toolMatrix.map((row) => (
                  <tr key={row.tool} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.tool}</td>
                    {[row.agencies, row.startups, row.ecommerce, row.creators].map((v, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {v ? <CheckCircle className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SolutionHub;
