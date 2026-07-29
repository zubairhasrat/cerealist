# Spec 02: Masthead (Top Bar)

## Goal

Implement the top bar of the page above the navigation. It shows publication metadata, the brand wordmark, and edition/price info — styled as a broadsheet newspaper masthead.

## Design

Figma node: `6587:846` area (top section of homepage).

Full-width bar at the very top of the page. Two horizontal hairline rules run at ~48px and ~56px from the top, flanking the wordmark area.

### Desktop Layout (three columns)

- **Left**: "Vol. I · No. 1" — 26px / Bold / `--text-primary`
- **Center**: 
  - "CEREAL, GROWN UP." — 26px / Bold / centered (tagline above wordmark)
  - **The Cerealist** — large serif wordmark (use `next/image` with the wordmark SVG, or render as styled text if SVG not available)
  - A decorative paper texture strip behind the wordmark area
- **Right**: "PRICE $19.99" — 26px / Bold / `--text-primary`

### Badges (flanking the wordmark center)

- **EST. 2026 box**: black border, 1.235px, ~79×79px, contains "EST." and "2026" in 27px SemiBold
- **MONTHLY EDITION box**: black border, 1.267px, ~158×79px, contains "MONTHLY" and "EDITION" in 28.6px SemiBold

### Hairline Dividers

Two `<SectionDivider />` components at the bottom of the masthead area (double-line rule separating masthead from navbar).

### Mobile

Not shown separately — on mobile, masthead collapses or is hidden in favor of the mobile hamburger nav. Match the mobile nav spec (feature-spec 03).

## Implementation

### `src/components/Masthead/Masthead.tsx`

Server component. Structure:

```tsx
<header className="w-full bg-bg-primary">
  <ContentContainer>
    <div className="flex items-center justify-between py-3">
      {/* Left: Vol. I · No. 1 */}
      {/* Center: EST badge + wordmark + MONTHLY EDITION badge */}
      {/* Right: PRICE $19.99 */}
    </div>
  </ContentContainer>
  <SectionDivider />
</header>
```

The two badges flank the center wordmark. Use CSS grid or flex with gap for alignment.

Wordmark renders as large serif text if no SVG asset:
```tsx
<span className="font-serif font-bold text-[60px] leading-none tracking-tight">
  The Cerealist
</span>
```

When the SVG wordmark asset is available, swap to `<Image src="/images/brand-wordmark.svg" ... />`.

## Dependencies

- `SectionDivider` (from spec 01 globals / ui components)
- `ContentContainer` (from spec 01)

## Verify When Done

- [ ] "Vol. I · No. 1" appears on the left
- [ ] "The Cerealist" wordmark is centered and large
- [ ] "PRICE $19.99" appears on the right
- [ ] EST. 2026 box appears left of center wordmark
- [ ] MONTHLY EDITION box appears right of center wordmark
- [ ] Double hairline rules appear below masthead
- [ ] No hardcoded hex colors — all from CSS variables
- [ ] No TypeScript errors
