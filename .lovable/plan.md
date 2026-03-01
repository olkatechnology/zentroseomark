

## Full Site Internationalization (i18n) -- 14 Languages

Implementing end-to-end translation for the entire ZentroSEO website across all 14 languages. This covers UI chrome, navigation, page content, blog posts, glossary terms, guides, comparisons, topics, and all data-driven content.

---

### Architecture: `react-i18next`

We will use `react-i18next` (the React standard for i18n) with namespace-based JSON translation files. This gives us:
- `t()` function for all translatable strings
- Namespace separation (nav, common, home, features, blog, glossary, etc.)
- Language detection from localStorage (matching current switcher behavior)
- Lazy loading of translation files per language to keep bundle size manageable

---

### Phase 1: Install and Configure i18n Infrastructure

**New dependency:** `react-i18next`, `i18next`

**New files:**
- `src/i18n/index.ts` -- i18n initialization with language detection from localStorage (`zentro-lang`), fallback to `EN`, namespace config
- `src/i18n/LanguageContext.tsx` -- React context provider that wraps the app and syncs `react-i18next` language with the navbar switcher

**Modified files:**
- `src/App.tsx` -- Wrap app in i18n provider
- `src/components/Navbar.tsx` -- Connect language switcher to `i18next.changeLanguage()` instead of just localStorage
- `src/components/Layout.tsx` -- Set `<html lang>` attribute dynamically based on selected language

---

### Phase 2: Translation Files Structure

Create JSON translation files for each language, organized by namespace:

```text
src/i18n/locales/
  en/
    common.json      (buttons, labels, shared UI text)
    nav.json          (navigation items, dropdowns)
    home.json         (hero, features grid, CTA, FAQ, testimonials)
    pricing.json      (plan names, features, CTA text)
    features.json     (all 9 feature pages - titles, descriptions, benefits, useCases)
    solutions.json    (all 4 solution pages)
    blog.json         (all 14 blog posts - titles, excerpts, full content)
    glossary.json     (all 40+ terms - definitions, long descriptions)
    topics.json       (all 15 topic pages)
    guides.json       (all 7 guides - titles, steps, content)
    comparisons.json  (all 8 comparisons)
    legal.json        (privacy, terms, refund policies)
    company.json      (about us, contact, careers)
    resources.json    (help center, case studies, documentation, toolkit)
  de/
    (same structure)
  es/
    (same structure)
  ... (11 more languages)
```

English (`en/`) files will be created first as the **complete reference**. Each file extracts all hardcoded strings from the corresponding data files and components.

For the remaining 13 languages, we will create **structurally complete files** with professionally translated content for:
- `common.json` and `nav.json` (UI chrome -- ~100 strings each, fully translated)
- Page titles and meta descriptions across all namespaces
- Key headings and CTAs

Long-form markdown content (blog post bodies, glossary long descriptions, guide steps, comparison content) will initially use English as a fallback, with the structure in place for you to add professional translations over time.

---

### Phase 3: Refactor Components to Use `t()`

Every component with hardcoded English text needs to be updated to use the `t()` translation function. This affects approximately **35+ files**:

**Navigation and Layout:**
- `Navbar.tsx` -- nav labels, dropdown descriptions, Login/Get Started buttons
- `Footer.tsx` -- section headers, link labels, copyright text
- `Layout.tsx` -- dynamic `lang` attribute on document

**Home page components:**
- `HeroSection.tsx` -- headline, subheadline, placeholder text, chips, error messages
- `TrustedBy.tsx` -- heading text
- `ToolkitsSection.tsx` -- section heading, toolkit names, bullet points, CTA text
- `FeaturesGrid.tsx` -- heading, feature titles and descriptions
- `HowItWorks.tsx` -- heading, step titles and descriptions
- `WhyDifferent.tsx` -- heading, differentiator titles and descriptions
- `FAQSection.tsx` -- heading, all Q&A pairs
- `CTASection.tsx` -- heading, description, button text
- `Testimonials.tsx` -- heading, quote text, names, roles

**Page components:**
- `Index.tsx`, `Pricing.tsx`, `Features.tsx`, `FeatureDetail.tsx`
- `SolutionHub.tsx`, `SolutionDetail.tsx`
- `Blog.tsx`, `BlogPost.tsx`, `BlogCategory.tsx`, `AuthorProfile.tsx`
- `Glossary.tsx`, `GlossaryTerm.tsx`
- `TopicsHub.tsx`, `TopicDetail.tsx`
- `GuidesHub.tsx`, `GuideDetail.tsx`
- `ComparisonsHub.tsx`, `ComparisonDetail.tsx`
- `ResourcesHub.tsx`, `HelpCenter.tsx`, `CaseStudies.tsx`, `Documentation.tsx`
- `CompanyHub.tsx`, `AboutUs.tsx`, `ContactUs.tsx`, `Careers.tsx`
- `LegalPage.tsx`, `Sitemap.tsx`, `NotFound.tsx`

**Data files refactored to be language-aware:**
- `src/data/blog-posts.ts` -- Export function `getBlogPosts(lang)` that returns translated content
- `src/data/glossary.ts` -- Export function `getGlossaryTerms(lang)`
- `src/data/topics.ts` -- Export function `getTopics(lang)`
- `src/data/guides.ts` -- Export function `getGuides(lang)`
- `src/data/comparisons.ts` -- Export function `getComparisons(lang)`
- `src/data/features.ts` -- Export function `getFeaturesData(lang)`
- `src/data/solutions.ts` -- Export function `getSolutionsData(lang)`
- `src/data/legal.ts` -- Export function `getLegalPages(lang)`

Each data getter will look up the current language's JSON namespace and return translated content, falling back to English for any missing translations.

---

### Phase 4: SEO Metadata per Language

- Update `<Helmet>` on every page to set `<html lang={currentLang}>` and translate `<title>`, `<meta name="description">`, `og:title`, `og:description`
- Add `hreflang` alternate link tags to key pages for international SEO signals
- Update `robots.txt` and `sitemap.xml` references if needed

---

### Phase 5: RTL and Locale-Specific Formatting

None of the 14 supported languages require RTL, so no layout direction changes are needed. However:
- Date formatting in blog posts (`date`, `dateModified`) will use `date-fns` locale imports to display dates in the user's language (e.g., "28 Februar 2026" for German)
- Number formatting for any statistics will use `Intl.NumberFormat`

---

### Summary

| What | Count |
|------|-------|
| New dependency | `react-i18next`, `i18next` |
| New files (infrastructure) | ~3 (i18n config, context, types) |
| New files (translation JSONs) | ~14 namespaces x 14 languages = ~196 JSON files |
| Modified components | ~35+ component/page files |
| Modified data files | 8 data files refactored to language-aware getters |

This is a large structural change. Implementation will proceed in phases: infrastructure first, then English extraction, then component refactoring, then adding translations for each additional language.

