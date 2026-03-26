import { useParams } from "react-router-dom";
import { useDiscoverLocations, useDiscoverIndustries } from "@/hooks/use-discover";
import DiscoverLocationPage from "./DiscoverLocationPage";
import DiscoverIndustryPage from "./DiscoverIndustryPage";
import DiscoverProfile from "./DiscoverProfile";

/** Routes discover/:category/:subparam to location, industry, or profile page */
const DiscoverSubResolver = () => {
  const { category, subparam } = useParams<{ category: string; subparam: string }>();

  const { data: locations = [], isLoading: locLoading } = useDiscoverLocations(category);
  const { data: industries = [], isLoading: indLoading } = useDiscoverIndustries(category);

  if (!category || !subparam) return <DiscoverProfile />;

  // Still loading — show profile as fallback (it handles its own loading)
  if (locLoading || indLoading) {
    // Check if subparam looks like a location or industry slug — render optimistically
    if (locations.some((l) => l.slug === subparam)) return <DiscoverLocationPage />;
    if (industries.some((i) => i.slug === subparam)) return <DiscoverIndustryPage />;
    return <DiscoverProfile />;
  }

  if (locations.some((l) => l.slug === subparam)) return <DiscoverLocationPage />;
  if (industries.some((i) => i.slug === subparam)) return <DiscoverIndustryPage />;

  return <DiscoverProfile />;
};

export default DiscoverSubResolver;
