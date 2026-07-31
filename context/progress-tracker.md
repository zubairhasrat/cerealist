# Progress Tracker — The Cerealist

Update this file after every meaningful implementation change.

## Current Phase

- Implementation — Spec 01 (Globals) complete, proceeding to Spec 02 (Masthead)

## Current Goal

- Implement Masthead component per `context/feature-specs/02-masthead.md`

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

## In Progress

- None

## Next Up

1. Masthead: top bar with Vol. I · No. 1, wordmark, Monthly Edition badge, price
3. NavBar: date left, CTA buttons center (Subscribe + Get this Month's Issue), nav links right
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
