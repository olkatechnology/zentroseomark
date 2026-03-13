import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LangLayout from "./components/LangLayout";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import FeatureDetail from "./pages/FeatureDetail";
import SolutionHub from "./pages/SolutionHub";
import SolutionDetail from "./pages/SolutionDetail";
import CompanyHub from "./pages/CompanyHub";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import ResourcesHub from "./pages/ResourcesHub";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation";
import SEOToolkit from "./pages/SEOToolkit";
import TitleMetaChecker from "./pages/tools/TitleMetaChecker";
import WebsiteFixScanner from "./pages/tools/WebsiteFixScanner";
import EEATAnalyzer from "./pages/tools/EEATAnalyzer";
import PAAExtractor from "./pages/tools/PAAExtractor";
import InternalLinkFinder from "./pages/tools/InternalLinkFinder";
import AutocompleteKeywordFinder from "./pages/tools/AutocompleteKeywordFinder";
import WordCounter from "./pages/tools/WordCounter";
import RobotsTxtGenerator from "./pages/tools/RobotsTxtGenerator";
import OpenGraphGenerator from "./pages/tools/OpenGraphGenerator";
import HeadingAnalyzer from "./pages/tools/HeadingAnalyzer";
import KeywordDensityChecker from "./pages/tools/KeywordDensityChecker";
import SitemapValidator from "./pages/tools/SitemapValidator";
import SchemaMarkupGenerator from "./pages/tools/SchemaMarkupGenerator";
import HreflangTagGenerator from "./pages/tools/HreflangTagGenerator";
import SERPSimulator from "./pages/tools/SERPSimulator";
import SlugGenerator from "./pages/tools/SlugGenerator";
import AIBlogTitleGenerator from "./pages/tools/AIBlogTitleGenerator";
import AIMetaDescriptionGenerator from "./pages/tools/AIMetaDescriptionGenerator";
import LegalPage from "./pages/LegalPage";
import BlogPostPage from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import AuthorProfile from "./pages/AuthorProfile";
import Sitemap from "./pages/Sitemap";
import Glossary from "./pages/Glossary";
import GlossaryTerm from "./pages/GlossaryTerm";
import TopicsHub from "./pages/TopicsHub";
import TopicDetail from "./pages/TopicDetail";
import TopicalMap from "./pages/TopicalMap";
import GuidesHub from "./pages/GuidesHub";
import GuideDetail from "./pages/GuideDetail";
import ComparisonsHub from "./pages/ComparisonsHub";
import ComparisonDetail from "./pages/ComparisonDetail";
import ScanPage from "./pages/ScanPage";
import ResultsPage from "./pages/ResultsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** All app routes — shared between English (no prefix) and localized (/:lang prefix) */
const AppRoutes = () => (
  <>
    <Route index element={<Index />} />
    <Route path="pricing/" element={<Pricing />} />
    <Route path="features/" element={<Features />} />
    <Route path="features/:slug/" element={<FeatureDetail />} />
    <Route path="solutions/" element={<SolutionHub />} />
    <Route path="solutions/:slug/" element={<SolutionDetail />} />
    <Route path="company/" element={<CompanyHub />} />
    <Route path="company/about-us/" element={<AboutUs />} />
    <Route path="company/careers/" element={<Careers />} />
    <Route path="company/contact-us/" element={<ContactUs />} />
    <Route path="company/team/:slug/" element={<AuthorProfile />} />
    <Route path="resources/" element={<ResourcesHub />} />
    <Route path="resources/blog/" element={<Blog />} />
    <Route path="resources/blog/category/:category/" element={<BlogCategory />} />
    <Route path="resources/blog/:slug/" element={<BlogPostPage />} />
    <Route path="resources/help-center/" element={<HelpCenter />} />
    <Route path="resources/case-studies/" element={<CaseStudies />} />
    <Route path="resources/documentation/" element={<Documentation />} />
    <Route path="resources/seo-toolkit/" element={<SEOToolkit />} />
    <Route path="resources/seo-toolkit/title-meta-checker/" element={<TitleMetaChecker />} />
    <Route path="resources/seo-toolkit/website-fix-scanner/" element={<WebsiteFixScanner />} />
    <Route path="resources/seo-toolkit/eeat-analyzer/" element={<EEATAnalyzer />} />
    <Route path="resources/seo-toolkit/paa-extractor/" element={<PAAExtractor />} />
    <Route path="resources/seo-toolkit/internal-link-finder/" element={<InternalLinkFinder />} />
    <Route path="resources/seo-toolkit/autocomplete-keyword-finder/" element={<AutocompleteKeywordFinder />} />
    <Route path="resources/seo-toolkit/word-counter/" element={<WordCounter />} />
    <Route path="resources/seo-toolkit/robots-txt-generator/" element={<RobotsTxtGenerator />} />
    <Route path="resources/seo-toolkit/open-graph-generator/" element={<OpenGraphGenerator />} />
    <Route path="resources/seo-toolkit/heading-analyzer/" element={<HeadingAnalyzer />} />
    <Route path="resources/seo-toolkit/keyword-density-checker/" element={<KeywordDensityChecker />} />
    <Route path="resources/seo-toolkit/sitemap-validator/" element={<SitemapValidator />} />
    <Route path="resources/seo-toolkit/schema-markup-generator/" element={<SchemaMarkupGenerator />} />
    <Route path="resources/seo-toolkit/hreflang-generator/" element={<HreflangTagGenerator />} />
    <Route path="resources/seo-toolkit/serp-simulator/" element={<SERPSimulator />} />
    <Route path="resources/seo-toolkit/slug-generator/" element={<SlugGenerator />} />
    <Route path="resources/seo-toolkit/ai-blog-title-generator/" element={<AIBlogTitleGenerator />} />
    <Route path="resources/seo-toolkit/ai-meta-description-generator/" element={<AIMetaDescriptionGenerator />} />
    <Route path="resources/glossary/" element={<Glossary />} />
    <Route path="resources/glossary/:slug/" element={<GlossaryTerm />} />
    <Route path="resources/topics/" element={<TopicsHub />} />
    <Route path="resources/topics/:slug/" element={<TopicDetail />} />
    <Route path="resources/topics/map/" element={<TopicalMap />} />
    <Route path="resources/guides/" element={<GuidesHub />} />
    <Route path="resources/guides/:slug/" element={<GuideDetail />} />
    <Route path="resources/comparisons/" element={<ComparisonsHub />} />
    <Route path="resources/comparisons/:slug/" element={<ComparisonDetail />} />
    <Route path="privacy-policy/" element={<LegalPage slug="privacy-policy" />} />
    <Route path="terms-of-service/" element={<LegalPage slug="terms-of-service" />} />
    <Route path="refund-policy/" element={<LegalPage slug="refund-policy" />} />
    <Route path="sitemap/" element={<Sitemap />} />
    <Route path="scan/" element={<ScanPage />} />
    <Route path="results/" element={<ResultsPage />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Localized routes: /de/pricing/, /es/features/ etc. */}
            <Route path="/:lang/*" element={<LangLayout />}>
              {AppRoutes()}
            </Route>
            {/* English (default) routes: /pricing/, /features/ etc. */}
            <Route path="/*" element={<LangLayout />}>
              {AppRoutes()}
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
