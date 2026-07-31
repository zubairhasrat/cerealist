# Architecture — The Cerealist

## Stack

| Layer      | Technology               | Role                                                        |
| ---------- | ------------------------ | ----------------------------------------------------------- |
| Framework  | Next.js (App Router) + TypeScript | Page routing, server components, static generation |
| Styling    | Tailwind CSS v4          | Utility-first CSS; all config in `globals.css` via `@theme`/`@theme inline` — no `tailwind.config.ts` |
| Fonts      | Google Fonts (Crimson Text, Inter) | Loaded via `next/font/google`                   |
| Images     | `next/image`             | Optimized image delivery with WebP + lazy loading           |
| Checkout   | Shopify Storefront       | Cart, payment, and order fulfillment — external redirect    |
| Deployment | Vercel                   | Hosting, preview deployments, edge CDN                      |

## System Boundaries

- `src/app/` — Next.js App Router pages and layouts. One route per page (homepage `/`, contact `/contact`). No API routes needed in v1.
- `src/components/` — All UI components. Organized by feature section (e.g., `Masthead/`, `Hero/`, `ArticleGrid/`, `SubscriptionFlow/`).
- `src/components/ui/` — Shared primitives: Button, SectionDivider, PlanCard, CerealCard, etc.
- `public/images/` — Static assets: cereal bowl images, social icons, newspaper mockup, paper texture backgrounds.
- `context/` — AI context files and feature specs. Not shipped in production build.
- `context/feature-specs/` — Per-component implementation specs.

## Storage Model

- **No database** — this is a static marketing site in v1. No user data is stored.
- **No auth** — no login, no accounts, no session state.
- **Shopify** — all cart, order, and customer data lives in Shopify. The app only redirects to Shopify checkout with the selected product variant ID and quantity via a Shopify Buy Button or Storefront API URL.
- **Static images** — served from `/public/images/` via `next/image`.

## Checkout Integration

The app does not implement its own cart or payment. After the user selects a plan and cereal in the two-step flow:

1. Build a Shopify checkout URL with the correct variant ID and quantity
2. Redirect with `window.location.href = shopifyCheckoutUrl`
3. Shopify handles payment, fulfillment, and confirmation emails

Shopify product variant IDs are stored as environment variables:
- `NEXT_PUBLIC_SHOPIFY_MONTHLY_VARIANT_ID`
- `NEXT_PUBLIC_SHOPIFY_ONETIME_VARIANT_ID`
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`

## Auth and Access Model

No authentication. The site is fully public. No protected routes.

## Rendering Strategy

- **Homepage**: Static generation (SSG) — content does not change per-request
- **All pages**: Default to React Server Components; add `'use client'` only for interactive elements (subscription modals, contact form, quantity selector)

## Invariants

1. No hardcoded hex colors in component code — all colors reference CSS custom properties from `globals.css`
2. Checkout never happens within the app — always redirect to Shopify
3. Server components are the default — `'use client'` is added only where browser interactivity is required (modals, forms, quantity selector)
4. All images use `next/image` — no raw `<img>` tags except within Figma-derived assets being adapted
5. `npm run build` must pass with zero TypeScript errors before any unit is considered complete
6. Every component is responsive across all screen sizes — 1440px and 375px are Figma reference points, not the only supported widths. Verify at ≥3 viewport widths: ~375px, ~768px, and ~1280px+
