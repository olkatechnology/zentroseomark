import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { teamMembers } from "@/data/team";

const stats = [
  { value: "100+", label: "Websites Optimized" },
  { value: "2500+", label: "SEO Issues Fixed" },
  { value: "340%", label: "Average Traffic Growth" },
  { value: "99.9%", label: "Uptime SLA" },
];

const timeline = [
  { year: "2021", title: "The Beginning", description: "Founded by SEO experts frustrated with manual optimization processes. The spark that started it all." },
  { year: "2022", title: "First Tools", description: "Launched ZentroAudit and ZentroFix — the first AI-powered SEO audit and fix tools in our toolkit." },
  { year: "2023", title: "Platform Growth", description: "Added keyword research, rank tracking, and content tools. Reached 50+ active websites on the platform." },
  { year: "2024", title: "Semantic SEO Focus", description: "Integrated entity-based SEO, knowledge graph analysis, and structured data automation into the platform." },
  { year: "2025", title: "Scaling Up", description: "100+ websites, 9 core tools, and a growing community of SEO-empowered businesses worldwide." },
];

const values = [
  { icon: Heart, title: "Customer-First", description: "Every decision we make starts with how it benefits our customers and their SEO success." },
  { icon: Zap, title: "Innovation", description: "We continuously push the boundaries of what's possible with AI-powered SEO automation." },
  { icon: Shield, title: "Reliability", description: "Our platform is built for enterprise-grade reliability with 99.9% uptime guarantee." },
  { icon: Target, title: "Collaboration", description: "We believe in the power of teamwork, both within our company and with our customers." },
];

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>About ZentroSEO – Revolutionizing SEO with AI Innovation</title>
        <meta name="description" content="Meet the minds behind ZentroSEO. We're on a mission to democratize SEO through intelligent automation for businesses of all sizes." />
        <link rel="canonical" href="https://zentroseo.com/company/about-us/" />
        <meta property="og:title" content="About ZentroSEO – Revolutionizing SEO with AI Innovation" />
        <meta property="og:description" content="Meet the minds behind ZentroSEO. We're on a mission to democratize SEO through intelligent automation." />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zentroseo.com/og-default.png" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company", href: "/company/" }, { label: "About Us" }]} />

      {/* Hero */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">About ZentroSEO</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-5 leading-tight">
              Revolutionizing SEO<br className="hidden md:block" /> with AI Innovation
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              We're on a mission to make SEO accessible, automated, and incredibly effective for businesses of all sizes through cutting-edge artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that effective SEO shouldn't require a team of experts or months of manual work. Our mission is to democratize search engine optimization through intelligent automation, making it possible for any business to achieve top search rankings.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            By combining advanced AI with deep SEO expertise, we're building the future where websites automatically optimize themselves, fix critical issues, and continuously improve their search performance without human intervention.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-xl bg-card border border-border">
                  <VIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">Our Journey</h2>
            <p className="text-muted-foreground">From startup to industry leader</p>
          </div>
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

      {/* Team */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">Meet Our Team</h2>
            <p className="text-muted-foreground">The brilliant minds behind ZentroSEO's AI-powered SEO automation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-muted"
                  loading="lazy"
                />
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} on LinkedIn`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} on X`}>
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
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
