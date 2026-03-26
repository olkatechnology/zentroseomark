import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, AlertCircle, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CSVRow {
  slug: string;
  name: string;
  domain: string;
  category_slug: string;
  subcategory: string;
  industry: string;
  location?: string;
  location_slug?: string;
  description: string;
  seo_score: number;
  ai_visibility: number;
  technical_health: number;
  content_strength: number;
  local_seo: number;
  backlinks: number;
  keywords: number;
  claimed?: boolean;
  published?: boolean;
}

const REQUIRED = ["slug", "name", "domain", "category_slug", "subcategory", "industry", "description", "seo_score"];

function parseCSV(text: string): Record<string, string>[] {
  const lines = text.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = values[i] || ""));
    return obj;
  });
}

function validateRow(row: Record<string, string>): string[] {
  const errors: string[] = [];
  REQUIRED.forEach((f) => {
    if (!row[f]) errors.push(`Missing ${f}`);
  });
  if (row.seo_score && isNaN(Number(row.seo_score))) errors.push("seo_score must be a number");
  return errors;
}

const DiscoverCSVImporter = ({ onDone }: { onDone: () => void }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const [errors, setErrors] = useState<Map<number, string[]>>(new Map());
  const [importing, setImporting] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const parsed = parseCSV(ev.target?.result as string);
      setRows(parsed);
      const errs = new Map<number, string[]>();
      parsed.forEach((r, i) => {
        const rowErrors = validateRow(r);
        if (rowErrors.length) errs.set(i, rowErrors);
      });
      setErrors(errs);
    };
    reader.readAsText(file);
  };

  const handleImport = async () => {
    if (errors.size > 0) {
      toast.error("Fix validation errors before importing");
      return;
    }
    setImporting(true);
    try {
      const mapped = rows.map((r) => ({
        slug: r.slug,
        name: r.name,
        domain: r.domain,
        category_slug: r.category_slug,
        subcategory: r.subcategory || "",
        industry: r.industry || "",
        location: r.location || null,
        location_slug: r.location_slug || null,
        description: r.description || "",
        seo_score: Number(r.seo_score) || 0,
        ai_visibility: Number(r.ai_visibility) || 0,
        technical_health: Number(r.technical_health) || 0,
        content_strength: Number(r.content_strength) || 0,
        local_seo: Number(r.local_seo) || 0,
        backlinks: Number(r.backlinks) || 0,
        keywords: Number(r.keywords) || 0,
        claimed: r.claimed === "true",
        published: r.published !== "false",
      }));

      const { error } = await supabase.from("discover_listings").insert(mapped);
      if (error) throw error;

      toast.success(`Imported ${mapped.length} listings`);
      setRows([]);
      onDone();
    } catch (err: unknown) {
      toast.error(`Import failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Input ref={fileRef} type="file" accept=".csv" onChange={handleFile} className="max-w-xs" />
        <Button variant="outline" onClick={() => fileRef.current?.click()}>
          <Upload className="w-4 h-4 mr-2" /> Select CSV
        </Button>
      </div>

      {rows.length > 0 && (
        <div className="border rounded-lg overflow-auto max-h-96">
          <table className="w-full text-sm">
            <thead className="bg-muted sticky top-0">
              <tr>
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-left">Slug</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Domain</th>
                <th className="px-3 py-2 text-left">Category</th>
                <th className="px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={errors.has(i) ? "bg-destructive/10" : ""}>
                  <td className="px-3 py-2">{i + 1}</td>
                  <td className="px-3 py-2 font-mono text-xs">{r.slug}</td>
                  <td className="px-3 py-2">{r.name}</td>
                  <td className="px-3 py-2">{r.domain}</td>
                  <td className="px-3 py-2">{r.category_slug}</td>
                  <td className="px-3 py-2">
                    {errors.has(i) ? (
                      <span className="flex items-center gap-1 text-destructive text-xs">
                        <AlertCircle className="w-3 h-3" />
                        {errors.get(i)?.join(", ")}
                      </span>
                    ) : (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {rows.length > 0 && (
        <div className="flex items-center gap-3">
          <Button onClick={handleImport} disabled={importing || errors.size > 0}>
            {importing ? "Importing..." : `Import ${rows.length} Listings`}
          </Button>
          <span className="text-sm text-muted-foreground">
            {errors.size > 0 ? `${errors.size} rows have errors` : "All rows valid"}
          </span>
        </div>
      )}
    </div>
  );
};

export default DiscoverCSVImporter;
