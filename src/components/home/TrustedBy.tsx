import { motion } from "framer-motion";

const brands = [
  "TechFlow", "ScaleUp", "GrowthLab", "DataPulse", "BrightEdge", "ClickRise",
];

const TrustedBy = () => (
  <section className="py-10 bg-secondary/30 border-y border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
        Trusted by growing teams worldwide
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      >
        {brands.map((b) => (
          <span
            key={b}
            className="text-lg font-display font-bold text-muted-foreground/40 select-none"
          >
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;
