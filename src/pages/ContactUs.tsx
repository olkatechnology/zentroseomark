import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact ZentroSEO – Let's Talk SEO</title>
        <meta name="description" content="Have questions, feedback, or partnership inquiries? Reach out to the ZentroSEO team." />
        <link rel="canonical" href="https://zentroseo.com/company/contact-us/" />
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company", href: "/company/" }, { label: "Contact Us" }]} />

      <section className="bg-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Contact Us</h1>
            <p className="text-hero-muted text-lg max-w-xl mx-auto">We're here to help your SEO success. Reach out and we'll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} required />
                </div>
                <Button type="submit" className="bg-gradient-cta hover:opacity-90 text-primary-foreground w-full sm:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
              {[
                { icon: Mail, title: "Email", detail: "hello@zentroseo.com" },
                { icon: Clock, title: "Response Time", detail: "Within 24 hours" },
                { icon: MessageSquare, title: "Support Hours", detail: "Mon–Fri, 9am–6pm WAT" },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                    <ItemIcon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
