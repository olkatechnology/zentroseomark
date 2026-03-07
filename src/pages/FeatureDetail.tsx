import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Calendar, Clock, Users } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Testimonials from "@/components/shared/Testimonials";
import RelatedLinks from "@/components/shared/RelatedLinks";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { featuresData } from "@/data/features";
import { getPostsByFeature } from "@/data/blog-posts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/lib/date-utils";

const FeatureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = slug ? featuresData[slug] : null;
  const { t, i18n } = useTranslation("pages");

  if (!feature) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">{t("featureNotFound")}</h1>
        </div>
      </Layout>
    );
  }

  const Icon = feature.icon;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: feature.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: feature.name,
    description: feature.tagline,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://zentroseo.com/features/${feature.slug}/`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <Layout>
      <Helmet>
        <title>{feature.metaTitle}</title>
        <meta name="description" content={feature.metaDescription} />
        <link rel="canonical" href={`https://zentroseo.com/features/${feature.slug}/`} />
        <meta property="og:title" content={feature.metaTitle} />
        <meta property="og:description" content={feature.metaDescription} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
      </Helmet>

      <Breadcrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("features"), href: "/features/" },
          { label: feature.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
              {feature.name}
            </h1>
            <p className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-6">{feature.tagline}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {feature.trustChips.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> {chip}
                </span>
              ))}
            </div>
            <a href="https://app.zentroseo.com/signup?flow=direct">
              <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 text-base">
                {t("tryFeatureFree", { name: feature.name })} <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      {feature.overview && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">{t("whatIs", { name: feature.name })}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              {feature.overview.split('\n\n').map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Capabilities */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">{t("keyCapabilities")}</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t("keyCapabilitiesSubtitle", { name: feature.name })}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {feature.capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                  <CapIcon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">{t("howItWorks")}</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {feature.steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{i + 1}</div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">{t("whyUse", { name: feature.name })}</h2>
              <ul className="space-y-3">
                {feature.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-8 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <Icon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">{t("dashboardPreview", { name: feature.name })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {feature.useCases && feature.useCases.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">{t("realWorldUseCases")}</h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
              {t("useCasesSubtitle", { name: feature.name })}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {feature.useCases.map((uc, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="p-6 rounded-xl border border-border bg-card hover:shadow-card transition-shadow">
                  <h3 className="font-display font-semibold mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who Is It For */}
      {feature.whoIsItFor && feature.whoIsItFor.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">{t("whoIsItFor", { name: feature.name })}</h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">{t("whoIsItForSubtitle")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {feature.whoIsItFor.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="p-6 rounded-xl border border-border bg-card hover:shadow-card transition-shadow text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold mb-2">{w.persona}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials
        testimonials={[
          { quote: t("featureTestimonial1", { name: feature.name, defaultValue: `${feature.name} transformed how we approach SEO. The insights are actionable and the interface is incredibly intuitive.` }), name: "Alex Thompson", role: "Marketing Director", company: "GrowthHub" },
          { quote: t("featureTestimonial2", { name: feature.name, defaultValue: `We saw measurable improvements within weeks of using ${feature.name}. It's now an essential part of our toolkit.` }), name: "Maria Santos", role: "SEO Lead", company: "Digital First Agency" },
        ]}
      />

      <RelatedLinks title={t("relatedTools")} links={feature.relatedTools} />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">{t("faq")}</h2>
          <Accordion type="single" collapsible className="w-full">
            {feature.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Blog Posts */}
      {slug && (() => {
        const relatedPosts = getPostsByFeature(slug);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="font-display text-3xl font-bold text-center mb-4">{t("relatedReading")}</h2>
              <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8">
                {t("relatedReadingSubtitle", { name: feature.name })}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    to={`/resources/blog/${post.slug}/`}
                    className="group block rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all overflow-hidden bg-card"
                  >
                    {post.featuredImage && (
                      <img src={post.featuredImage} alt={post.title} className="w-full h-36 object-cover" loading="lazy" />
                    )}
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                      <h3 className="font-display font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(post.date, i18n.language)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <CTASection />
    </Layout>
  );
};

export default FeatureDetail;
