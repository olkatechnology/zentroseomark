import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Zap, Users, Globe, MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Zap, title: "Innovation First", description: "We push boundaries with AI-driven SEO technology that stays ahead of the curve." },
  { icon: Heart, title: "User Obsessed", description: "Every decision starts with the question: how does this help our users rank better?" },
  { icon: Users, title: "Collaborative Culture", description: "We believe the best ideas come from diverse perspectives working together." },
  { icon: Globe, title: "Remote-First", description: "Work from anywhere. We trust our team to deliver excellence on their own terms." },
];

const openings = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer (UX/UI)", department: "Design", location: "Remote", type: "Full-time" },
  { title: "SEO Content Strategist", department: "Marketing", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", department: "Support", location: "Remote (EU)", type: "Full-time" },
  { title: "Data Scientist – NLP & Search", department: "AI/ML", location: "Remote", type: "Full-time" },
];

const Careers = () => (
  <Layout>
    <Helmet>
      <title>Careers at ZentroSEO – Join Our Team</title>
      <meta name="description" content="Join the ZentroSEO team and help build the future of AI-powered SEO. Explore open positions and our company culture." />
      <link rel="canonical" href="https://zentroseo.com/company/careers/" />
      <meta property="og:title" content="Careers at ZentroSEO – Join Our Team" />
      <meta property="og:description" content="Join the ZentroSEO team and help build the future of AI-powered SEO." />
      <meta property="og:url" content="https://zentroseo.com/company/careers/" />
    </Helmet>

    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company", href: "/company/" }, { label: "Careers" }]} />

    {/* Hero */}
    <section className="bg-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4"
        >
          Join the ZentroSEO Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-hero-muted text-lg"
        >
          We're on a mission to make professional SEO accessible to everyone. Help us build AI-powered tools that thousands of businesses rely on every day.
        </motion.p>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-display font-bold">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                </div>
              </div>
              <Link to="/company/contact-us/">
                <Button size="sm" variant="outline">Apply</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-display text-2xl font-bold mb-3">Don't See the Right Role?</h2>
        <p className="text-muted-foreground mb-6">We're always looking for talented people. Send us your resume and tell us how you'd contribute.</p>
        <Link to="/company/contact-us/">
          <Button>Get in Touch</Button>
        </Link>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Careers;
