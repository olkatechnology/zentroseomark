import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is ZentroSEO?", a: "ZentroSEO is a beginner-friendly, AI-powered SEO platform that combines 9 tools—audit, keywords, rank tracking, content writing, competitor analysis, backlink monitoring, schema markup, and white-label reporting—into one affordable solution." },
  { q: "Is ZentroSEO good for beginners?", a: "Absolutely! ZentroSEO is specifically designed for non-techies, freelancers, and small businesses. Our interface is intuitive, and our AI handles the complex technical work for you." },
  { q: "How does the AI fix SEO issues?", a: "ZentroFix (coming soon) uses AI to detect and auto-correct critical SEO issues like meta tags, schema markup, broken links, and Core Web Vitals—all with a single click." },
  { q: "Can I try ZentroSEO for free?", a: "Yes! We offer a free plan with basic features. Paid plans start at $19/month with a 3-day free trial so you can explore everything risk-free." },
  { q: "Do you offer white-label reporting?", a: "Yes, ZentroWhite allows agencies to deliver branded SEO reports and dashboards to their clients under their own brand." },
  { q: "What kind of support do you provide?", a: "All plans include email support. Pro plans include phone support, and Advanced/Enterprise plans include a dedicated account manager." },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about ZentroSEO.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
