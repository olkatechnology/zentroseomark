import React from "react";
import { Link } from "react-router-dom";

/** Generate a URL-friendly slug from heading text */
export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Extract ToC items from markdown content */
export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(md: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.+)/);
    if (m) {
      const text = m[2].replace(/\*\*/g, "");
      items.push({ id: slugify(text), text, level: m[1].length });
    }
  }
  return items;
}

/** Extract FAQ pairs (question-formatted H2s + first answer paragraph) */
export function extractFAQs(md: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const hMatch = lines[i].match(/^##\s+(.+\?)\s*$/);
    if (hMatch) {
      const question = hMatch[1].replace(/\*\*/g, "");
      let answer = "";
      for (let j = i + 1; j < lines.length; j++) {
        const l = lines[j].trim();
        if (l === "") continue;
        if (l.startsWith("#")) break;
        answer = l.replace(/\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").replace(/_(.+?)_/g, "$1").replace(/`([^`]+)`/g, "$1");
        break;
      }
      if (answer && answer.length > 20) {
        faqs.push({ question, answer: answer.slice(0, 300) });
      }
    }
  }
  return faqs;
}

/* ── Inline Markdown Parser ── */
function inline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]*)\]\(([^)]+)\)|\*\*(.+?)\*\*|_(.+?)_|`([^`]+)`/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let pk = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined && match[2]) {
      parts.push(
        <img key={pk++} src={match[2]} alt={match[1]} className="rounded-lg my-4 max-w-full" loading="lazy" />
      );
    } else if (match[3] !== undefined && match[4]) {
      const href = match[4];
      const isExternal = href.startsWith("http");
      parts.push(
        isExternal ? (
          <a key={pk++} href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{match[3]}</a>
        ) : (
          <Link key={pk++} to={href} className="text-primary hover:underline">{match[3]}</Link>
        )
      );
    } else if (match[5]) {
      parts.push(<strong key={pk++}>{match[5]}</strong>);
    } else if (match[6]) {
      parts.push(<em key={pk++}>{match[6]}</em>);
    } else if (match[7]) {
      parts.push(<code key={pk++} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{match[7]}</code>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length ? parts : [text];
}

/* ── Full Markdown Renderer ── */
export function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const rawElements: { level?: number; id?: string; node: React.ReactNode }[] = [];

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") { i++; continue; }

    // Code block
    if (line.trim().startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) { codeLines.push(lines[i]); i++; }
      i++;
      rawElements.push({ node: <pre key={key++} className="bg-muted rounded-lg p-4 overflow-x-auto my-4 text-sm"><code className="font-mono">{codeLines.join("\n")}</code></pre> });
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/\*\*/g, "");
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const id = level >= 2 && level <= 3 ? slugify(text) : undefined;
      const classes: Record<number, string> = {
        1: "text-3xl md:text-4xl font-bold font-display mt-8 mb-4",
        2: "text-2xl md:text-3xl font-bold font-display mt-8 mb-3",
        3: "text-xl md:text-2xl font-semibold font-display mt-6 mb-2",
        4: "text-lg font-semibold font-display mt-4 mb-2",
        5: "text-base font-semibold mt-3 mb-1",
        6: "text-sm font-semibold mt-2 mb-1",
      };
      rawElements.push({ level, id, node: <Tag key={key++} id={id} className={classes[level] || ""}>{text}</Tag> });
      i++;
      continue;
    }

    // Blockquote
    if (line.trim().startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) { quoteLines.push(lines[i].trim().slice(2)); i++; }
      rawElements.push({ node: (
        <blockquote key={key++} className="border-l-4 border-primary/40 pl-4 py-2 my-4 text-muted-foreground italic">
          {quoteLines.map((ql, qi) => (<p key={qi}>{inline(ql)}</p>))}
        </blockquote>
      ) });
      continue;
    }

    // Image (standalone)
    const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      rawElements.push({ node: <img key={key++} src={imgMatch[2]} alt={imgMatch[1]} className="rounded-lg my-6 max-w-full mx-auto" loading="lazy" /> });
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) { tableLines.push(lines[i]); i++; }
      if (tableLines.length >= 2) {
        const parseRow = (row: string) => row.split("|").filter((c) => c.trim() !== "").map((c) => c.trim());
        const headers = parseRow(tableLines[0]);
        const dataRows = tableLines.slice(2).map(parseRow);
        rawElements.push({ node: (
          <div key={key++} className="overflow-x-auto my-4">
            <table className="min-w-full border border-border rounded-lg text-sm">
              <thead><tr className="bg-muted">{headers.map((h, hi) => (<th key={hi} className="px-4 py-2 text-left font-semibold border-b border-border">{inline(h)}</th>))}</tr></thead>
              <tbody>{dataRows.map((row, ri) => (<tr key={ri} className="border-b border-border last:border-0">{row.map((cell, ci) => (<td key={ci} className="px-4 py-2">{inline(cell)}</td>))}</tr>))}</tbody>
            </table>
          </div>
        ) });
        continue;
      }
    }

    // Unordered list
    if (line.trim().match(/^[-*]\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^[-*]\s+/)) { items.push(lines[i].trim().replace(/^[-*]\s+/, "")); i++; }
      rawElements.push({ node: <ul key={key++} className="list-disc pl-6 my-3 space-y-1.5 text-muted-foreground">{items.map((item, ii) => (<li key={ii}>{inline(item)}</li>))}</ul> });
      continue;
    }

    // Ordered list
    if (line.trim().match(/^\d+\.\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s+/)) { items.push(lines[i].trim().replace(/^\d+\.\s+/, "")); i++; }
      rawElements.push({ node: <ol key={key++} className="list-decimal pl-6 my-3 space-y-1.5 text-muted-foreground">{items.map((item, ii) => (<li key={ii}>{inline(item)}</li>))}</ol> });
      continue;
    }

    // Horizontal rule
    if (line.trim().match(/^-{3,}$/)) { rawElements.push({ node: <hr key={key++} className="my-6 border-border" /> }); i++; continue; }

    // Paragraph
    rawElements.push({ node: <p key={key++} className="text-muted-foreground leading-relaxed my-3">{inline(line)}</p> });
    i++;
  }

  // Wrap H2 sections in <section> elements for semantic HTML
  let sectionKey = 0;
  for (let idx = 0; idx < rawElements.length; idx++) {
    const el = rawElements[idx];
    if (el.level === 2 && el.id) {
      const sectionChildren: React.ReactNode[] = [el.node];
      let j = idx + 1;
      while (j < rawElements.length && rawElements[j].level !== 2) {
        sectionChildren.push(rawElements[j].node);
        j++;
      }
      elements.push(
        <section key={`section-${sectionKey++}`} id={el.id} aria-labelledby={el.id}>
          {sectionChildren}
        </section>
      );
      idx = j - 1;
    } else {
      elements.push(el.node);
    }
  }

  return elements;
}
