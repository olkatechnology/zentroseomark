## Plan: Add Toolkits Carousel Section + Update Hero

Two changes: (1) create a new SemRush-inspired "Toolkits" section with tabbed categories and feature cards, placed between the Hero and WhyDifferent sections, and (2) replace the emoji trust badges in the Hero with a more professional element.

---

### 1. Create `src/components/home/ToolkitsSection.tsx`

A new section inspired by the SemRush screenshot:

- **Heading:** "Toolkits to grow your traffic, fix issues, and rank higher"
- **Tab bar:** Horizontal pill-style tabs for ZentroSEO's toolkit categories:
  - **Site Audit** (ZentroAudit) -- selected by default
  - **SEO Fixes** (ZentroFix)
  - **Rank Tracking** (ZentroRank)
  - **Keywords** (ZentroKeywords)
  - **Content** (ZentroWrite)
  - **Backlinks** (ZentroBacklinks)
  - **Competitors** (ZentroCompare)
  - **Schema** (ZentroMarkup)
- **Center card:** When a tab is selected, a large card appears with:
  - Icon + toolkit name as heading
  - 3 bullet points describing key capabilities
  - A mock UI illustration (built with styled divs, charts from recharts, or simple CSS mockups -- no external images needed)
  - "Try for free" CTA button (orange gradient, links to signup)
- **Side preview cards:** Smaller cards on left/right showing adjacent toolkits (decorative, partially visible) with left/right arrow navigation
- **Background:** Dark purple/indigo gradient (matching hero palette) for visual impact
- **Animation:** Framer Motion for tab transitions and card entry

### 2. Update Hero Section (`src/components/home/HeroSection.tsx`)

- Remove the emoji trust badges ("Join early adopters worldwide", "Built to scale", etc.)
- Replace the "**Affordable SEO for Everyone"** with something around **Non-techies,** which is the niche**.**

### 3. Update `src/pages/Index.tsx`

- Import and place `ToolkitsSection` between `HeroSection` and `WhyDifferent`

---

### Technical Details

- The tab state will be managed with `useState` in the component
- Side cards use CSS `overflow-hidden` with partial visibility and opacity for depth
- The mock UI inside the center card will use simple styled divs (progress bars, fake chart bars) to suggest dashboard screenshots without needing real images
- Uses existing design tokens: `bg-hero`, `text-hero-foreground`, `bg-gradient-cta` for the CTA button
- Fully responsive: tabs scroll horizontally on mobile, side cards hidden on small screens