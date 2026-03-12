import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Code2, BarChart3, ArrowRight, Wrench, ShieldCheck, Link2, HelpCircle, Keyboard, Bot, Type, FileCode2, Share2, Heading, BarChart, MapPin, Braces, Globe, Eye, LinkIcon, Sparkles, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/use-lang";
import { getCanonicalUrl } from "@/lib/lang-utils";
import LocalizedLink from "@/components/LocalizedLink";

interface ToolCard {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

const tools: ToolCard[] = [
  {
    icon: Search,
    title: "Title & Meta Description Checker",
    description: "Check if your title tags and meta descriptions fit Google's SERP pixel limits with a live preview.",
    href: "/resources/seo-toolkit/title-meta-checker/",
  },
  {
    icon: Wrench,
    title: "Website Fix Scanner",
    description: "Scan any website for critical SEO issues and get prioritized fix recommendations.",
    href: "/resources/seo-toolkit/website-fix-scanner/",
  },
  {
    icon: ShieldCheck,
    title: "E-E-A-T Content Analyzer",
    description: "Analyze content for Google's Experience, Expertise, Authoritativeness & Trustworthiness signals.",
    href: "/resources/seo-toolkit/eeat-analyzer/",
  },
  {
    icon: HelpCircle,
    title: "People Also Ask Extractor",
    description: "Extract 'People Also Ask' questions from Google for any keyword and country.",
    href: "/resources/seo-toolkit/paa-extractor/",
  },
  {
    icon: Link2,
    title: "Internal Linking Finder",
    description: "Discover internal linking opportunities with anchor text recommendations based on NLP analysis.",
    href: "/resources/seo-toolkit/internal-link-finder/",
  },
  {
    icon: Keyboard,
    title: "Autocomplete Keyword Finder",
    description: "Discover autocomplete keyword suggestions from Google, YouTube, and more.",
    href: "/resources/seo-toolkit/autocomplete-keyword-finder/",
  },
  {
    icon: Type,
    title: "Word Counter & Text Analyzer",
    description: "Count words, characters, sentences, and estimate reading time for your content.",
    href: "/resources/seo-toolkit/word-counter/",
  },
  {
    icon: FileCode2,
    title: "Robots.txt Generator",
    description: "Generate a properly formatted robots.txt file with user-agent rules, sitemap, and crawl delay.",
    href: "/resources/seo-toolkit/robots-txt-generator/",
  },
  {
    icon: Share2,
    title: "Open Graph Meta Tag Generator",
    description: "Generate OG and Twitter Card meta tags with a live social share preview.",
    href: "/resources/seo-toolkit/open-graph-generator/",
  },
  {
    icon: Heading,
    title: "Heading Structure Analyzer",
    description: "Analyze H1–H6 heading hierarchy for SEO best practices and accessibility issues.",
    href: "/resources/seo-toolkit/heading-analyzer/",
  },
  {
    icon: BarChart,
    title: "Keyword Density Checker",
    description: "Analyze keyword frequency and density in your content to avoid over-optimization.",
    href: "/resources/seo-toolkit/keyword-density-checker/",
  },
  {
    icon: MapPin,
    title: "Sitemap XML Validator",
    description: "Validate your sitemap.xml for errors, duplicates, and missing elements.",
    href: "/resources/seo-toolkit/sitemap-validator/",
  },
  {
    icon: Braces,
    title: "Schema Markup Generator (JSON-LD)",
    description: "Generate structured data for Articles, FAQs, Products, Local Businesses, and more.",
    href: "/resources/seo-toolkit/schema-markup-generator/",
  },
  {
    icon: Globe,
    title: "Hreflang Tag Generator",
    description: "Generate hreflang tags for multilingual sites to serve the correct language version.",
    href: "/resources/seo-toolkit/hreflang-generator/",
  },
  {
    icon: Eye,
    title: "Google SERP Simulator",
    description: "Preview how your page appears in Google search results on desktop and mobile.",
    href: "/resources/seo-toolkit/serp-simulator/",
  },
  {
    icon: LinkIcon,
    title: "SEO-Friendly URL Slug Generator",
    description: "Convert titles to clean, optimized URL slugs with stop-word removal.",
    href: "/resources/seo-toolkit/slug-generator/",
  },
  {
    icon: Sparkles,
    title: "AI Blog Title Generator",
    description: "Generate 10 click-worthy, SEO-optimized blog titles powered by AI.",
    href: "/resources/seo-toolkit/ai-blog-title-generator/",
  },
  {
    icon: FileText,
    title: "AI Meta Description Generator",
    description: "Generate compelling meta descriptions from your page title or content using AI.",
    href: "/resources/seo-toolkit/ai-meta-description-generator/",
  },
];

const SEOToolkit = () => {
  const { t } = useTranslation("pages");
  const { lang } = useLang();

  return (
    <Layout>
      <Helmet>
        <title>{t("seoToolkitMetaTitle")}</title>
        <meta name="description" content={t("seoToolkitMetaDesc")} />
        <link rel="canonical" href={getCanonicalUrl(lang, "/resources/seo-toolkit/")} />
      </Helmet>

      <Breadcrumbs items={[{ label: t("home"), href: "/" }, { label: t("resources"), href: "/resources/" }, { label: t("seoToolkitHeroTitle") }]} />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">{t("seoToolkitHeroTitle")}</h1>
          <p className="text-hero-muted text-lg max-w-xl mx-auto">{t("seoToolkitHeroSubtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, i) => {
              const TIcon = tool.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-border flex flex-col relative"
                >
                  {tool.comingSoon && (
                    <Badge variant="secondary" className="absolute top-3 right-3 text-xs">
                      Coming Soon
                    </Badge>
                  )}
                  <TIcon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-display text-lg font-bold mb-2">{tool.title}</h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{tool.description}</p>
                  {tool.comingSoon ? (
                    <Button disabled className="w-full text-sm" variant="outline">
                      Coming Soon
                    </Button>
                  ) : (
                    <LocalizedLink to={tool.href}>
                      <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full text-sm">
                        Use Free Tool <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </LocalizedLink>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SEOToolkit;
