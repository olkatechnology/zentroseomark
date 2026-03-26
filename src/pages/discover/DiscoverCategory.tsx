import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LocalizedLink from "@/components/LocalizedLink";
import DiscoverSearch from "@/components/discover/DiscoverSearch";
import ListingCard from "@/components/discover/ListingCard";
import CTASection from "@/components/home/CTASection";
import { discoverCategories } from "@/data/discover";
import { useDiscoverListings, useDiscoverLocations, useDiscoverIndustries } from "@/hooks/use-discover";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const categoryAliases: Record<string, string> = {
  businesses: "sme",
  local: "local-business",
  business: "sme",
};

const DiscoverCategory = () => {
  const { param } = useParams<{ param: string }>();
  const [search, setSearch] = useState("");
  const { lang } = useLang();

  const rawCategory = param || "";
  const category = categoryAliases[rawCategory] || rawCategory;

  if (categoryAliases[rawCategory]) {
    return <Navigate to={`/discover/${categoryAliases[rawCategory]}/`} replace />;
  }

  const catMeta = discoverCategories.find((c) => c.slug === category);

  if (!catMeta) {
    return <Navigate to="/discover/" replace />;
  }

  const { data: listings = [] } = useDiscoverListings({
    category,
    search: search.trim() || undefined,
  });

  const { data: locations = [] } = useDiscoverLocations(category);
  const { data: industries = [] } = useDiscoverIndustries(category);

  const title = `${catMeta.label} SEO Directory | ZentroSEO Discover`;
  const desc = `Explore SEO performance of ${catMeta.label.toLowerCase()} — check scores, AI visibility, and website health. Powered by ZentroSEO.`;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={getCanonicalUrl(lang, `/discover/${category}/`)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>

      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Discover", href: "/discover/" },
              { label: catMeta.label },
            ]}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mt-6"
          >
            {catMeta.label}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-cta">SEO Directory</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero-muted text-lg mt-3 max-w-xl mx-auto"
          >
            {catMeta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <DiscoverSearch value={search} onChange={setSearch} placeholder={`Search ${catMeta.label.toLowerCase()}...`} />
          </motion.div>
        </div>
      </section>

      {/* Location & Industry sub-links */}
      {(locations.length > 0 || industries.length > 0) && (
        <section className="py-8 bg-secondary/30 border-b">
          <div className="container mx-auto px-4">
            {locations.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Browse by Location
                </h3>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <LocalizedLink
                      key={loc.slug}
                      to={`/discover/${category}/${loc.slug}/`}
                      className="text-sm px-3 py-1.5 rounded-full border bg-card hover:bg-accent transition-colors text-foreground"
                    >
                      {loc.label}
                    </LocalizedLink>
                  ))}
                </div>
              </div>
            )}
            {industries.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5 mb-2">
                  <Layers className="w-3.5 h-3.5" /> Browse by Industry
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <LocalizedLink
                      key={ind.slug}
                      to={`/discover/${category}/${ind.slug}/`}
                      className="text-sm px-3 py-1.5 rounded-full border bg-card hover:bg-accent transition-colors text-foreground"
                    >
                      {ind.label}
                    </LocalizedLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center mb-8">
            {listings.length} listing{listings.length !== 1 ? "s" : ""}{search.trim() ? ` matching "${search}"` : ""}
          </p>

          {listings.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {listings.map((listing, i) => (
                <ListingCard key={listing.slug} listing={listing} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No listings found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DiscoverCategory;
