

## Hero Section Redesign Based on PRD

### What Changes

The PRD fundamentally reframes the hero. The current version uses SEO jargon ("SEO Made Simple for Non-Techies", "organic traffic", "13 SEO Tools"). The PRD says: **zero mention of SEO in visible copy**. The hero's single job is to get the visitor to enter their URL.

### PRD Hero Spec (Page 5)

| Element | Requirement |
|---------|-------------|
| Headline | "Every day, people search Google, Bing, ChatGPT, Gemini, Claude, and other AI platforms, for what you sell. Are they finding you?" |
| Input | URL field with submit button |
| Time label | "Takes between 45 seconds and 5 minutes" beneath the input |
| Tone | Zero mention of SEO. Warm, direct, confident. |
| CTA button | Action-outcome format (e.g., "See how findable you are") |
| Trust chips | Non-techie language. No "SEO Tools", no "AI-Powered" jargon. |

### Implementation

**File: `src/components/home/HeroSection.tsx`**
- Replace headline with the PRD copy, split into two visual lines for impact
- Change CTA button text from "Check My Website" to "See how findable you are"
- Add a time estimate label below the input: "Takes between 45 seconds and 5 minutes"
- Replace trust chips with non-techie versions: "No tech skills needed", "Free to start", "Works with any website", "Results in minutes"
- Keep the same form logic, URL validation, and redirect to `app.zentroseo.com/signup`

**File: `src/i18n/locales/en.ts`** (home namespace)
- Update `heroTitle1`, `heroTitle2`, `heroDescription`
- Add `heroTimeEstimate` key
- Update CTA key from `checkMyWebsite` to a new action-outcome phrase
- Update all 4 chip keys to non-techie language

**Files: all 13 non-English locale files**
- Update the same hero keys with translated versions of the new copy

**File: `src/index.css` or `HeroSection.tsx` inline styles**
- Minor typography adjustments: the new headline is longer, so font size may need to scale down slightly on mobile (from `text-4xl` to `text-3xl` on smallest breakpoint)

### What Stays the Same
- Dark gradient background with dot pattern
- Framer Motion entrance animation
- Form structure (input + button in a glass-morphism bar)
- Redirect to `app.zentroseo.com/signup?url=...&flow=hero`
- Error validation logic

