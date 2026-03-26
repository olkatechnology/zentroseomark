import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Eye, EyeOff, Upload } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import AdminGuard from "@/components/admin/AdminGuard";
import DiscoverCSVImporter from "@/components/admin/DiscoverCSVImporter";

interface DbListing {
  id: string;
  slug: string;
  name: string;
  domain: string;
  category_slug: string;
  subcategory: string;
  industry: string;
  location: string | null;
  seo_score: number;
  published: boolean;
  claimed: boolean;
  created_at: string;
}

const AdminDiscover = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showImporter, setShowImporter] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["admin-discover-listings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("discover_listings")
        .select("id, slug, name, domain, category_slug, subcategory, industry, location, seo_score, published, claimed, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as DbListing[];
    },
  });

  const filtered = search.trim()
    ? listings.filter(
        (l) =>
          l.name.toLowerCase().includes(search.toLowerCase()) ||
          l.domain.toLowerCase().includes(search.toLowerCase()) ||
          l.category_slug.includes(search.toLowerCase())
      )
    : listings;

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === filtered.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filtered.map((l) => l.id)));
    }
  };

  const bulkAction = async (action: "publish" | "unpublish" | "delete") => {
    if (selected.size === 0) return;
    const ids = Array.from(selected);

    try {
      if (action === "delete") {
        const { error } = await supabase.from("discover_listings").delete().in("id", ids);
        if (error) throw error;
        toast.success(`Deleted ${ids.length} listings`);
      } else {
        const { error } = await supabase
          .from("discover_listings")
          .update({ published: action === "publish" })
          .in("id", ids);
        if (error) throw error;
        toast.success(`${action === "publish" ? "Published" : "Unpublished"} ${ids.length} listings`);
      }
      setSelected(new Set());
      queryClient.invalidateQueries({ queryKey: ["admin-discover-listings"] });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Action failed");
    }
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-foreground">Discover Listings</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowImporter(!showImporter)}>
                <Upload className="w-4 h-4 mr-2" /> CSV Import
              </Button>
              <Button onClick={() => navigate("/admin/discover/new/")}>
                <Plus className="w-4 h-4 mr-2" /> Add Listing
              </Button>
            </div>
          </div>

          {showImporter && (
            <div className="mb-6 p-4 border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-3">Import from CSV</h3>
              <DiscoverCSVImporter
                onDone={() => {
                  setShowImporter(false);
                  queryClient.invalidateQueries({ queryKey: ["admin-discover-listings"] });
                }}
              />
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <Input
              placeholder="Search listings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
            {selected.size > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{selected.size} selected</span>
                <Button variant="outline" size="sm" onClick={() => bulkAction("publish")}>
                  <Eye className="w-3 h-3 mr-1" /> Publish
                </Button>
                <Button variant="outline" size="sm" onClick={() => bulkAction("unpublish")}>
                  <EyeOff className="w-3 h-3 mr-1" /> Unpublish
                </Button>
                <Button variant="destructive" size="sm" onClick={() => bulkAction("delete")}>
                  <Trash2 className="w-3 h-3 mr-1" /> Delete
                </Button>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : (
            <div className="border rounded-lg overflow-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-3 py-3 text-left">
                      <Checkbox
                        checked={selected.size === filtered.length && filtered.length > 0}
                        onCheckedChange={toggleAll}
                      />
                    </th>
                    <th className="px-3 py-3 text-left font-medium">Name</th>
                    <th className="px-3 py-3 text-left font-medium">Domain</th>
                    <th className="px-3 py-3 text-left font-medium">Category</th>
                    <th className="px-3 py-3 text-left font-medium">Score</th>
                    <th className="px-3 py-3 text-left font-medium">Status</th>
                    <th className="px-3 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((listing) => (
                    <tr key={listing.id} className="border-t hover:bg-muted/50">
                      <td className="px-3 py-3">
                        <Checkbox
                          checked={selected.has(listing.id)}
                          onCheckedChange={() => toggleSelect(listing.id)}
                        />
                      </td>
                      <td className="px-3 py-3 font-medium">{listing.name}</td>
                      <td className="px-3 py-3 text-muted-foreground">{listing.domain}</td>
                      <td className="px-3 py-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {listing.category_slug}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-mono">{listing.seo_score}</td>
                      <td className="px-3 py-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            listing.published
                              ? "bg-green-500/10 text-green-600"
                              : "bg-yellow-500/10 text-yellow-600"
                          }`}
                        >
                          {listing.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(`/admin/discover/edit/${listing.slug}/`)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No listings found.</div>
              )}
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">{listings.length} total listings</p>
        </div>
      </div>
    </AdminGuard>
  );
};

export default AdminDiscover;
