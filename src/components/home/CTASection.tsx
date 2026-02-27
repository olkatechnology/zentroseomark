import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
          Ready to Grow Your Rankings?
        </h2>
        <p className="text-hero-muted text-lg mb-8 max-w-xl mx-auto">
          Join thousands of businesses using ZentroSEO to simplify SEO and drive organic growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.zentroseo.com/signup?flow=direct">
            <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 text-base flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="/pricing/">
            <Button variant="outline" className="border-hero-muted/30 text-hero-foreground hover:bg-hero-foreground/10 px-8 py-3 text-base">
              View Pricing
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
