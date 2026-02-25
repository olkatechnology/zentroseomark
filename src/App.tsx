import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page configs matching existing WordPress slugs
const pages = [
  { path: "/solutions/", metaTitle: "SEO Solutions by ZentroSEO – Tailored for Your Industry", metaDescription: "ZentroSEO offers targeted SEO solutions for agencies, content teams, e-commerce, local businesses, and startups.", heading: "SEO Solutions for Every Business", description: "Find the SEO solution tailored for your industry and team size." },
  { path: "/solutions/for-agencies/", metaTitle: "SEO Tools for Agencies – Scale with White Label SEO", metaDescription: "Empower your agency with scalable audits, client reporting, white label dashboards, and automated SEO fixes from ZentroSEO.", heading: "For Agencies", description: "Scale your agency with white-label SEO tools and automated reporting." },
  { path: "/solutions/for-startups/", metaTitle: "SEO for Startups – Launch with Organic Growth", metaDescription: "Build visibility from day one with fast audits, topic planning, and easy fixes — all tailored for lean startup teams.", heading: "For Startups", description: "Launch with organic growth from day one." },
  { path: "/solutions/for-e-commerce/", metaTitle: "E-commerce SEO – Boost Rankings, Sales & Conversions", metaDescription: "Optimize product pages, fix crawl issues, and drive traffic with structured SEO workflows built for online stores.", heading: "For E-commerce", description: "Boost your online store rankings and conversions." },
  { path: "/solutions/for-content-creators/", metaTitle: "SEO for Content Creators – Rank Your Work, Faster", metaDescription: "Create content that ranks with keyword tools, semantic optimization, and AI-powered metadata generation from ZentroSEO.", heading: "For Content Creators", description: "Rank your content faster with AI-powered SEO tools." },
  { path: "/company/", metaTitle: "About ZentroSEO – Company, Mission & Innovation", metaDescription: "Learn more about ZentroSEO's mission, values, and our journey in building an intelligent, all-in-one SEO platform.", heading: "We're Making SEO Smart & Simple", description: "Learn about our mission to democratize SEO." },
  { path: "/company/about-us/", metaTitle: "Who We Are – Meet the Team Behind ZentroSEO", metaDescription: "Meet the minds behind ZentroSEO. We're on a mission to democratize SEO with smart, user-friendly tools.", heading: "About ZentroSEO", description: "Meet the team behind the platform." },
  { path: "/company/contact-us/", metaTitle: "Contact ZentroSEO – Let's Talk SEO", metaDescription: "Have questions, feedback, or partnership inquiries? Reach out to the ZentroSEO team.", heading: "Contact Us", description: "We're here to help your SEO success." },
  { path: "/resources/", metaTitle: "SEO Resources Library – Guides, Templates & Tutorials", metaDescription: "Access free SEO resources including guides, checklists, templates, and walkthroughs to grow your traffic.", heading: "SEO Resources", description: "Guides, templates, and tutorials to grow your traffic." },
  { path: "/resources/blog/", metaTitle: "ZentroSEO Blog – SEO Tips, Strategies & Case Studies", metaDescription: "Read the latest on SEO audits, ranking strategies, semantic content, and AI tools.", heading: "Blog", description: "SEO tips, strategies, and case studies." },
  { path: "/resources/help-center/", metaTitle: "ZentroSEO Help Center – Support, FAQs & Troubleshooting", metaDescription: "Get help with your ZentroSEO account, features, billing, and technical issues.", heading: "Help Center", description: "Support, FAQs, and troubleshooting." },
  { path: "/resources/case-studies/", metaTitle: "SEO Case Studies – Real Results with ZentroSEO", metaDescription: "See how real businesses improved rankings, traffic, and growth using ZentroSEO.", heading: "Case Studies", description: "Real results from real businesses." },
  { path: "/resources/documentation/", metaTitle: "Documentation - ZentroSEO", metaDescription: "Product documentation and guides for ZentroSEO.", heading: "Documentation", description: "Product docs and guides." },
  { path: "/resources/seo-toolkit/", metaTitle: "Free SEO Toolkit – ZentroSEO", metaDescription: "Access free SEO tools and resources.", heading: "SEO Toolkit", description: "Free tools to boost your SEO." },
  { path: "/privacy-policy/", metaTitle: "Privacy Policy - ZentroSEO", metaDescription: "ZentroSEO's privacy policy.", heading: "Privacy Policy", description: "How we handle your data." },
  { path: "/terms-of-service/", metaTitle: "Terms of Service - ZentroSEO", metaDescription: "ZentroSEO's terms of service.", heading: "Terms of Service", description: "Our terms and conditions." },
  { path: "/refund-policy/", metaTitle: "Refund Policy - ZentroSEO", metaDescription: "ZentroSEO's refund policy.", heading: "Refund Policy", description: "Our refund terms." },
  // Feature sub-pages
  { path: "/features/zentrofix/", metaTitle: "ZentroFix – Instantly Fix Technical & Content SEO Errors with AI", metaDescription: "ZentroFix uses AI to detect and auto-correct critical SEO issues like Core Web Vitals, metadata, indexing, and broken links.", heading: "ZentroFix", description: "1-Click AI SEO fixer that auto-corrects critical issues." },
  { path: "/features/zentroaudit/", metaTitle: "ZentroAudit – Run Entity-Based SEO Audits in Seconds", metaDescription: "ZentroAudit analyzes your site using semantic SEO, topical depth, and entity coverage.", heading: "ZentroAudit", description: "Technical & on-page SEO audit powered by AI." },
  { path: "/features/zentrokeywords/", metaTitle: "ZentroKeywords – Semantic Keyword Research and Entity Topic Discovery", metaDescription: "Discover high-impact keywords based on entity associations, search intent, and topical clusters.", heading: "ZentroKeywords", description: "AI-powered keyword research tool." },
  { path: "/features/zentrorank/", metaTitle: "ZentroRank – Real-Time Keyword Rank Tracking Across Search Entities", metaDescription: "Track your keyword performance by device, location, and entity topics.", heading: "ZentroRank", description: "Real-time keyword rank tracker." },
  { path: "/features/zentrowrite/", metaTitle: "ZentroWrite – Create Entity-Rich SEO Content with AI", metaDescription: "Generate optimized blog posts, product pages, and meta content aligned with topical relevance.", heading: "ZentroWrite", description: "AI meta & content generator." },
  { path: "/features/zentrocompare/", metaTitle: "ZentroCompare – Identify SEO Gaps in Entity and Topic Coverage", metaDescription: "Analyze how competitors perform across search entities and topics.", heading: "ZentroCompare", description: "Competitor analysis tool." },
  { path: "/features/zentrobacklinks/", metaTitle: "ZentroBacklinks – Discover Backlinks That Build Entity Trust", metaDescription: "Analyze backlink profiles based on authority, topical relevance, and entity associations.", heading: "ZentroBacklinks", description: "Backlink analysis tool." },
  { path: "/features/zentromarkup/", metaTitle: "ZentroMarkup – Auto-Generate JSON-LD Schema for Entity Recognition", metaDescription: "Boost rich results and entity linking by generating and injecting schema.", heading: "ZentroMarkup", description: "Schema structured data tool." },
  { path: "/features/zentrowhite/", metaTitle: "ZentroWhite – Deliver Entity-Focused SEO Under Your Brand", metaDescription: "Provide clients with branded dashboards that deliver SEO results.", heading: "ZentroWhite", description: "White-label reporting." },
];

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
            {pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={
                  <PlaceholderPage
                    title={page.heading}
                    metaTitle={page.metaTitle}
                    metaDescription={page.metaDescription}
                    canonicalPath={page.path}
                    heading={page.heading}
                    description={page.description}
                  />
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
