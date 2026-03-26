import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ListingCard from "@/components/discover/ListingCard";
import CTASection from "@/components/home/CTASection";
import { getCategoryBySlug } from "@/data/discover";
import { useDiscoverListings, useDiscoverLocations } from "@/hooks/use-discover";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const DiscoverLocationPage = () => {
  const { category, subparam: locationSlug } = useParams<{ category: string; subparam: string }>();
  const { lang } = useLang();

  const catMeta = getCategoryBySlug(category || "");
  const { data: locations = [] } = useDiscoverLocations(category);
  const locationMeta = locations.find((l) => l.slug === locationSlug);

  const { data: listings = [] } = useDiscoverListings({
    category,
    location: locationSlug,
  });

  if (!catMeta || (!locationMeta && locations.length > 0)) return <Navigate to="/discover/" replace />;

  const locationLabel = locationMeta?.label || locationSlug || "";

  const title = `${catMeta.label} SEO Directory in ${locationLabel} | ZentroSEO`;
  const desc = `Explore SEO performance of ${catMeta.label.toLowerCase()} in ${locationLabel}. Check scores, AI visibility, and website health powered by ZentroSEO.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: desc,
    url: getCanonicalUrl(lang, `/discover/${category}/${locationSlug}/`),
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={getCanonicalUrl(lang, `/discover/${category}/${locationSlug}/`)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Discover", href: "/discover/" },
              { label: catMeta.label, href: `/discover/${category}/` },
              { label: locationLabel },
            ]}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mt-6"
          >
            {catMeta.label} in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-cta">{locationLabel}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hero-muted text-lg mt-3 max-w-xl mx-auto"
          >
            SEO performance directory for {catMeta.label.toLowerCase()} in {locationLabel}.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center mb-8">
            {listings.length} listing{listings.length !== 1 ? "s" : ""}
          </p>

          {listings.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {listings.map((listing, i) => (
                <ListingCard key={listing.slug} listing={listing} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No listings found in this location yet.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DiscoverLocationPage;
