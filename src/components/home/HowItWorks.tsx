import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Connect Your Website", desc: "Add your website URL and let our AI crawl and analyze your entire site in minutes." },
  { num: "02", title: "AI Detects Issues", desc: "Our AI engine identifies technical SEO problems, content gaps, and optimization opportunities." },
  { num: "03", title: "Automated Fixes", desc: "ZentroFix automatically implements improvements—meta tags, schema, broken links, and more." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How ZentroSEO Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes and see SEO improvements in 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-display font-bold text-primary/20 mb-4">{step.num}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
