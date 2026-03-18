import { useState } from "react";
import { toolContent } from "@/data/tool-content";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Copy, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const countries = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "es", label: "Spain" },
  { value: "it", label: "Italy" },
  { value: "nl", label: "Netherlands" },
  { value: "br", label: "Brazil" },
  { value: "in", label: "India" },
  { value: "jp", label: "Japan" },
  { value: "kr", label: "South Korea" },
  { value: "mx", label: "Mexico" },
  { value: "se", label: "Sweden" },
  { value: "pl", label: "Poland" },
  { value: "tr", label: "Turkey" },
  { value: "za", label: "South Africa" },
  { value: "ng", label: "Nigeria" },
];

const languages = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "nl", label: "Dutch" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "sv", label: "Swedish" },
  { value: "pl", label: "Polish" },
  { value: "tr", label: "Turkish" },
  { value: "vi", label: "Vietnamese" },
  { value: "zh", label: "Chinese" },
];

const AutocompleteKeywordFinder = () => {
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("us");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setSuggestions([]);
    setSearchedKeyword(keyword.trim());

    try {
      const { data, error } = await supabase.functions.invoke("autocomplete-suggestions", {
        body: { keyword: keyword.trim(), country, language },
      });

      if (error) throw error;
      setSuggestions(data.suggestions ?? []);
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to fetch suggestions", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const copyOne = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(suggestions.join("\n"));
    setCopiedAll(true);
    toast({ title: "Copied!", description: `${suggestions.length} suggestions copied to clipboard.` });
    setTimeout(() => setCopiedAll(false), 1500);
  };

  return (
    <ToolLayout
      toolName="Autocomplete Keyword Finder"
      toolDescription="Discover autocomplete keyword suggestions from Google for any keyword and country."
      metaTitle="Autocomplete Keyword Finder – Free Google Suggest Tool | ZentroSEO"
      metaDescription="Extract Google autocomplete suggestions for any keyword. Discover long-tail keywords, content ideas, and search trends with this free SEO tool."
      canonicalPath="/resources/seo-toolkit/autocomplete-keyword-finder/"
      showCTA={suggestions.length > 0}
      {...toolContent["autocomplete-keyword-finder"]}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="keyword">Keyword</Label>
          <Input
            id="keyword"
            placeholder="e.g. best seo tools"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" disabled={loading || !keyword.trim()} className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Fetching…</> : <><Search className="w-4 h-4 mr-2" /> Get Suggestions</>}
        </Button>
      </form>

      {suggestions.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">
              Suggestions for "<span className="text-primary">{searchedKeyword}</span>"
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{suggestions.length} results</Badge>
              <Button size="sm" variant="outline" onClick={copyAll}>
                {copiedAll ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                {copiedAll ? "Copied" : "Copy All"}
              </Button>
            </div>
          </div>

          <ul className="divide-y divide-border rounded-lg border border-border overflow-hidden">
            {suggestions.map((s, i) => (
              <li key={i} className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/50 transition-colors">
                <span className="text-sm">{s}</span>
                <button
                  onClick={() => copyOne(s, i)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label={`Copy "${s}"`}
                >
                  {copiedIdx === i ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!loading && suggestions.length === 0 && searchedKeyword && (
        <p className="mt-8 text-center text-muted-foreground text-sm">No suggestions found for "{searchedKeyword}". Try a different keyword.</p>
      )}
    </ToolLayout>
  );
};

export default AutocompleteKeywordFinder;
