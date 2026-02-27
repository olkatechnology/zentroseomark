import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import FeatureDetail from "./pages/FeatureDetail";
import SolutionHub from "./pages/SolutionHub";
import SolutionDetail from "./pages/SolutionDetail";
import CompanyHub from "./pages/CompanyHub";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ResourcesHub from "./pages/ResourcesHub";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation";
import SEOToolkit from "./pages/SEOToolkit";
import LegalPage from "./pages/LegalPage";
import BlogPostPage from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import AuthorProfile from "./pages/AuthorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/features/" element={<Features />} />
            <Route path="/features/:slug/" element={<FeatureDetail />} />
            <Route path="/solutions/" element={<SolutionHub />} />
            <Route path="/solutions/:slug/" element={<SolutionDetail />} />
            <Route path="/company/" element={<CompanyHub />} />
            <Route path="/company/about-us/" element={<AboutUs />} />
            <Route path="/company/contact-us/" element={<ContactUs />} />
            <Route path="/resources/" element={<ResourcesHub />} />
            <Route path="/resources/blog/" element={<Blog />} />
            <Route path="/resources/blog/category/:category/" element={<BlogCategory />} />
            <Route path="/resources/blog/:slug/" element={<BlogPostPage />} />
            <Route path="/company/team/:slug/" element={<AuthorProfile />} />
            <Route path="/resources/help-center/" element={<HelpCenter />} />
            <Route path="/resources/case-studies/" element={<CaseStudies />} />
            <Route path="/resources/documentation/" element={<Documentation />} />
            <Route path="/resources/seo-toolkit/" element={<SEOToolkit />} />
            <Route path="/privacy-policy/" element={<LegalPage slug="privacy-policy" />} />
            <Route path="/terms-of-service/" element={<LegalPage slug="terms-of-service" />} />
            <Route path="/refund-policy/" element={<LegalPage slug="refund-policy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
