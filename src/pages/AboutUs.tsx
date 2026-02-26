import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, Users } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";

const timeline = [
  { year: "2021", title: "The Spark", description: "ZentroSEO founded with a vision to make SEO accessible to non-technical users." },
  { year: "2022", title: "First Tools", description: "Launched ZentroAudit and ZentroFix — the first AI-powered SEO audit and fix tools." },
  { year: "2023", title: "Platform Growth", description: "Added keyword research, rank tracking, and content tools. Reached 50+ active websites." },
  { year: "2024", title: "Semantic SEO Focus", description: "Integrated entity-based SEO, knowledge graph analysis, and structured data automation." },
  { year: "2025", title: "Scaling Up", description: "100+ websites, 9 core tools, and a growing community of SEO-empowered businesses." },
];

const team = [
  { name: "Tomisin Sode", role: "CEO & Co-Founder", bio: "Tomisin leads ZentroSEO's vision and strategy. With a background in digital marketing and a passion for making technology accessible, he drives the mission to democratize SEO for non-technical users worldwide." },
  { name: "Olayinka Olayokun", role: "CTO & Co-Founder", bio: "Olayinka leads the engineering team, architecting ZentroSEO's AI-powered SEO engine. His expertise in machine learning and web technologies ensures the platform delivers fast, accurate, and actionable SEO insights." },
];

const values = [
  { icon: Zap, title: "Simplicity", description: "Every feature should be usable without a manual." },
  { icon: Target, title: "Accuracy", description: "Data-driven recommendations backed by semantic analysis." },
  { icon: Heart, title: "Empathy", description: "We build for the non-techie who just wants their site to rank." },
  { icon: Shield, title: "Integrity", description: "Transparent algorithms, honest pricing, no lock-in." },
];

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>Who We Are – Meet the Team Behind ZentroSEO</title>
        <meta name="description" content="Meet the minds behind ZentroSEO. We're on a mission to democratize SEO with smart, user-friendly tools." />
        <link rel="canonical" href="https://zentroseo.com/company/about-us/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company", href: "/company/" }, { label: "About Us" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">About ZentroSEO</h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              We're on a mission to make SEO simple, smart, and accessible for every business — no technical expertise required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To empower every website owner — from solo bloggers to growing agencies — with AI-driven SEO tools that simplify the complex, automate the tedious, and deliver results that matter. We believe organic growth should be achievable for everyone, not just those with enterprise budgets and dedicated SEO teams.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-display font-bold text-primary text-lg">{t.year}</span>
                </div>
                <div className="w-px bg-border relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="pb-2">
                  <h3 className="font-display font-semibold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-4">
                  <VIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-sm mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutUs;
