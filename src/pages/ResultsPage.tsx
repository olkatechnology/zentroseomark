import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

interface ScanResult {
  verdict: string;
  colour: string;
  visitorsPerDay: number;
  potentialPerDay: number;
  cards: {
    working: string;
    blocking: string;
    opportunity: string;
  };
}

const VERDICT_CONFIG: Record<string, { bg: string; icon: string; heading: string }> = {
  "Easy to Find": {
    bg: "bg-[hsl(122,39%,90%)]",
    icon: "🟢",
    heading: "Your business is easy to find on Google",
  },
  "Needs Some Work": {
    bg: "bg-[hsl(36,100%,94%)]",
    icon: "🟡",
    heading: "Your business could be easier to find on Google",
  },
  "Hard to Find": {
    bg: "bg-[hsl(0,100%,95%)]",
    icon: "🔴",
    heading: "Customers are struggling to find your business",
  },
};

const ResultsPage = () => {
  const result = useMemo<ScanResult | null>(() => {
    try {
      const raw = sessionStorage.getItem("zentroseo_scan_result");
      if (!raw) return null;
      return JSON.parse(raw) as ScanResult;
    } catch {
      return null;
    }
  }, []);

  const guestToken = sessionStorage.getItem("zentroseo_guest_token") || "";
  const scanUrl = sessionStorage.getItem("zentroseo_scan_url") || "";

  if (!result) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <p className="text-xl font-semibold text-foreground mb-2">Your results have expired.</p>
            <p className="text-muted-foreground mb-6">Enter your website again to get a fresh scan.</p>
            <Button asChild className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold">
              <Link to="/">Scan your website →</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const config = VERDICT_CONFIG[result.verdict] || VERDICT_CONFIG["Needs Some Work"];
  const ctaUrl = `https://app.zentroseo.com/signup?guest_token=${encodeURIComponent(guestToken)}&url=${encodeURIComponent(scanUrl)}&verdict=${encodeURIComponent(result.verdict)}`;

  const cards = [
    { label: "What's working ✓", content: result.cards.working, borderColor: "border-l-[hsl(152,60%,26%)]" },
    { label: "What's blocking customers ⚠️", content: result.cards.blocking, borderColor: "border-l-[hsl(21,100%,45%)]" },
    { label: "Your biggest opportunity 🎯", content: result.cards.opportunity, borderColor: "border-l-[hsl(152,60%,26%)]" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Your SEO Results – ZentroSEO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Verdict block */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${config.bg} py-12 md:py-16`}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block">{config.icon}</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{config.heading}</h1>
        </div>
      </motion.section>

      {/* Visitor estimate */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="py-8 bg-background"
      >
        <p className="text-center text-base md:text-lg text-foreground max-w-2xl mx-auto px-4">
          About <strong>{result.visitorsPerDay}</strong> people per day find your business on Google.
          Here's how to get that to <strong>{result.potentialPerDay}</strong>.
        </p>
      </motion.section>

      {/* Insight cards */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className={`bg-card rounded-lg border border-border shadow-sm p-6 border-l-4 ${card.borderColor}`}
              >
                <h3 className="font-semibold text-foreground mb-2 text-sm">{card.label}</h3>
                <p className="text-muted-foreground text-sm">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blurred section */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 blur-[6px] select-none pointer-events-none">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-card rounded-lg border border-border p-6 h-28">
                  <div className="h-3 bg-muted rounded w-2/3 mb-3" />
                  <div className="h-2 bg-muted rounded w-full mb-2" />
                  <div className="h-2 bg-muted rounded w-4/5" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
              <p className="text-foreground font-semibold text-lg">5 more findings in your full plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-bold text-lg px-10 py-6 rounded-xl">
            <a href={ctaUrl}>Get my free improvement plan</a>
          </Button>
          <p className="text-muted-foreground text-sm mt-4">Free to start. No credit card needed.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <span>✓ Plain English</span>
            <span>✓ No jargon</span>
            <span>✓ Cancel any time</span>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default ResultsPage;
