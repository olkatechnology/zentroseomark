import { motion } from "framer-motion";
import { Zap, Brain, Eye } from "lucide-react";

const differentiators = [
  { icon: Brain, title: "AI-Powered Automation", desc: "Let AI detect and fix SEO issues automatically while you focus on growing your business." },
  { icon: Zap, title: "1-Click SEO Fixes", desc: "ZentroFix automatically implements technical SEO improvements with a single click." },
  { icon: Eye, title: "Real-Time Tracking", desc: "Monitor your keyword rankings, backlinks, and traffic growth in real-time dashboards." },
];

const WhyDifferent = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Makes ZentroSEO Different
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                While other tools just report SEO issues, ZentroSEO's AI actually fixes them automatically at the click of a button.
              </p>
              <a href="https://app.zentroseo.com/signup" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Start your free trial →
              </a>
            </div>
            <div className="space-y-5">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 rounded-xl border bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
