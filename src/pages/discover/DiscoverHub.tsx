import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Cloud, Rocket, Briefcase, Users, UtensilsCrossed,
  Heart, Scale, ShoppingBag, MapPin, Globe, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LocalizedLink from "@/components/LocalizedLink";
import DiscoverSearch from "@/components/discover/DiscoverSearch";
import ListingCard from "@/components/discover/ListingCard";
import CTASection from "@/components/home/CTASection";
import { discoverCategories } from "@/data/discover";
import { useDiscoverCategories, useDiscoverListings } from "@/hooks/use-discover";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud, Rocket, Briefcase, Users, UtensilsCrossed,
  Heart, Scale, ShoppingBag, MapPin, Globe,
};

const DiscoverHub = () => {
  const [query, setQuery] = useState("");
  const { lang } = useLang();

  const { data: dbCategories } = useDiscoverCategories();
  const categories = dbCategories?.length ? dbCategories : discoverCategories;

  const { data: listings = [] } = useDiscoverListings({
    search: query.trim() || undefined,
    limit: query.trim() ? undefined : 8,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ZentroDiscover — Business & SaaS SEO Directory",
    description: "Explore SEO visibility, AI presence, and website performance of companies and tools across industries.",
    url: getCanonicalUrl(lang, "/discover/"),
  };

  return (
    <Layout>
      <Helmet>
        <title>Discover SEO Performance of Businesses, SaaS & Local Companies | ZentroSEO</title>
        <meta name="description" content="Explore SEO visibility, AI presence, and website performance across industries and locations powered by ZentroSEO. Claim your business profile today." />
        <link rel="canonical" href={getCanonicalUrl(lang, "/discover/")} />
        <meta property="og:title" content="Discover SEO Performance of Businesses, SaaS & Local Companies | ZentroSEO" />
        <meta property="og:description" content="Explore SEO visibility, AI presence, and website performance across industries and locations powered by ZentroSEO." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Discover" }]} />

      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Discover SEO Performance of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-cta">Businesses, SaaS & Local Companies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero-muted text-lg mt-4 max-w-2xl mx-auto"
          >
            Explore SEO visibility, AI presence, and website performance across industries and locations powered by ZentroSEO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <DiscoverSearch value={query} onChange={setQuery} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-6"
          >
            <LocalizedLink to="/scan/">
              <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-6">
                Run Free SEO Audit
              </Button>
            </LocalizedLink>
            <a href="#categories">
              <Button variant="outline" className="border-hero-foreground/30 text-hero-foreground bg-hero-foreground/10 hover:bg-hero-foreground/20">
                Browse Categories
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon] || Globe;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <LocalizedLink
                    to={`/discover/${cat.slug}/`}
                    className="block group rounded-xl border bg-card p-5 hover:shadow-md transition-all text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{cat.label}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1 group-hover:gap-1.5 transition-all">
                      Browse <ArrowRight className="w-3 h-3" />
                    </span>
                  </LocalizedLink>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            {query.trim() ? `Results for "${query}"` : "Featured Listings"}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            {query.trim() ? `${listings.length} listing${listings.length !== 1 ? "s" : ""} found` : "Recently added companies and tools"}
          </p>

          {listings.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {listings.map((listing, i) => (
                <ListingCard key={listing.slug} listing={listing} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No listings match your search. Try a different query.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DiscoverHub;
