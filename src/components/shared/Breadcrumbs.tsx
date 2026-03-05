import LocalizedLink from "@/components/LocalizedLink";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { lang } = useLang();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: getCanonicalUrl(lang, item.href) } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {item.href && i < items.length - 1 ? (
                <LocalizedLink to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </LocalizedLink>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
