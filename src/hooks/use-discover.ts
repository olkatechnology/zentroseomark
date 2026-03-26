import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { DiscoverListing, DiscoverCategoryMeta, DiscoverCategorySlug } from "@/data/discover";

// ── DB row → frontend interface mappers ──

interface DbListing {
  id: string;
  slug: string;
  name: string;
  domain: string;
  logo: string | null;
  category_slug: string;
  subcategory: string;
  industry: string;
  location: string | null;
  location_slug: string | null;
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

interface DbCategory {
  slug: string;
  label: string;
  description: string;
  icon: string;
  sort_order: number;
}

function mapListing(row: DbListing): DiscoverListing {
  return {
    slug: row.slug,
    name: row.name,
    domain: row.domain,
    logo: row.logo ?? undefined,
    category: row.category_slug as DiscoverCategorySlug,
    subcategory: row.subcategory,
    industry: row.industry,
    location: row.location ?? undefined,
    locationSlug: row.location_slug ?? undefined,
    description: row.description,
    seoScore: row.seo_score,
    aiVisibility: row.ai_visibility,
    technicalHealth: row.technical_health,
    contentStrength: row.content_strength,
    localSeo: row.local_seo,
    backlinks: row.backlinks,
    keywords: row.keywords,
    claimed: row.claimed,
  };
}

function mapCategory(row: DbCategory): DiscoverCategoryMeta {
  return {
    slug: row.slug as DiscoverCategorySlug,
    label: row.label,
    description: row.description,
    icon: row.icon,
  };
}

// ── Hooks ──

export function useDiscoverCategories() {
  return useQuery({
    queryKey: ["discover-categories"],
    queryFn: async (): Promise<DiscoverCategoryMeta[]> => {
      const { data, error } = await supabase
        .from("discover_categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return (data as DbCategory[]).map(mapCategory);
    },
    staleTime: 1000 * 60 * 10,
  });
}

export function useDiscoverListings(opts?: {
  category?: string;
  location?: string;
  industry?: string;
  search?: string;
  limit?: number;
}) {
  const { category, location, industry, search, limit } = opts || {};

  return useQuery({
    queryKey: ["discover-listings", category, location, industry, search, limit],
    queryFn: async (): Promise<DiscoverListing[]> => {
      let query = supabase
        .from("discover_listings")
        .select("*")
        .eq("published", true)
        .order("seo_score", { ascending: false });

      if (category) query = query.eq("category_slug", category);
      if (location) query = query.eq("location_slug", location);
      if (industry) query = query.eq("subcategory", industry);
      if (search) {
        query = query.or(
          `name.ilike.%${search}%,domain.ilike.%${search}%,industry.ilike.%${search}%,description.ilike.%${search}%`
        );
      }
      if (limit) query = query.limit(limit);

      const { data, error } = await query;
      if (error) throw error;
      return (data as DbListing[]).map(mapListing);
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useDiscoverListing(slug: string) {
  return useQuery({
    queryKey: ["discover-listing", slug],
    queryFn: async (): Promise<DiscoverListing | null> => {
      const { data, error } = await supabase
        .from("discover_listings")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data ? mapListing(data as DbListing) : null;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useDiscoverLocations(category?: string) {
  return useQuery({
    queryKey: ["discover-locations", category],
    queryFn: async (): Promise<{ slug: string; label: string }[]> => {
      let query = supabase
        .from("discover_listings")
        .select("location, location_slug")
        .eq("published", true)
        .not("location_slug", "is", null);
      if (category) query = query.eq("category_slug", category);

      const { data, error } = await query;
      if (error) throw error;

      const map = new Map<string, string>();
      (data || []).forEach((row: { location: string | null; location_slug: string | null }) => {
        if (row.location_slug && row.location) {
          map.set(row.location_slug, row.location);
        }
      });
      return Array.from(map.entries())
        .map(([slug, label]) => ({ slug, label }))
        .sort((a, b) => a.label.localeCompare(b.label));
    },
    staleTime: 1000 * 60 * 10,
  });
}

export function useDiscoverIndustries(category?: string) {
  return useQuery({
    queryKey: ["discover-industries", category],
    queryFn: async (): Promise<{ slug: string; label: string }[]> => {
      let query = supabase
        .from("discover_listings")
        .select("subcategory")
        .eq("published", true);
      if (category) query = query.eq("category_slug", category);

      const { data, error } = await query;
      if (error) throw error;

      const map = new Map<string, string>();
      (data || []).forEach((row: { subcategory: string }) => {
        if (row.subcategory) {
          map.set(
            row.subcategory,
            row.subcategory.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
          );
        }
      });
      return Array.from(map.entries())
        .map(([slug, label]) => ({ slug, label }))
        .sort((a, b) => a.label.localeCompare(b.label));
    },
    staleTime: 1000 * 60 * 10,
  });
}
