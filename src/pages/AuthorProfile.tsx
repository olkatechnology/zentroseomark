import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { teamMembers } from "@/data/team";
import { getPostsByAuthor } from "@/data/blog-posts";

const AuthorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = teamMembers.find((m) => m.authorSlug === slug);

  if (!author) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Author Not Found</h1>
          <Link to="/company/about-us/" className="text-primary hover:underline">← Back to About Us</Link>
        </div>
      </Layout>
    );
  }

  const posts = getPostsByAuthor(author.name);

  const sameAs = [author.socials.linkedin, author.socials.twitter].filter(Boolean);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: `https://zentroseo.com/company/team/${author.authorSlug}/`,
    image: author.photo,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      "@type": "Organization",
      name: "ZentroSEO",
      url: "https://zentroseo.com",
    },
    sameAs,
  };

  return (
    <Layout>
      <Helmet>
        <title>{author.name} – {author.role} at ZentroSEO</title>
        <meta name="description" content={author.bio.slice(0, 155)} />
        <link rel="canonical" href={`https://zentroseo.com/company/team/${author.authorSlug}/`} />
        <meta property="og:title" content={`${author.name} – ${author.role} at ZentroSEO`} />
        <meta property="og:description" content={author.bio.slice(0, 155)} />
        <meta property="og:image" content={author.photo} />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company/" },
          { label: "About Us", href: "/company/about-us/" },
          { label: author.name },
        ]}
      />

      <section className="bg-hero py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={author.photo}
              alt={author.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-primary/20"
            />
            <div className="text-center sm:text-left">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-1">
                {author.name}
              </h1>
              <p className="text-primary font-medium mb-3">{author.role}</p>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {author.socials.linkedin && (
                  <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-hero-muted hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {author.socials.twitter && (
                  <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-hero-muted hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-4">About {author.name.split(" ")[0]}</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">{author.bio}</p>

          {posts.length > 0 && (
            <>
              <h2 className="font-display text-2xl font-bold mb-6">
                Articles by {author.name.split(" ")[0]} ({posts.length})
              </h2>
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/resources/blog/${post.slug}/`}
                    className="block p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all"
                  >
                    <span className="text-xs text-primary font-medium">{post.category}</span>
                    <h3 className="font-display font-semibold mt-1 mb-1">{post.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AuthorProfile;
