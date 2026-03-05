import { useState } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile: collapsible */}
      <nav className="lg:hidden mb-8 rounded-xl border border-border bg-card p-4" aria-label="Table of contents">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-sm font-semibold text-foreground"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-primary" /> Table of Contents
          </span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isOpen && (
          <ol className="mt-3 space-y-1.5">
            {items.map((item) => (
              <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        )}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-border bg-card p-5 w-64 shrink-0"
        aria-label="Table of contents"
      >
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
          <List className="w-4 h-4 text-primary" /> Table of Contents
        </p>
        <ol className="space-y-1.5">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
              <a
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default TableOfContents;
