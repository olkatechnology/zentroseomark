import { ArrowRight } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";

interface RelatedTool {
  title: string;
  href: string;
  description: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

const RelatedTools = ({ tools }: RelatedToolsProps) => {
  if (!tools.length) return null;

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl font-bold mb-6">Related Free SEO Tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <LocalizedLink key={i} to={tool.href} className="group block rounded-xl border border-border p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
              <span className="text-xs font-medium text-primary flex items-center gap-1">
                Try Free <ArrowRight className="w-3 h-3" />
              </span>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTools;
