import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import AdminGuard from "@/components/admin/AdminGuard";
import { discoverCategories } from "@/data/discover";

interface FormData {
  slug: string;
  name: string;
  domain: string;
  logo: string;
  category_slug: string;
  subcategory: string;
  industry: string;
  location: string;
  location_slug: string;
  description: string;
  seo_score: number;
  ai_visibility: number;
  technical_health: number;
  content_strength: number;
  local_seo: number;
  backlinks: number;
  keywords: number;
  claimed: boolean;
  published: boolean;
}

const defaults: FormData = {
  slug: "",
  name: "",
  domain: "",
  logo: "",
  category_slug: "saas",
  subcategory: "",
  industry: "",
  location: "",
  location_slug: "",
  description: "",
  seo_score: 50,
  ai_visibility: 50,
  technical_health: 50,
  content_strength: 50,
  local_seo: 50,
  backlinks: 50,
  keywords: 50,
  claimed: false,
  published: true,
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const AdminDiscoverForm = () => {
  const { slug } = useParams<{ slug: string }>();
  const isNew = slug === "new";
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState<FormData>(defaults);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    const load = async () => {
      const { data, error } = await supabase
        .from("discover_listings")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error || !data) {
        toast.error("Listing not found");
        navigate("/admin/discover/");
        return;
      }
      setForm({
        slug: data.slug,
        name: data.name,
        domain: data.domain,
        logo: data.logo || "",
        category_slug: data.category_slug,
        subcategory: data.subcategory,
        industry: data.industry,
        location: data.location || "",
        location_slug: data.location_slug || "",
        description: data.description,
        seo_score: data.seo_score,
        ai_visibility: data.ai_visibility,
        technical_health: data.technical_health,
        content_strength: data.content_strength,
        local_seo: data.local_seo,
        backlinks: data.backlinks,
        keywords: data.keywords,
        claimed: data.claimed,
        published: data.published,
      });
      setLoading(false);
    };
    load();
  }, [slug, isNew, navigate]);

  const update = (field: keyof FormData, value: string | number | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "name" && isNew) {
        next.slug = slugify(value as string);
      }
      if (field === "location") {
        next.location_slug = slugify(value as string);
      }
      return next;
    });
  };

  const handleSave = async () => {
    if (!form.slug || !form.name || !form.domain) {
      toast.error("Slug, name, and domain are required");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        slug: form.slug,
        name: form.name,
        domain: form.domain,
        logo: form.logo || null,
        category_slug: form.category_slug,
        subcategory: form.subcategory,
        industry: form.industry,
        location: form.location || null,
        location_slug: form.location_slug || null,
        description: form.description,
        seo_score: form.seo_score,
        ai_visibility: form.ai_visibility,
        technical_health: form.technical_health,
        content_strength: form.content_strength,
        local_seo: form.local_seo,
        backlinks: form.backlinks,
        keywords: form.keywords,
        claimed: form.claimed,
        published: form.published,
      };

      if (isNew) {
        const { error } = await supabase.from("discover_listings").insert(payload);
        if (error) throw error;
        toast.success("Listing created");
      } else {
        const { error } = await supabase.from("discover_listings").update(payload).eq("slug", slug);
        if (error) throw error;
        toast.success("Listing updated");
      }

      queryClient.invalidateQueries({ queryKey: ["admin-discover-listings"] });
      queryClient.invalidateQueries({ queryKey: ["discover-listings"] });
      navigate("/admin/discover/");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminGuard>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </AdminGuard>
    );
  }

  const scoreFields = [
    { key: "seo_score" as const, label: "SEO Score" },
    { key: "ai_visibility" as const, label: "AI Visibility" },
    { key: "technical_health" as const, label: "Technical Health" },
    { key: "content_strength" as const, label: "Content Strength" },
    { key: "local_seo" as const, label: "Local SEO" },
    { key: "backlinks" as const, label: "Backlinks" },
    { key: "keywords" as const, label: "Keywords" },
  ];

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              {isNew ? "Add Listing" : `Edit: ${form.name}`}
            </h1>
            <Button variant="outline" onClick={() => navigate("/admin/discover/")}>
              Back
            </Button>
          </div>

          <div className="space-y-6">
            {/* Basic info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name *</Label>
                <Input value={form.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div>
                <Label>Slug *</Label>
                <Input value={form.slug} onChange={(e) => update("slug", e.target.value)} />
              </div>
              <div>
                <Label>Domain *</Label>
                <Input value={form.domain} onChange={(e) => update("domain", e.target.value)} placeholder="example.com" />
              </div>
              <div>
                <Label>Logo URL</Label>
                <Input value={form.logo} onChange={(e) => update("logo", e.target.value)} placeholder="https://..." />
              </div>
              <div>
                <Label>Category</Label>
                <Select value={form.category_slug} onValueChange={(v) => update("category_slug", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {discoverCategories.map((c) => (
                      <SelectItem key={c.slug} value={c.slug}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Subcategory</Label>
                <Input value={form.subcategory} onChange={(e) => update("subcategory", e.target.value)} placeholder="seo-tools" />
              </div>
              <div>
                <Label>Industry</Label>
                <Input value={form.industry} onChange={(e) => update("industry", e.target.value)} />
              </div>
              <div>
                <Label>Location</Label>
                <Input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="New York, NY" />
              </div>
            </div>

            <div>
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={3} />
            </div>

            {/* Scores */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Scores (0-100)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {scoreFields.map((sf) => (
                  <div key={sf.key}>
                    <Label className="text-xs">{sf.label}</Label>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={form[sf.key]}
                      onChange={(e) => update(sf.key, Number(e.target.value))}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={form.published} onCheckedChange={(v) => update("published", !!v)} />
                <span className="text-sm">Published</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={form.claimed} onCheckedChange={(v) => update("claimed", !!v)} />
                <span className="text-sm">Claimed</span>
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : isNew ? "Create Listing" : "Save Changes"}
              </Button>
              <Button variant="outline" onClick={() => navigate("/admin/discover/")}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
};

export default AdminDiscoverForm;
