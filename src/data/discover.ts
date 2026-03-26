// ── Types (unchanged) ──

export interface DiscoverListing {
  slug: string;
  name: string;
  domain: string;
  logo?: string;
  category: DiscoverCategorySlug;
  subcategory: string;
  industry: string;
  location?: string;
  locationSlug?: string;
  description: string;
  seoScore: number;
  aiVisibility: number;
  technicalHealth: number;
  contentStrength: number;
  localSeo: number;
  backlinks: number;
  keywords: number;
  claimed: boolean;
}

export type DiscoverCategorySlug =
  | "saas"
  | "startup"
  | "sme"
  | "agency"
  | "restaurant"
  | "clinic"
  | "law-firm"
  | "store"
  | "local-business"
  | "domain";

export interface DiscoverCategoryMeta {
  slug: DiscoverCategorySlug;
  label: string;
  description: string;
  icon: string;
}

// ── Static fallback categories (used for SSR / build / resolvers before DB loads) ──

export const discoverCategories: DiscoverCategoryMeta[] = [
  { slug: "saas", label: "SaaS Tools", description: "Software-as-a-Service platforms and tools", icon: "Cloud" },
  { slug: "startup", label: "Startups", description: "Early-stage and growth-phase startups", icon: "Rocket" },
  { slug: "sme", label: "SMEs", description: "Small and medium-sized enterprises", icon: "Briefcase" },
  { slug: "agency", label: "Agencies", description: "Marketing, design, and digital agencies", icon: "Users" },
  { slug: "restaurant", label: "Restaurants", description: "Restaurants, cafés, and food businesses", icon: "UtensilsCrossed" },
  { slug: "clinic", label: "Clinics", description: "Healthcare clinics and medical practices", icon: "Heart" },
  { slug: "law-firm", label: "Law Firms", description: "Legal practices and law firms", icon: "Scale" },
  { slug: "store", label: "Stores", description: "Retail shops, e-commerce, and online stores", icon: "ShoppingBag" },
  { slug: "local-business", label: "Local Businesses", description: "Gyms, salons, repair shops, and local services", icon: "MapPin" },
  { slug: "domain", label: "Domains", description: "Domain names and web properties", icon: "Globe" },
];

// ── Helpers (kept for backward compat — used by components that haven't migrated to hooks) ──

export function getCategoryBySlug(slug: string): DiscoverCategoryMeta | undefined {
  return discoverCategories.find((c) => c.slug === slug);
}

// Score helpers
export function getScoreColor(score: number): string {
  if (score >= 80) return "text-green-500";
  if (score >= 50) return "text-yellow-500";
  return "text-red-500";
}

export function getScoreBgColor(score: number): string {
  if (score >= 80) return "bg-green-500/10 border-green-500/20";
  if (score >= 50) return "bg-yellow-500/10 border-yellow-500/20";
  return "bg-red-500/10 border-red-500/20";
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return "Good";
  if (score >= 50) return "Needs Work";
  return "Poor";
}
