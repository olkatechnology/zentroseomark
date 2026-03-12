import { Outlet, useParams, useLocation, Navigate } from "react-router-dom";
import { isNonEnglishLang } from "@/lib/lang-utils";
import { useLang } from "@/hooks/use-lang";

/**
 * Layout route that handles the optional /:lang prefix.
 * 
 * The router is structured as:
 *   <Route path="/:lang/*" element={<LangLayout />}>  ← for /de/pricing/, /es/features/ etc.
 *   <Route path="/*" element={<LangLayout />}>         ← for /pricing/, /features/ etc. (English)
 * 
 * This component syncs i18n language from the URL and renders children via <Outlet />.
 */
const LangLayout = () => {
  // useLang handles syncing i18n from URL
  useLang();

  return <Outlet />;
};

export default LangLayout;
