import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertTriangle, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Testimonials from "@/components/shared/Testimonials";
import RelatedLinks from "@/components/shared/RelatedLinks";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { solutionsData } from "@/data/solutions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionsData[slug] : null;

  if (!solution) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Solution not found</h1>
        </div>
      </Layout>
    );
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{solution.metaTitle}</title>
        <meta name="description" content={solution.metaDescription} />
        <link rel="canonical" href={`https://zentroseo.com/solutions/${solution.slug}/`} />
        <meta property="og:title" content={solution.metaTitle} />
        <meta property="og:description" content={solution.metaDescription} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions/" },
          { label: `For ${solution.audience}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
              {solution.heroTagline}
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto mb-8">{solution.heroDescription}</p>
            <a href="https://app.zentroseo.com/signup?flow=direct">
              <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 text-base">
                Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">Challenges {solution.audience} Face with SEO</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Common problems that hold {solution.audience.toLowerCase()} back from achieving their SEO potential.</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solution.painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-destructive/20 bg-destructive/5"
              >
                <AlertTriangle className="w-5 h-5 text-destructive mb-3" />
                <h3 className="font-display font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">How ZentroSEO Solves It</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {solution.solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <Link to={s.toolHref} className="font-display font-semibold text-primary hover:underline">{s.tool}</Link>
                  <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto p-8 rounded-2xl border border-primary/20 bg-accent/30">
            <h2 className="font-display text-2xl font-bold mb-3">Start Free, Scale When Ready</h2>
            <p className="text-muted-foreground text-sm mb-6">
              ZentroSEO offers a generous free plan perfect for {solution.audience.toLowerCase()} getting started. Upgrade as you grow.
            </p>
            <Link to="/pricing/">
              <Button variant="outline" className="mr-3">View Pricing</Button>
            </Link>
            <a href="https://app.zentroseo.com/signup?flow=direct">
              <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground">Start Free</Button>
            </a>
          </div>
        </div>
      </section>

      <Testimonials testimonials={[solution.testimonial]} />

      <RelatedLinks title="Other Solutions" links={solution.relatedSolutions} />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {solution.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SolutionDetail;
