import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      window.location.href = `https://app.zentroseo.com/signup?url=${encodeURIComponent(url)}`;
    }
  };

  return (
    <section className="bg-hero relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6">
            <span className="text-gradient-primary">SEO Made Simple</span>{" "}
            for Non-Techies
          </h1>
          <p className="text-lg md:text-xl text-hero-muted max-w-2xl mx-auto mb-10">
            ZentroSEO is the beginner-friendly SEO platform that helps non-techies, freelancers, and small businesses grow organic traffic with AI-powered insights.
          </p>

          {/* Website checker input — SemRush style */}
          <form onSubmit={handleCheck} className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row bg-hero-foreground/10 backdrop-blur rounded-xl p-1.5 border border-hero-muted/20">
              <input
                type="text"
                placeholder="Enter your website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent text-hero-foreground placeholder:text-hero-muted/60 px-4 py-3 text-sm focus:outline-none"
              />
              <Button type="submit" className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                Check My Website <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-hero-muted">
            {["9 SEO Tools", "AI-Powered", "No Coding Needed", "Free Plan"].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full border border-hero-foreground/10 bg-hero-foreground/5">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
