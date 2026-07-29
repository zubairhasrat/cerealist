# Spec 10: Subscription Flow (Choose Plan + Pick Cereal)

## Goal

Implement the two-step subscription flow. Desktop: overlay modal. Mobile: full-screen pages. After step 2, redirects to Shopify checkout.

## Design

Figma nodes:
- Choose Plan: `5577:286` (desktop modal), `6503:308` (mobile)
- Pick Cereal: `5578:625` (desktop modal), `6503:455` (mobile)

## Step 1 — Choose Plan

### Layout

Modal with step indicator pills at top: "Step 1" (active) | "Step 2" (inactive).

Two plan cards side by side (desktop) / stacked (mobile).

### Plan Cards

**Monthly Edition card** (343×257px, radius-lg, 1.2px black border):
- Title: "Monthly Edition" — 33px / SemiBold
- Price: "$19.99/month" — 28px / Bold
- Features list:
  - "A new issue. A new cereal. Every month."
  - "Includes every new release"
  - "Pause or cancel anytime"
- CTA button inside card: "Subscribe & Save" — `primary-filled`

**Just This Issue card** (343×257px, radius-lg, 1.2px black border):
- Title: "Just This Issue" — 33px / SemiBold
- Price: "$28.99" — 28px / Bold
- Features list:
  - "One box. One story."
  - "A one-time purchase"
- CTA button inside card: "Get this Month's Issue" — `primary-filled`

### Step Indicator Pills

```tsx
<StepPills currentStep={1} totalSteps={2} />
```

## Step 2 — Pick Cereal

### Layout

Cereal picker container: radius-xl (21px), bg `--bg-cereal-card` (#EAD8D1), 345×484px on mobile (desktop modal is wider).

2×2 grid of cereal cards.

### Cereal Options

| Name | Description |
| --- | --- |
| Honey Rings | Classic, lightly sweet, oat-based crunch |
| Fruit Crunch | Fruity, colorful corn puffs |
| Captain's Crunch | Sweetened corn squares |
| Cocoa Clusters | Crispy, chocolatey clusters |

Each card:
- Cereal bowl image (PNG, transparent bg, ~155×175px)
- Name
- Description
- "Editor's Pick" badge on one card (Honey Rings or whichever is featured)

### Quantity Selector

Row of numbered buttons: − | [count] | +
Text: 20px / SemiBold

### Cart Summary

Selected cereal name + quantity + price.

### Checkout Button

"Checkout" button — full width, bg `#1E1E1E`, white text, 29px / SemiBold, radius-md.
On click: build Shopify checkout URL and redirect.

### Shopify Redirect Logic

```ts
// src/lib/shopify.ts
export function buildCheckoutUrl({
  variantId,
  quantity,
}: {
  variantId: string
  quantity: number
}): string {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  return `https://${domain}/cart/${variantId}:${quantity}`
}
```

Environment variables required:
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
- `NEXT_PUBLIC_SHOPIFY_MONTHLY_VARIANT_ID`
- `NEXT_PUBLIC_SHOPIFY_ONETIME_VARIANT_ID`

## Implementation

### Component structure

```
src/components/SubscriptionFlow/
  SubscriptionModal.tsx      — Desktop overlay (fixed, backdrop)
  SubscriptionFlow.tsx       — State machine: currentStep (1|2), selectedPlan, selectedCereal, quantity
  ChoosePlanStep.tsx         — Step 1 UI
  PickCerealStep.tsx         — Step 2 UI
  PlanCard.tsx
  CerealCard.tsx
  StepPills.tsx
```

### `SubscriptionFlow.tsx`

Client component (`'use client'`). Manages state:
- `step: 1 | 2`
- `selectedPlan: 'monthly' | 'onetime' | null`
- `selectedCereal: string | null`
- `quantity: number` (default 1)

On "Checkout" click:
```ts
const variantId = selectedPlan === 'monthly'
  ? process.env.NEXT_PUBLIC_SHOPIFY_MONTHLY_VARIANT_ID!
  : process.env.NEXT_PUBLIC_SHOPIFY_ONETIME_VARIANT_ID!
window.location.href = buildCheckoutUrl({ variantId, quantity })
```

### Trigger

The "Get this Month's Issue" button in NavBar and Hero opens the modal:
- Desktop: renders `<SubscriptionModal>` overlay
- Mobile: navigates to `/subscribe` page (or renders full-screen within the same page)

## Dependencies

- `Button`, `StepPills` (ui primitives)
- Cereal bowl images: `/public/images/cereal-honey-rings.png`, etc.
- `src/lib/shopify.ts` (new utility)
- Env vars (`.env.local`)

## Verify When Done

- [ ] "Get this Month's Issue" CTA opens the subscription flow
- [ ] Step pills show Step 1 active, Step 2 inactive
- [ ] Two plan cards render with correct titles, prices, feature lists, and CTAs
- [ ] Selecting a plan and clicking CTA advances to Step 2
- [ ] Step 2 shows 2×2 cereal grid with names, descriptions, and images
- [ ] Quantity selector increments/decrements
- [ ] "Checkout" button redirects to Shopify URL (verify URL structure in browser)
- [ ] Desktop renders as overlay modal with backdrop
- [ ] Mobile renders as full-screen
- [ ] No TypeScript errors
- [ ] Env variables are not hardcoded in component code
