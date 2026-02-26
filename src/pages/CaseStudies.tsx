import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Target } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";

const caseStudies = [
  {
    title: "How a SaaS Startup Grew Organic Traffic by 340%",
    industry: "SaaS / Technology",
    icon: TrendingUp,
    challenge: "A B2B SaaS startup had minimal organic visibility despite having a great product. Their website had 67 technical SEO issues, no structured data, and thin content across key landing pages.",
    solution: "ZentroAudit identified all technical issues, ZentroFix auto-corrected 52 of them in one click, and ZentroWrite helped create entity-rich content for their top 10 landing pages. ZentroMarkup added Product and FAQ schema across the site.",
    results: [
      { metric: "340%", label: "Organic traffic increase in 6 months" },
      { metric: "52", label: "SEO issues auto-fixed in one session" },
      { metric: "15", label: "New featured snippets earned" },
      { metric: "2.1s → 0.8s", label: "LCP improvement" },
    ],
  },
  {
    title: "E-commerce Store Doubles Product Page Rankings",
    industry: "E-commerce / Retail",
    icon: BarChart3,
    challenge: "An online fashion retailer with 3,000+ product pages had duplicate content issues, missing schema, and poor internal linking — resulting in only 12% of products being indexed.",
    solution: "ZentroAudit crawled all 3,000+ pages, identifying duplicate content from faceted navigation. ZentroFix applied canonical tags and ZentroMarkup generated Product schema for every page. ZentroKeywords identified 200+ buyer-intent keywords for category pages.",
    results: [
      { metric: "12% → 89%", label: "Product page indexation rate" },
      { metric: "200+", label: "Rich results for product pages" },
      { metric: "156%", label: "Organic revenue increase" },
      { metric: "34%", label: "Click-through rate improvement" },
    ],
  },
  {
    title: "Digital Agency Scales to 25 Clients with White-Label",
    industry: "Digital Marketing Agency",
    icon: Target,
    challenge: "A growing agency was spending 20+ hours per week on manual reporting and using 4 different SEO tools — making it unprofitable to take on new clients.",
    solution: "ZentroWhite provided a fully branded SEO dashboard under their domain. Automated weekly reports replaced manual work, and ZentroAudit + ZentroFix streamlined client deliverables.",
    results: [
      { metric: "8 → 25", label: "Clients managed (3x growth)" },
      { metric: "20hrs → 3hrs", label: "Weekly reporting time saved" },
      { metric: "4 → 1", label: "SEO tools consolidated" },
      { metric: "40%", label: "Profit margin improvement" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <Helmet>
        <title>SEO Case Studies – Real Results with ZentroSEO</title>
        <meta name="description" content="See how real businesses improved rankings, traffic, and growth using ZentroSEO." />
        <link rel="canonical" href="https://zentroseo.com/resources/case-studies/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Case Studies" }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Case Studies</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">Real results from real businesses using ZentroSEO.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {caseStudies.map((cs, i) => {
            const CSIcon = cs.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CSIcon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1">{cs.industry}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-4">{cs.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-sm mb-1 text-destructive">Challenge</h3>
                      <p className="text-sm text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1 text-primary">Solution</h3>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="text-center p-3 rounded-lg bg-secondary/50">
                        <p className="font-display text-xl font-bold text-primary">{r.metric}</p>
                        <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;
