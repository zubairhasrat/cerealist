# Code Standards — The Cerealist

## General

- Keep components small and single-purpose — one visual section per component file
- No mixing of layout logic and UI rendering in the same component
- Do not add features or abstractions beyond what the current spec requires
- Fix root causes; do not patch symptoms

## TypeScript

- Strict mode is required throughout the project
- Avoid `any` — use explicit interfaces or narrowly scoped types
- Prop types are defined as `interface ComponentNameProps` co-located with the component
- No implicit `any` from JSON — type Shopify variant data explicitly

## Next.js (App Router)

- Default to React Server Components — no `'use client'` unless browser interactivity is required
- Interactive elements that require `'use client'`: subscription modals, contact form, quantity selector, hamburger menu
- Use `next/image` for all images — set meaningful `alt` text on every image
- Use `next/font/google` to load Crimson Text and Inter — no CDN `<link>` in `<head>`
- Route handlers (API routes) are not needed in v1 — avoid creating them
- Page files live in `src/app/` following App Router conventions

## Styling

- Use Tailwind utility classes as the primary styling mechanism
- Design tokens from `ui-context.md` are mapped to CSS custom properties in `globals.css`
- Reference tokens via Tailwind config extensions (e.g., `text-headline`, `bg-primary`)
- No hardcoded hex values in component JSX — always use token classes or variables
- No inline `style` prop for colors — exception: complex transforms/masks from Figma output may use inline styles
- Follow the border radius scale from `ui-context.md` — use token class names
- Section dividers are always `<SectionDivider />` — never hand-coded `<hr>` pairs

## Component Organization

```
src/
  app/
    layout.tsx          — Root layout with font loading and global styles
    page.tsx            — Homepage (assembles all landing page sections)
    contact/page.tsx    — Contact form page
  components/
    Masthead/
      Masthead.tsx
    NavBar/
      NavBar.tsx
    Hero/
      Hero.tsx
    OpinionSection/
      OpinionSection.tsx
    EditorialArticle/
      EditorialArticle.tsx
    ArticleGrid/
      ArticleGrid.tsx
      ArticleCard.tsx
    WhyAdultsLove/
      WhyAdultsLove.tsx
    SocialFollow/
      SocialFollow.tsx
    Footer/
      Footer.tsx
    SubscriptionFlow/
      SubscriptionModal.tsx     — Desktop overlay wrapper
      ChoosePlanStep.tsx        — Step 1: plan selection
      PickCerealStep.tsx        — Step 2: cereal picker
      CerealCard.tsx
      PlanCard.tsx
    ProductDetail/
      ProductDetailSheet.tsx
      NutritionFacts.tsx
    ContactForm/
      ContactForm.tsx
    ui/
      Button.tsx
      SectionDivider.tsx
      StepPills.tsx
```

## Naming Conventions

- Components: PascalCase filenames and exports
- CSS variables: `--kebab-case` in `globals.css`
- Tailwind config extensions: `kebab-case` keys
- Props interfaces: `ComponentNameProps`
- Event handlers: `handleActionName` (e.g., `handlePlanSelect`)

## File Organization

- `src/components/` — Feature components, one folder per major section
- `src/components/ui/` — Shared primitive components used across sections
- `public/images/` — Static image assets (PNG, WebP, SVG)
- `context/` — Context files and feature specs (not imported by the app)

## Accessibility

- All form inputs have associated `<label>` elements
- Radio buttons have `role="radiogroup"` with `aria-labelledby`
- Step indicators use `aria-current` and `role="tablist"` semantics
- Drop caps use `aria-hidden` on the floating letter span, or CSS `::first-letter`
- Nutrition facts table uses proper `<table>`, `<th scope="col">`, `<th scope="row">`
- Interactive elements have visible focus states (outline, not hidden)
- Images have descriptive `alt` text; decorative images use `alt=""`
