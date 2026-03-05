import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { useLang } from "@/hooks/use-lang";

/**
 * Drop-in replacement for react-router-dom's <Link>.
 * Automatically prepends the current language prefix to the `to` prop.
 *
 * Only modifies paths that start with "/". External URLs and hash links pass through.
 */
const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const { lp } = useLang();

    let resolvedTo = to;
    if (typeof to === "string" && to.startsWith("/")) {
      resolvedTo = lp(to);
    }

    return <Link ref={ref} to={resolvedTo} {...props} />;
  }
);

LocalizedLink.displayName = "LocalizedLink";

export default LocalizedLink;
