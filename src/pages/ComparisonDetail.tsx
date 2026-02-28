import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowLeftRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/home/CTASection";
import { comparisons } from "@/data/comparisons";
import { blogPosts } from "@/data/blog-posts";
import { featuresData } from "@/data/features";

function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0; let key = 0;
  const inline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []; const regex = /\[([^\]]*)\]\(([^)]+)\)|\*\*(.+?)\*\*|`([^`]+)`/g;
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

const ComparisonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const comp = comparisons.find((c) => c.slug === slug);

  if (!comp) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-display text-3xl font-bold mb-4">Comparison Not Found</h1><Link to="/resources/comparisons/" className="text-primary hover:underline">← Back to Comparisons</Link></div></Layout>);
  }

  const relatedPosts = comp.relatedBlogSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);
  const relatedFeats = comp.relatedFeatures.map((s) => featuresData[s]).filter(Boolean);
  const compUrl = `https://zentroseo.com/resources/comparisons/${comp.slug}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comp.title,
    description: comp.excerpt,
    url: compUrl,
    about: comp.entities.map((e) => ({ "@type": e.type || "Thing", name: e.name, ...(e.url && { url: e.url }) })),
    publisher: { "@type": "Organization", name: "ZentroSEO", url: "https://zentroseo.com" },
  };

  return (
    <Layout>
      <Helmet>
        <title>{comp.title} | ZentroSEO</title>
        <meta name="description" content={comp.excerpt} />
        <link rel="canonical" href={compUrl} />
        <meta property="og:title" content={comp.title} />
        <meta property="og:description" content={comp.excerpt} />
        <meta property="og:url" content={compUrl} />
        <meta property="og:image" content="https://zentroseo.com/og-default.png" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Comparisons", href: "/resources/comparisons/" }, { label: comp.title }]} />

      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/resources/comparisons/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Comparisons
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">{comp.category}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">{comp.title}</h1>

          {/* Quick comparison cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-xl border border-border bg-card">
              <h2 className="font-display font-bold mb-2">{comp.itemA.name}</h2>
              <p className="text-sm text-muted-foreground">{comp.itemA.description}</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <h2 className="font-display font-bold mb-2">{comp.itemB.name}</h2>
              <p className="text-sm text-muted-foreground">{comp.itemB.description}</p>
            </div>
          </div>

          <div className="prose-custom">{renderMarkdown(comp.content)}</div>

          {/* Verdict */}
          <div className="mt-10 p-6 rounded-xl bg-accent/50 border border-primary/20">
            <h2 className="font-display font-bold mb-2 flex items-center gap-2"><ArrowLeftRight className="w-5 h-5 text-primary" /> The Verdict</h2>
            <p className="text-muted-foreground">{comp.verdict}</p>
          </div>

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
              <h2 className="font-display text-xl font-bold mb-4">Related Tools</h2>
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

export default ComparisonDetail;
