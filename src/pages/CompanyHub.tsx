import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Target, Rocket, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team";

const stats = [
  { value: "100+", label: "Websites Optimized" },
  { value: "2,500+", label: "SEO Issues Fixed" },
  { value: "340%", label: "Avg. Traffic Growth" },
  { value: "99.9%", label: "Platform Uptime" },
];

const values = [
  { icon: Lightbulb, title: "Innovative", description: "We leverage the latest advancements in AI and machine learning to create tools that stay ahead of search engine algorithms." },
  { icon: Zap, title: "Simplicity", description: "SEO shouldn't require a PhD. We build tools that anyone can use to get expert-level results, regardless of technical skill." },
  { icon: Target, title: "Accuracy", description: "Our recommendations are based on real data, proven methodologies, and entity-based SEO principles — not guesswork." },
  { icon: Rocket, title: "Empowerment", description: "We give businesses the tools and knowledge to take control of their own SEO, reducing dependence on expensive agencies." },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@zentroseo.com", href: "mailto:hello@zentroseo.com" },
  { icon: Phone, label: "Phone", value: "+1 281 7290 300", href: "tel:+12817290300" },
  { icon: MapPin, label: "Address", value: "Sheridan, WY, United States", href: undefined },
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

      {/* Hero */}
      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
              We're Making SEO Smart & Simple
            </h1>
            <p className="text-hero-muted text-lg max-w-2xl mx-auto">
              The journey began in 2021, and now, ZentroSEO is on a mission to democratize SEO through AI automation. We believe every business deserves to compete and win in search results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story + Stats */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
            <p>
              ZentroSEO was founded in 2021 by{" "}
              <Link to="/company/team/tomisin-sode/" className="text-primary hover:underline font-medium">Tomisin Sode</Link>{" "}
              and{" "}
              <Link to="/company/team/olayinka-olayokun/" className="text-primary hover:underline font-medium">Olayinka Olayokun</Link>,
              two professionals frustrated by the complexity and cost of existing SEO tools. Every tool they tried only identified problems but never fixed them — leaving businesses stuck with reports they couldn't act on.
            </p>
            <p>
              They envisioned a platform powered by AI that doesn't just find SEO issues — it automatically fixes them. A tool built for marketers, bloggers, and small business owners who shouldn't need hours of tutorials or enterprise budgets to compete in organic search.
            </p>
            <p>
              Today, ZentroSEO helps thousands of businesses across agencies, startups, e-commerce stores, and content creators worldwide take control of their SEO with intelligent automation, entity-based strategies, and real-time insights.
            </p>
          </div>

          {/* Stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Mission statement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To democratize SEO through AI automation — making professional-grade search optimization accessible to every business, regardless of size or technical expertise.
            </p>
          </motion.div>

          <h3 className="font-display text-2xl font-bold text-center mb-10">Our Values</h3>
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
                  <h4 className="font-display font-semibold mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">Meet the Founders</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            ZentroSEO is built by a passionate team of SEO experts and engineers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div key={member.authorSlug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <Link to={`/company/team/${member.authorSlug}/`} className="hover:underline">
                      <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                    </Link>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/company/about-us/">
              <Button variant="outline">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Help us build the future of SEO automation. We're always looking for talented people who share our passion for making SEO accessible to everyone.
            </p>
            <Link to="/company/careers/">
              <Button>
                View All Open Positions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Get In Touch</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((item, i) => {
              const CIcon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href ? { href: item.href } : {};
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="text-center h-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <CIcon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <Wrapper {...wrapperProps} className="text-sm font-medium hover:text-primary transition-colors">
                        {item.value}
                      </Wrapper>
                    </CardContent>
                  </Card>
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

export default CompanyHub;
