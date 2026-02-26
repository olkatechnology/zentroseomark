import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

const RelatedLinks = ({ title = "Related Tools", links }: RelatedLinksProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="flex-1">
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{link.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
