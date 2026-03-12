import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ToolCTA = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="py-14 bg-muted/40"
  >
    <div className="container mx-auto px-4 text-center max-w-xl">
      <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
      <h2 className="font-display text-2xl font-bold mb-2">
        Get Deeper Insights with ZentroSEO
      </h2>
      <p className="text-muted-foreground mb-6">
        Unlock unlimited scans, AI-powered fixes, rank tracking, and 13 more SEO
        tools — free to start.
      </p>
      <a href="https://app.zentroseo.com/signup?flow=tools">
        <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
          Sign Up Free <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </a>
    </div>
  </motion.section>
);

export default ToolCTA;
