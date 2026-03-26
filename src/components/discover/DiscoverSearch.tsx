import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DiscoverSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const DiscoverSearch = ({ value, onChange, placeholder = "Search by name, domain, industry, or location..." }: DiscoverSearchProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-12 pr-4 py-6 text-base rounded-xl border-border bg-background shadow-sm"
      />
    </div>
  );
};

export default DiscoverSearch;
