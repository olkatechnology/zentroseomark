import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    title: "Getting Started",
    faqs: [
      { q: "How do I create a ZentroSEO account?", a: "Visit app.zentroseo.com/signup and create your free account with email. You can start auditing your site immediately." },
      { q: "What's included in the free plan?", a: "The free plan includes site audits (up to 100 pages), basic keyword research, content scoring, and rank tracking for up to 50 keywords." },
      { q: "How do I run my first SEO audit?", a: "After signing in, click 'New Audit' on your dashboard, enter your website URL, and ZentroAudit will begin crawling and analyzing your site." },
      { q: "Can I connect my Google Search Console?", a: "Yes! Connect your Google Search Console to import real search data, click-through rates, and impressions directly into ZentroSEO." },
    ],
  },
  {
    title: "Account & Billing",
    faqs: [
      { q: "How do I upgrade my plan?", a: "Go to Settings → Billing in your dashboard. Choose your preferred plan and complete payment. Your upgrade takes effect immediately." },
      { q: "Can I cancel anytime?", a: "Yes. Cancel from Settings → Billing at any time. You'll retain access to paid features until the end of your current billing period." },
      { q: "Do you offer refunds?", a: "We offer a full refund within 14 days of your first purchase. See our Refund Policy for details." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal through our secure payment processor." },
    ],
  },
  {
    title: "Features & Tools",
    faqs: [
      { q: "What's the difference between ZentroAudit and ZentroFix?", a: "ZentroAudit finds SEO issues on your site. ZentroFix provides AI-generated solutions and can auto-apply fixes. They work together seamlessly." },
      { q: "How does entity-based SEO work in ZentroSEO?", a: "ZentroSEO analyzes the semantic entities in your content and compares them to what search engines expect for your target topics, helping you build topical authority." },
      { q: "Can I track rankings for different locations?", a: "Yes! ZentroRank supports tracking across 100+ countries and city-level location targeting for local SEO." },
      { q: "Does ZentroWrite support multiple languages?", a: "Yes. ZentroWrite can generate and optimize content in 20+ languages with language-specific entity analysis." },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      { q: "My audit seems stuck. What should I do?", a: "Large sites may take several minutes to crawl. If your audit hasn't completed after 10 minutes, try refreshing the page or starting a new audit." },
      { q: "Why are my rankings different from Google Search Console?", a: "ZentroRank checks rankings in real-time from specific locations. Google Search Console shows average positions over time. Small differences are normal." },
      { q: "I can't connect my website. How do I fix this?", a: "Ensure your website is publicly accessible and not blocking our crawler. Check if your robots.txt allows crawling. Contact support if the issue persists." },
      { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page and enter your email. You'll receive a reset link within minutes." },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) =>
    c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

const HelpCenter = () => {
  return (
    <Layout>
      <Helmet>
        <title>ZentroSEO Help Center – Support, FAQs & Troubleshooting</title>
        <meta name="description" content="Get help with your ZentroSEO account, features, billing, and technical issues." />
        <link rel="canonical" href="https://zentroseo.com/resources/help-center/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Help Center" }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Help Center</h1>
          <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">Support, FAQs, and troubleshooting for ZentroSEO.</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hero-muted" />
            <Input placeholder="Search help articles..." className="pl-10 bg-hero-foreground/10 border-hero-muted/20 text-hero-foreground placeholder:text-hero-muted/50" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {categories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" /> {cat.title}
              </h2>
              <Accordion type="single" collapsible>
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem key={fi} value={`${ci}-${fi}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default HelpCenter;
