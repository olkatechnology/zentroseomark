import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import SEOScoreGauge from "./SEOScoreGauge";
import { DiscoverListing, getCategoryBySlug, getScoreBgColor } from "@/data/discover";

interface ListingCardProps {
  listing: DiscoverListing;
  index?: number;
}

const ListingCard = ({ listing, index = 0 }: ListingCardProps) => {
  const catMeta = getCategoryBySlug(listing.category);
  const profilePath = `/discover/${listing.category}/${listing.slug}/`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group rounded-xl border bg-card p-5 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-lg font-bold text-primary">
            {listing.name.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{listing.name}</h3>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              {listing.domain}
            </span>
            {listing.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {listing.location}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{listing.description}</p>
        </div>

        <div className="shrink-0 hidden sm:block">
          <SEOScoreGauge score={listing.seoScore} size="sm" showLabel />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getScoreBgColor(listing.seoScore)}`}>
            {catMeta?.label || listing.category}
          </span>
          <span className="text-xs text-muted-foreground">{listing.industry}</span>
        </div>
        <LocalizedLink to={profilePath}>
          <Button variant="outline" size="sm" className="text-xs">
            View SEO Profile
          </Button>
        </LocalizedLink>
      </div>
    </motion.div>
  );
};

export default ListingCard;
