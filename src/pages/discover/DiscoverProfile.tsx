import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Globe, MapPin, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LocalizedLink from "@/components/LocalizedLink";
import SEOScoreGauge from "@/components/discover/SEOScoreGauge";
import ListingCard from "@/components/discover/ListingCard";
import CTASection from "@/components/home/CTASection";
import { getCategoryBySlug, getScoreBgColor, getScoreColor, getScoreLabel } from "@/data/discover";
import { useDiscoverListing, useDiscoverListings } from "@/hooks/use-discover";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";

const metricLabels = [
  { key: "seoScore", label: "SEO Score" },
  { key: "aiVisibility", label: "AI Visibility" },
  { key: "technicalHealth", label: "Technical Health" },
  { key: "contentStrength", label: "Content Strength" },
  { key: "localSeo", label: "Local SEO" },
  { key: "backlinks", label: "Backlinks" },
  { key: "keywords", label: "Keywords" },
] as const;

const localCategories = ["restaurant", "clinic", "law-firm", "store", "local-business"];

const toolLinks = [
  { label: "Run SEO Audit", href: "/scan/" },
  { label: "Title & Meta Checker", href: "/resources/seo-toolkit/title-meta-checker/" },
  { label: "Schema Markup Generator", href: "/resources/seo-toolkit/schema-markup-generator/" },
  { label: "SERP Simulator", href: "/resources/seo-toolkit/serp-simulator/" },
  { label: "Keyword Density Checker", href: "/resources/seo-toolkit/keyword-density-checker/" },
];

const DiscoverProfile = () => {
  const { param, subparam } = useParams<{ param: string; subparam: string }>();
  const { lang } = useLang();

  const slug = subparam || param || "";
  const { data: listing, isLoading } = useDiscoverListing(slug);

  const category = listing?.category;
  const { data: relatedAll = [] } = useDiscoverListings({
    category: category || undefined,
    limit: 5,
  });
  const relatedListings = relatedAll.filter((l) => l.slug !== slug).slice(0, 4);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </Layout>
    );
  }

  if (!listing) {
    return <Navigate to="/discover/" replace />;
  }

  const catMeta = getCategoryBySlug(listing.category);

  const canonicalPath = catMeta
    ? `/discover/${listing.category}/${listing.slug}/`
    : `/discover/${listing.slug}/`;

  const title = `${listing.name} SEO Report | ZentroSEO Discover`;
  const desc = `Check SEO performance, AI visibility, and website health of ${listing.name} with ZentroSEO.`;

  const isLocal = localCategories.includes(listing.category);
  const schemaType = isLocal ? "LocalBusiness" : listing.category === "saas" ? "SoftwareApplication" : "Organization";

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: listing.name,
    url: `https://${listing.domain}`,
    description: listing.description,
  };

  if (listing.location) {
    jsonLd.address = { "@type": "PostalAddress", addressLocality: listing.location };
  }
  if (listing.category === "saas") {
    jsonLd.applicationCategory = listing.industry;
  }

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={getCanonicalUrl(lang, canonicalPath)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={getCanonicalUrl(lang, canonicalPath)} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Header */}
      <section className="bg-hero text-hero-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Discover", href: "/discover/" },
              ...(catMeta ? [{ label: catMeta.label, href: `/discover/${listing.category}/` }] : []),
              { label: listing.name },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start gap-6 mt-8"
          >
            <div className="w-16 h-16 rounded-xl bg-hero-foreground/10 flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-hero-foreground">
                {listing.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{listing.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-hero-muted">
                <a
                  href={`https://${listing.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-hero-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {listing.domain}
                </a>
                {listing.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {listing.location}
                  </span>
                )}
                <span className="text-sm">{listing.industry}</span>
              </div>
              <p className="text-hero-muted mt-3 max-w-2xl">{listing.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Snapshot */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">SEO Snapshot</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-2 sm:col-span-1 rounded-xl border bg-card p-6 flex flex-col items-center justify-center"
            >
              <SEOScoreGauge score={listing.seoScore} size="lg" />
              <span className="text-sm font-medium text-foreground mt-3">Overall SEO Score</span>
              <span className={`text-xs font-medium mt-1 ${getScoreColor(listing.seoScore)}`}>
                {getScoreLabel(listing.seoScore)}
              </span>
            </motion.div>

            {metricLabels.slice(1).map((metric, i) => {
              const value = listing[metric.key];
              return (
                <motion.div
                  key={metric.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * (i + 1) }}
                  className={`rounded-xl border p-4 flex flex-col items-center justify-center ${getScoreBgColor(value)}`}
                >
                  <span className={`text-2xl font-bold ${getScoreColor(value)}`}>{value}</span>
                  <span className="text-xs text-muted-foreground mt-1 text-center">{metric.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unclaimed notice + CTAs */}
      {!listing.claimed && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">Auto-generated profile</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                This SEO profile was generated by ZentroSEO
              </h3>
              <p className="text-muted-foreground mb-8">
                If you own this business, claim your profile and run a full SEO audit to get actionable insights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`https://app.zentroseo.com/signup?flow=direct&domain=${listing.domain}`}>
                  <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8 py-5">
                    Claim This Business
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <LocalizedLink to={`/scan/?url=${listing.domain}`}>
                  <Button variant="outline" size="lg">
                    Run Full SEO Audit
                  </Button>
                </LocalizedLink>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {listing.claimed && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Want results like this?</h3>
            <p className="text-muted-foreground mb-6">
              See how your website stacks up with a free SEO scan.
            </p>
            <LocalizedLink to="/scan/">
              <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8">
                Scan Your Website Free
              </Button>
            </LocalizedLink>
          </div>
        </section>
      )}

      {/* ZentroSEO Tools */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Improve Your SEO with ZentroSEO</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {toolLinks.map((tool) => (
              <LocalizedLink
                key={tool.href}
                to={tool.href}
                className="text-sm px-4 py-2 rounded-full border bg-card hover:bg-accent transition-colors text-foreground"
              >
                {tool.label}
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      {/* Related Businesses */}
      {relatedListings.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground text-center mb-8">
              Related {catMeta?.label || "Businesses"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {relatedListings.map((rl, i) => (
                <ListingCard key={rl.slug} listing={rl} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </Layout>
  );
};

export default DiscoverProfile;
