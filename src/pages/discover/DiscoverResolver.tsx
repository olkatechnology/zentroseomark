import { useParams } from "react-router-dom";
import DiscoverCategory from "./DiscoverCategory";
import DiscoverProfile from "./DiscoverProfile";
import { discoverCategories } from "@/data/discover";

const validCategories = discoverCategories.map((c) => c.slug as string);
const categoryAliases: Record<string, string> = {
  businesses: "sme",
  local: "local-business",
  business: "sme",
};

/** Routes discover/:param to either category or profile page */
const DiscoverResolver = () => {
  const { param } = useParams<{ param: string }>();
  const resolved = param ? categoryAliases[param] || param : "";

  if (validCategories.includes(resolved)) {
    return <DiscoverCategory />;
  }

  return <DiscoverProfile />;
};

export default DiscoverResolver;
