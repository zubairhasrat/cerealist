# Spec 03: NavBar

## Goal

Implement the navigation bar that sits below the masthead. Desktop shows date, CTAs, and nav links. Mobile shows hamburger menu, wordmark, and CTA buttons.

## Design

Figma node: `6632:16` (sub-nav row).

### Desktop Layout

Three columns within `ContentContainer`:

- **Left**: Publication date — "Wednesday, March 25, 2026" — 25.7px / SemiBold Italic / `--text-primary`
- **Center**: Two CTA buttons side by side
  - "Get this Month's Issue" — `primary-filled` button (bg `--accent-blue`, text white, no border-radius on desktop)
  - "SUBSCRIBE FOR $19/ MONTH" — text label in `--bg-warm-lighter` color, below/beside the CTA
- **Right**: Nav links with vertical hairline dividers between each
  - "Home" | "Cartoons" | "Contact the Desk"
  - 29px / Regular / `--text-primary`
  - Vertical divider between each link: a thin `|` or 1px vertical line, ~20px tall

Double hairline rules above and below the nav bar row (matching masthead bottom rules).

### Mobile Layout

Three elements horizontally:

- **Left**: Hamburger menu icon — 3 bars, each 29×3px, 10px border-radius, black
- **Center**: 
  - "The Cerealist" — large serif text
  - "Cereal, Grown Up." — italic tagline below
- **Right**: (hidden or collapsed — CTAs appear elsewhere on mobile)

The mobile nav does not need a functional drawer/menu in v1. Render the hamburger as a button with `aria-label="Open menu"` — no drawer behavior yet.

## Implementation

### `src/components/NavBar/NavBar.tsx`

Client component (`'use client'`) only if mobile hamburger needs state. Otherwise server component.

```tsx
<nav className="w-full border-y-[double-rule]">
  {/* Desktop */}
  <ContentContainer className="hidden md:flex items-center justify-between py-2">
    <span className="font-serif font-semibold italic text-[25.7px]">
      Wednesday, March 25, 2026
    </span>
    <div className="flex items-center gap-4">
      <Button variant="primary-filled">Get this Month's Issue</Button>
    </div>
    <NavLinks />
  </ContentContainer>

  {/* Mobile */}
  <ContentContainer className="flex md:hidden items-center justify-between py-3">
    <HamburgerIcon />
    <div className="text-center">
      <span className="font-serif font-bold text-2xl block">The Cerealist</span>
      <span className="font-serif italic text-base">Cereal, Grown Up.</span>
    </div>
  </ContentContainer>
</nav>
```

### `NavLinks` sub-component

```tsx
function NavLinks() {
  const links = ['Home', 'Cartoons', 'Contact the Desk']
  return (
    <div className="flex items-center gap-[43px]">
      {links.map((link, i) => (
        <>
          {i > 0 && <VerticalDivider />}
          <a href="#" className="font-serif text-[29px] text-text-primary">{link}</a>
        </>
      ))}
    </div>
  )
}
```

### Double Hairline Rules

`<SectionDivider />` above and below the nav row.

## Dependencies

- `Button` component (ui primitive)
- `SectionDivider`
- `ContentContainer`

## Verify When Done

- [ ] Date appears on the left on desktop
- [ ] "Get this Month's Issue" blue CTA renders center on desktop
- [ ] Nav links (Home, Cartoons, Contact the Desk) appear on the right with dividers
- [ ] Double hairline rules above and below navbar
- [ ] Mobile shows hamburger, centered wordmark + tagline
- [ ] Hamburger button has `aria-label="Open menu"`
- [ ] No TypeScript errors
