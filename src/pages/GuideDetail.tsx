import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { guides } from "@/data/guides";
import { blogPosts } from "@/data/blog-posts";
import { featuresData } from "@/data/features";

// Same lightweight markdown renderer
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  const inline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const regex = /\[([^\]]*)\]\(([^)]+)\)|\*\*(.+?)\*\*|`([^`]+)`/g;
    let lastIndex = 0; let match: RegExpExecArray | null; let pk = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      if (match[1] !== undefined && match[2]) { const href = match[2]; const isExt = href.startsWith("http"); parts.push(isExt ? <a key={pk++} href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{match[1]}</a> : <Link key={pk++} to={href} className="text-primary hover:underline">{match[1]}</Link>); }
      else if (match[3]) parts.push(<strong key={pk++}>{match[3]}</strong>);
      else if (match[4]) parts.push(<code key={pk++} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{match[4]}</code>);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length ? parts : [text];
  };
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    if (line.trim().startsWith("```")) { const cl: string[] = []; i++; while (i < lines.length && !lines[i].trim().startsWith("```")) { cl.push(lines[i]); i++; } i++; elements.push(<pre key={key++} className="bg-muted rounded-lg p-4 overflow-x-auto my-4 text-sm"><code className="font-mono">{cl.join("\n")}</code></pre>); continue; }
    const hm = line.match(/^(#{1,6})\s+(.+)/);
    if (hm) { const l = hm[1].length; const Tag = `h${l}` as keyof JSX.IntrinsicElements; const cls: Record<number, string> = { 2: "text-2xl font-bold font-display mt-8 mb-3", 3: "text-xl font-semibold font-display mt-6 mb-2", 4: "text-lg font-semibold mt-4 mb-2" }; elements.push(<Tag key={key++} className={cls[l] || ""}>{hm[2].replace(/\*\*/g, "")}</Tag>); i++; continue; }
    if (line.includes("|") && line.trim().startsWith("|")) { const tl: string[] = []; while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) { tl.push(lines[i]); i++; } if (tl.length >= 2) { const pr = (r: string) => r.split("|").filter(c => c.trim()).map(c => c.trim()); const h = pr(tl[0]); const d = tl.slice(2).map(pr); elements.push(<div key={key++} className="overflow-x-auto my-4"><table className="min-w-full border border-border rounded-lg text-sm"><thead><tr className="bg-muted">{h.map((c, ci) => <th key={ci} className="px-4 py-2 text-left font-semibold border-b border-border">{inline(c)}</th>)}</tr></thead><tbody>{d.map((r, ri) => <tr key={ri} className="border-b border-border last:border-0">{r.map((c, ci) => <td key={ci} className="px-4 py-2">{inline(c)}</td>)}</tr>)}</tbody></table></div>); continue; } }
    if (line.trim().match(/^[-*]\s+/)) { const items: string[] = []; while (i < lines.length && lines[i].trim().match(/^[-*]\s+/)) { items.push(lines[i].trim().replace(/^[-*]\s+/, "")); i++; } elements.push(<ul key={key++} className="list-disc pl-6 my-3 space-y-1.5 text-muted-foreground">{items.map((it, ii) => <li key={ii}>{inline(it)}</li>)}</ul>); continue; }
    if (line.trim().match(/^\d+\.\s+/)) { const items: string[] = []; while (i < lines.length && lines[i].trim().match(/^\d+\.\s+/)) { items.push(lines[i].trim().replace(/^\d+\.\s+/, "")); i++; } elements.push(<ol key={key++} className="list-decimal pl-6 my-3 space-y-1.5 text-muted-foreground">{items.map((it, ii) => <li key={ii}>{inline(it)}</li>)}</ol>); continue; }
    elements.push(<p key={key++} className="text-muted-foreground leading-relaxed my-3">{inline(line)}</p>);
    i++;
  }
  return elements;
}

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold mb-4">Guide Not Found</h1><Link to="/resources/guides/" className="text-primary hover:underline">← Back to Guides</Link></div></Layout>);
  }

  const relatedPosts = guide.relatedBlogSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedFeats = guide.relatedFeatures.map((s) => featuresData[s]).filter(Boolean);
  const guideUrl = `https://zentroseo.com/resources/guides/${guide.slug}/`;

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.excerpt,
    totalTime: `PT${parseInt(guide.estimatedTime)}M`,
    step: guide.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{guide.title} – SEO Guide | ZentroSEO</title>
        <meta name="description" content={guide.excerpt} />
        <link rel="canonical" href={guideUrl} />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.excerpt} />
        <meta property="og:url" content={guideUrl} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Guides", href: "/resources/guides/" }, { label: guide.title }]} />

      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/resources/guides/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Guides
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{guide.difficulty}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> {guide.estimatedTime}</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{guide.excerpt}</p>

          {/* Steps Overview */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-10 border border-border">
            <h2 className="font-display font-bold mb-4">Steps in this guide</h2>
            <ol className="space-y-3">
              {guide.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <p className="font-medium text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {guide.prerequisites.length > 0 && (
            <div className="mb-8">
              <h2 className="font-display font-bold mb-2">Prerequisites</h2>
              <ul className="space-y-1.5">
                {guide.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary shrink-0" /> {p}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose-custom">{renderMarkdown(guide.content)}</div>

          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">Related Reading</h2>
              <ul className="space-y-2">
                {relatedPosts.map((p) => p && <li key={p.slug}><Link to={`/resources/blog/${p.slug}/`} className="text-primary hover:underline text-sm">{p.title}</Link></li>)}
              </ul>
            </div>
          )}

          {relatedFeats.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-xl font-bold mb-4">Tools Used in This Guide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedFeats.map((f) => (
                  <Link key={f.slug} to={`/features/${f.slug}/`} className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all">
                    <h3 className="font-display font-semibold text-sm">{f.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{f.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </Layout>
  );
};

export default GuideDetail;
