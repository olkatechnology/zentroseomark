import React, { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { useLang } from "@/hooks/use-lang";
import { localizedPath } from "@/lib/lang-utils";

/* ── Category color palette ── */
const CATEGORY_FILLS: Record<string, { bg: string; stroke: string; text: string }> = {
  "Technical SEO":                    { bg: "#dbeafe", stroke: "#3b82f6", text: "#1e40af" },
  "On-Page SEO":                      { bg: "#d1fae5", stroke: "#10b981", text: "#065f46" },
  "Semantic SEO":                     { bg: "#ede9fe", stroke: "#8b5cf6", text: "#5b21b6" },
  "Keyword Research & Content Strategy": { bg: "#fef3c7", stroke: "#f59e0b", text: "#92400e" },
  "Link Building & Off-Page SEO":     { bg: "#ffe4e6", stroke: "#f43f5e", text: "#9f1239" },
  "Local & E-commerce SEO":           { bg: "#ccfbf1", stroke: "#14b8a6", text: "#115e59" },
  "SEO Tools & AI":                   { bg: "#e0e7ff", stroke: "#6366f1", text: "#3730a3" },
};
const DEFAULT_FILL = { bg: "#f3f4f6", stroke: "#6b7280", text: "#374151" };

/* ── Layout constants ── */
const SVG_W = 1100;
const SVG_H = 800;
const CENTER_X = SVG_W / 2;
const CENTER_Y = SVG_H / 2;
const HUB_RADIUS = 260;
const SPOKE_RADIUS_MIN = 80;
const SPOKE_RADIUS_MAX = 140;
const HUB_NODE_R = 28;
const SPOKE_NODE_R = 10;

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  isHub: boolean;
  category: string;
  slug: string;
}

interface EdgeData {
  from: string;
  to: string;
  type: "hub-spoke" | "cross-silo";
}

