import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Target, Zap, Heart, Globe, ArrowRight, TrendingUp, CheckCircle, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "100+", label: "Websites Optimized" },
  { value: "2,500+", label: "SEO Issues Fixed" },
  { value: "340%", label: "Avg. Traffic Growth" },
  { value: "99.9%", label: "Platform Uptime" },
];

const values = [
  { icon: Zap, title: "Simplicity First", description: "SEO shouldn't require a PhD. We build tools that non-techies can use to get expert-level results." },
  { icon: Target, title: "Entity-Driven SEO", description: "We believe in semantic SEO — building content and strategies around the entities search engines understand." },
  { icon: Heart, title: "User-Centric Design", description: "Every feature is designed around real workflows, not bloated dashboards. Clean, fast, intuitive." },
  { icon: Shield, title: "Transparency", description: "No black-box algorithms. We show you exactly why each recommendation matters and how it impacts rankings." },
];

const CompanyHub = () => {
  return (
    <Layout>
      <Helmet>
        <title>About ZentroSEO – Company, Mission & Innovation</title>
        <meta name="description" content="Learn more about ZentroSEO's mission, values, and our journey in building an intelligent, all-in-one SEO platform." />
        <link rel="canonical" href="https://zentroseo.com/company/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
              We're Making SEO Smart & Simple
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              ZentroSEO was founded in 2021 with a single mission: democratize SEO so every business — regardless of technical skill — can grow organically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>ZentroSEO started when our founders — frustrated by the complexity and cost of existing SEO tools — decided to build something better. Tools that a marketer, a blogger, or a small business owner could pick up and use without watching hours of tutorials.</p>
            <p>We combine entity-based SEO principles (pioneered by experts like Koray Tugberk) with AI automation to create a platform that doesn't just find problems — it fixes them. Our approach is rooted in semantic SEO, topical authority, and structured data, because that's how modern search engines actually work.</p>
            <p>Today, ZentroSEO powers SEO for over 100 websites across agencies, startups, e-commerce stores, and content creators worldwide.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <VIcon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            ZentroSEO is built by a passionate team of SEO experts and engineers.
          </p>
          <Link to="/company/about-us/">
            <Button variant="outline">
              Learn About Our Team <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CompanyHub;
