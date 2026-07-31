# Progress Tracker — The Cerealist

Update this file after every meaningful implementation change.

## Current Phase

- Implementation — Spec 04 (Hero) complete, proceeding to Spec 05 (OpinionSection)

## Current Goal

- Implement OpinionSection per `context/feature-specs/05-opinion.md`

## Completed

- Context files authored (project-overview, architecture, ui-context, code-standards, ai-workflow-rules)
- Feature specs created for all landing page components and subscription flow
- Initial project scaffolded (Next.js + TypeScript)
- Masthead component — partially implemented (staged in git)
- NavBar component — partially implemented (staged in git)
- **Spec 01 — Globals** ✅
  - All missing color tokens added to `globals.css` (cereal-card, input, tag, footer, muted, navy-alt, border-warm, border-input, border-dark, card)
  - Border radius scale defined as CSS variables (`--radius-sm/md/lg/xl/pill`)
  - `@theme inline` updated — all new tokens available as Tailwind color utilities
  - Inter font loaded in `layout.tsx` via `next/font/google` (weight 900, `--font-inter` variable)
  - `src/components/ui/ContentContainer.tsx` created — fluid max-w-[1383px], px-4 mobile / px-[30px] md+
  - `PageWrapper.tsx` updated — removed hardcoded `max-w-[1440px]`; sections own their own ContentContainer
  - `npm run build` passes ✅
- **Spec 02 — Masthead** ✅
  - Restructured to 3-column CSS grid: left (Vol. I · No. 1), center (tagline + badges + wordmark), right (PRICE $19.99)
  - EST. 2026 badge and MONTHLY EDITION badge flank the wordmark in center column
  - Wrapped in `ContentContainer` for consistent max-width / padding
  - Hidden on mobile (`hidden md:block`) per spec
  - `DoubleRule` at bottom separates masthead from navbar
  - `npm run build` passes ✅
- **Spec 03 — NavBar** ✅
  - Desktop: dark navy bg (`bg-navy-dark`), date left (light text), nav links center with 1px dividers, SUBSCRIBE button right
  - Mobile: paper bg, hamburger button (`aria-label="Open menu"`) left, centered wordmark + italic tagline, spacer right
  - Wrapped in `ContentContainer` for consistent padding
  - `DoubleRule` at bottom (replaces old `RuleLine`)
  - `npm run build` passes ✅
- **Spec 04 — Hero** ✅
  - Desktop: two-column grid (`1fr 596px`), left text + right image
  - Headline 41px mobile / 79px desktop, SemiBold, -2% tracking
  - Italic subtitle 27px mobile / 40px desktop
  - Hairline rule below subtitle
  - Desktop: drop cap "P" 105px SemiBold float-left; Mobile: `hero-image.png` floats left within body text
  - Body text 27px/34px mobile, 35px/43px desktop
  - Price lockup between hairline rules: `$19.99` bold 40px + `per monthly edition` italic 31px
  - `primary-filled` (navy bg, cream text, no radius desktop) + `primary-outline` (transparent, 1.8px `--color-border-outline`, 9.5px radius) buttons
  - `--color-border-outline: #606060` added to globals.css
  - Uses `next/image` with `priority` on desktop image
  - `npm run build` passes ✅

## In Progress

- None

## Next Up

1. Hero: date left, CTA buttons center (Subscribe + Get this Month's Issue), nav links right
4. Hero: display headline, italic subtitle, drop-cap body text, $19.99/mo price, CTA buttons, newspaper mockup image
5. OpinionSection + EditorialArticle: section header with double-rule dividers, large editorial with drop cap, pull quote, cereal box image
6. ArticleGrid: 4-column grid (Politics, Sports, The Funnies, Opinion) with vertical hairline dividers
7. WhyAdultsLove: 3 feature cards
8. SocialFollow: 4 social icons + CTA text
9. Footer: nav pills, large wordmark, tagline, legal links, copyright
10. SubscriptionFlow: ChoosePlanStep modal → PickCerealStep modal → Shopify redirect
11. ProductDetailSheet + NutritionFacts
12. ContactForm
13. Mobile responsive pass

## Open Questions

- Shopify store domain and product variant IDs not yet provided — needed before SubscriptionFlow can redirect to checkout
- Are the "Cartoons" and product pages (Cereal, Granola) in scope for v1? Currently marked out of scope.
- Contact form: does it need a backend (email sending) or is UI-only acceptable for v1?
- Paper texture background images — need final assets or placeholders confirmed

## Architecture Decisions

- Checkout handled entirely by Shopify redirect — no custom cart or payment in this app
- No database or auth in v1 — fully static marketing site
- Next.js App Router with RSC by default; `'use client'` only for interactive islands (modals, forms, quantity selector)
- Fonts loaded via `next/font/google`, not CDN link

## Session Notes

- Figma file key: `ltMOTU1hXnmANbJFStXAVp`
- Homepage desktop node: `5550:606`
- All design tokens are in `context/ui-specs.json` — use as source of truth
- The Figma file uses absolute positioning throughout — convert to flex/grid in implementation
- Paper texture is a repeating background image across multiple sections