const NetworkVisualization: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useLang();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; category: string } | null>(null);

  const { nodes, edges } = useMemo(() => {
    const hubs = blogPosts.filter((p) => p.isHub);
    const nodeMap: Record<string, NodeData> = {};
    const edgeList: EdgeData[] = [];

    // Position hubs in a circle
    hubs.forEach((hub, i) => {
      const angle = (2 * Math.PI * i) / hubs.length - Math.PI / 2;
      const x = CENTER_X + HUB_RADIUS * Math.cos(angle);
      const y = CENTER_Y + HUB_RADIUS * Math.sin(angle);
      nodeMap[hub.slug] = {
        id: hub.slug,
        label: hub.title.length > 30 ? hub.title.slice(0, 28) + "…" : hub.title,
        x,
        y,
        r: HUB_NODE_R,
        isHub: true,
        category: hub.category,
        slug: hub.slug,
      };
    });

    // Position spokes around their hub
    hubs.forEach((hub) => {
      const spokes = blogPosts.filter((p) => p.topicalMapHub === hub.slug);
      const hubNode = nodeMap[hub.slug];
      if (!hubNode) return;

      // Angle from center to hub → base direction for spoke fan
      const baseAngle = Math.atan2(hubNode.y - CENTER_Y, hubNode.x - CENTER_X);
      const fanSpread = Math.min(Math.PI * 0.8, spokes.length * 0.25);

      spokes.forEach((spoke, si) => {
        const t = spokes.length === 1 ? 0 : (si / (spokes.length - 1)) - 0.5;
        const angle = baseAngle + t * fanSpread;
        const dist = SPOKE_RADIUS_MIN + (si % 2) * (SPOKE_RADIUS_MAX - SPOKE_RADIUS_MIN) * 0.6;
        const x = hubNode.x + dist * Math.cos(angle);
        const y = hubNode.y + dist * Math.sin(angle);

        nodeMap[spoke.slug] = {
          id: spoke.slug,
          label: spoke.title.length > 25 ? spoke.title.slice(0, 23) + "…" : spoke.title,
          x: Math.max(SPOKE_NODE_R + 5, Math.min(SVG_W - SPOKE_NODE_R - 5, x)),
          y: Math.max(SPOKE_NODE_R + 5, Math.min(SVG_H - SPOKE_NODE_R - 5, y)),
          r: SPOKE_NODE_R,
          isHub: false,
          category: spoke.category,
          slug: spoke.slug,
        };

        edgeList.push({ from: hub.slug, to: spoke.slug, type: "hub-spoke" });
      });

      // Cross-silo links from hub
      (hub.relatedSlugs || []).forEach((slug) => {
        if (nodeMap[slug] || hubs.some((h) => h.slug === slug)) {
          edgeList.push({ from: hub.slug, to: slug, type: "cross-silo" });
        }
      });
    });

    return { nodes: Object.values(nodeMap), edges: edgeList };
  }, []);

  const handleClick = useCallback(
    (slug: string) => navigate(localizedPath(lang, `/resources/blog/${slug}/`)),
    [navigate, lang]
  );

  const handleMouseEnter = useCallback((node: NodeData, e: React.MouseEvent<SVGElement>) => {
    setHoveredNode(node.id);
    const fullPost = blogPosts.find((p) => p.slug === node.id);
    setTooltip({
      x: node.x,
      y: node.y,
      label: fullPost?.title || node.label,
      category: node.category,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredNode(null);
    setTooltip(null);
  }, []);

  const isConnected = useCallback(
    (nodeId: string) => {
      if (!hoveredNode) return true;
      if (nodeId === hoveredNode) return true;
      return edges.some(
        (e) =>
          (e.from === hoveredNode && e.to === nodeId) ||
          (e.to === hoveredNode && e.from === nodeId)
      );
    },
    [hoveredNode, edges]
  );

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full max-w-5xl mx-auto"
        style={{ minHeight: 500 }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        <g>
          {edges.map((edge, i) => {
            const from = nodes.find((n) => n.id === edge.from);
            const to = nodes.find((n) => n.id === edge.to);
            if (!from || !to) return null;

            const dimmed = hoveredNode && !isConnected(edge.from) && !isConnected(edge.to);
            const highlighted =
              hoveredNode &&
              (edge.from === hoveredNode || edge.to === hoveredNode);

            return (
              <line
                key={`e-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={
                  edge.type === "cross-silo"
                    ? "hsl(var(--primary))"
                    : "hsl(var(--border))"
                }
                strokeWidth={highlighted ? 2.5 : edge.type === "cross-silo" ? 1.5 : 1}
                strokeDasharray={edge.type === "cross-silo" ? "6 4" : undefined}
                opacity={dimmed ? 0.1 : highlighted ? 1 : 0.4}
                style={{ transition: "opacity 0.2s, stroke-width 0.2s" }}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node) => {
            const fill = CATEGORY_FILLS[node.category] || DEFAULT_FILL;
            const dimmed = hoveredNode && !isConnected(node.id);

            return (
              <g
                key={node.id}
                style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                opacity={dimmed ? 0.15 : 1}
                onClick={() => handleClick(node.slug)}
                onMouseEnter={(e) => handleMouseEnter(node, e)}
                onMouseLeave={handleMouseLeave}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={fill.bg}
                  stroke={fill.stroke}
                  strokeWidth={node.isHub ? 2.5 : 1.5}
                  filter={hoveredNode === node.id ? "url(#glow)" : undefined}
                />
                {node.isHub && (
                  <text
                    x={node.x}
                    y={node.y + node.r + 14}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="600"
                    fill={fill.text}
                    className="pointer-events-none select-none"
                  >
                    {node.label}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* Tooltip */}
        {tooltip && (
          <g className="pointer-events-none">
            <rect
              x={tooltip.x - 120}
              y={tooltip.y - 50}
              width={240}
              height={36}
              rx={6}
              fill="hsl(var(--popover))"
              stroke="hsl(var(--border))"
              strokeWidth={1}
            />
            <text
              x={tooltip.x}
              y={tooltip.y - 36}
              textAnchor="middle"
              fontSize="10"
              fontWeight="500"
              fill="hsl(var(--popover-foreground))"
            >
              {tooltip.label.length > 50 ? tooltip.label.slice(0, 48) + "…" : tooltip.label}
            </text>
            <text
              x={tooltip.x}
              y={tooltip.y - 22}
              textAnchor="middle"
              fontSize="9"
              fill="hsl(var(--muted-foreground))"
            >
              {tooltip.category}
            </text>
          </g>
        )}

        {/* Legend */}
        <g transform="translate(20, 20)">
          <text fontSize="11" fontWeight="600" fill="hsl(var(--foreground))">Legend</text>
          <circle cx={8} cy={20} r={8} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
          <text x={22} y={24} fontSize="9" fill="hsl(var(--muted-foreground))">Hub / Pillar</text>
          <circle cx={8} cy={40} r={4} fill="#d1fae5" stroke="#10b981" strokeWidth={1.5} />
          <text x={22} y={44} fontSize="9" fill="hsl(var(--muted-foreground))">Spoke Article</text>
          <line x1={0} y1={58} x2={16} y2={58} stroke="hsl(var(--border))" strokeWidth={1} />
          <text x={22} y={62} fontSize="9" fill="hsl(var(--muted-foreground))">Hub → Spoke</text>
          <line x1={0} y1={76} x2={16} y2={76} stroke="hsl(var(--primary))" strokeWidth={1.5} strokeDasharray="6 4" />
          <text x={22} y={80} fontSize="9" fill="hsl(var(--muted-foreground))">Cross-Silo Link</text>
        </g>
      </svg>
    </div>
  );
};

export default NetworkVisualization;
