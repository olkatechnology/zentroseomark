import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import LocalizedLink from "./LocalizedLink";

const STORAGE_KEY = "cookie-consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => save({ essential: true, analytics: true, marketing: true });
  const rejectNonEssential = () => save({ essential: true, analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 animate-fade-in-up">
      <div className="bg-card border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <Cookie className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p>
                  We use cookies to improve your experience. Essential cookies are always active.
                  You can accept or reject non-essential cookies.{" "}
                  <LocalizedLink
                    to="/privacy-policy/"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    Cookie Policy
                  </LocalizedLink>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button variant="outline" size="sm" onClick={rejectNonEssential}>
                Reject Non-Essential
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Accept All
              </Button>
              <button
                onClick={rejectNonEssential}
                className="ml-1 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors md:hidden"
                aria-label="Dismiss cookie banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
