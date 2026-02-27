import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FAQSection from "@/components/home/FAQSection";

const plans = {
  monthly: [
    { name: "Starter", price: "$19", period: "/mo", desc: "Perfect for testing ZentroSEO's capabilities", features: ["1 website", "4 Basic SEO audits", "3 keyword tracking", "Monthly reports", "Email support"], limits: ["Limited to 100 pages scanned", "Basic reporting only"], cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=starter_monthly&flow=pricing" },
    { name: "Standard", price: "$49", period: "/mo", desc: "Great for small businesses and startups", features: ["3 websites", "20 Complete SEO audits per URL", "100 keyword research per URL", "50 keyword tracking per URL", "5 competitor analysis per URL", "Backlink analysis", "Limited AI content writing", "Schema generator", "Weekly reports", "Priority email support"], popular: true, cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=standard_monthly&flow=pricing" },
    { name: "Pro", price: "$99", period: "/mo", desc: "Perfect for growing businesses and agencies", features: ["10 websites", "20 Complete SEO audits per URL", "100 keyword research per URL", "50 keyword tracking per URL", "10 competitor analysis per URL", "Backlink analysis", "Unlimited AI content writing", "Schema generation", "Daily reports", "Auto scheduling reports", "Phone + email support", "White-label reports"], cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=pro_monthly&flow=pricing" },
    { name: "Advanced", price: "$299", period: "/mo", desc: "For agencies and large businesses", features: ["Unlimited websites", "Unlimited SEO audits", "Unlimited keyword research", "Unlimited keyword tracking", "Unlimited competitor analysis", "Backlink analysis", "Unlimited AI writing", "Schema generation", "Daily reports", "Dedicated account manager", "Full white-label solution"], cta: "Contact Sales", href: "/company/contact-us/" },
  ],
  yearly: [
    { name: "Starter", price: "$190", period: "/yr", desc: "Perfect for testing ZentroSEO's capabilities", features: ["1 website", "4 Basic SEO audits", "3 keyword tracking", "Monthly reports", "Email support"], limits: ["Limited to 100 pages scanned", "Basic reporting only"], cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=starter_yearly&flow=pricing" },
    { name: "Standard", price: "$490", period: "/yr", desc: "Great for small businesses and startups", features: ["3 websites", "20 Complete SEO audits per URL", "100 keyword research per URL", "50 keyword tracking per URL", "5 competitor analysis per URL", "Backlink analysis", "Limited AI content writing", "Schema generator", "Weekly reports", "Priority email support"], popular: true, cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=standard_yearly&flow=pricing" },
    { name: "Pro", price: "$990", period: "/yr", desc: "Perfect for growing businesses and agencies", features: ["10 websites", "20 Complete SEO audits per URL", "100 keyword research per URL", "50 keyword tracking per URL", "10 competitor analysis per URL", "Backlink analysis", "Unlimited AI content writing", "Schema generation", "Daily reports", "Auto scheduling reports", "Phone + email support", "White-label reports"], cta: "Start 3-Day Trial", href: "https://app.zentroseo.com/signup?plan=pro_yearly&flow=pricing" },
    { name: "Advanced", price: "$2,990", period: "/yr", desc: "For agencies and large businesses", features: ["Unlimited websites", "Unlimited SEO audits", "Unlimited keyword research", "Unlimited keyword tracking", "Unlimited competitor analysis", "Backlink analysis", "Unlimited AI writing", "Schema generation", "Daily reports", "Dedicated account manager", "Full white-label solution"], cta: "Contact Sales", href: "/company/contact-us/" },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const currentPlans = plans[billing];

  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZentroSEO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://zentroseo.com/pricing/",
    offers: currentPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.desc,
      price: plan.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      url: plan.href.startsWith("http") ? plan.href : `https://zentroseo.com${plan.href}`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>ZentroSEO Pricing – Free, Starter, Pro, and Agency Plans</title>
        <meta name="description" content="Choose the ZentroSEO plan that fits your business, from our free plan to full-featured agency-level access. Transparent, affordable pricing." />
        <link rel="canonical" href="https://zentroseo.com/pricing/" />
        <meta property="og:title" content="ZentroSEO Pricing – Free, Starter, Pro, and Agency Plans" />
        <meta property="og:description" content="Choose the ZentroSEO plan that fits your business. Transparent, affordable pricing." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(pricingJsonLd)}</script>
      </Helmet>

      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
            Choose Your <span className="text-gradient-primary">SEO Growth Plan</span>
          </h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto mb-8">
            Start free, then choose the plan that scales with your business. All plans include our AI-powered SEO automation.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-hero-foreground/10 rounded-full p-1 border border-hero-muted/20">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${billing === "monthly" ? "bg-primary text-primary-foreground" : "text-hero-muted"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${billing === "yearly" ? "bg-primary text-primary-foreground" : "text-hero-muted"}`}
            >
              Yearly <span className="text-xs opacity-80">2 Months Free</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans[billing].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-xl border p-6 bg-card flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-display font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.limits && (
                  <div className="mb-6 text-xs text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Limitations:</p>
                    {plan.limits.map((l) => <p key={l}>• {l}</p>)}
                  </div>
                )}

                <a href={plan.href}>
                  <Button className={`w-full font-semibold ${plan.popular ? "bg-gradient-cta hover:opacity-90 text-primary-foreground" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </Layout>
  );
};

export default Pricing;
