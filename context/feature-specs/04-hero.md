# Spec 04: Hero Section

## Goal

Implement the hero section — the primary above-the-fold content. Left column has headline, italic subtitle, divider rule, drop-cap body copy, price, and two CTA buttons. Right column has the rotated newspaper mockup image.

## Design

Figma nodes: `6657:220`, `6632:25`, `6636:80`.

### Desktop Layout

Two-column CSS grid. Left ~660px wide, right ~596px. Total within 1383px container.

**Left Column:**

1. Display headline: "The Morning Paper, Now on Cereal." — 78.6px / SemiBold / `--text-headline` / letter-spacing -2%
2. Italic subtitle: "A monthly cereal for people who grew up, but never stopped liking cereal." — 40.3px / Italic / `--text-body` / line-height 42.36px
3. Hairline rule below subtitle (single line)
4. Body text with **drop cap** on first letter "P":
   - Drop cap "P": 105px / SemiBold / letter-spacing -2% / float left
   - Body: "art breakfast, part cultural digest. Every box is filled with cereal, cartoons commentary, and collectible front page energy that's meant to be read as much as it is eaten. Just like cereal always was, only now grown up. A new edition arrives every month, current with the headlines you woke up to. Read it over breakfast, then keep it. Each one is a small time capsule of the month it belongs to." — 35.4px / Regular / `--text-secondary` / line-height 43px
5. Price lockup: "$19.99" bold + "per monthly edition" italic — 40.6px + 31.4px
6. Two CTA buttons stacked:
   - "Get this Month's Issue" — `primary-filled` (blue, no border-radius on desktop, text `--bg-warm-lighter`)
   - "Preview Last Month's Issue" — `primary-outline` (transparent, 1.8px `#606060` border, radius 9.5px)

**Right Column:**

- Newspaper mockup image — 596×824px
- Slight clockwise rotation (~0° in design, slight visual tilt from paper texture)
- Use `next/image` with `src="/images/newspaper-mockup-hero.png"` (or WebP)
- `alt="The Cerealist newspaper mockup, Vol. I No. 1"`

### Mobile Layout

Single column stacked. Newspaper image above text OR below — confirm in mobile Figma screen (node `6257:133`). Headline scales to 41px. Subtitle to 27px. Drop cap only on desktop.

## Implementation

### `src/components/Hero/Hero.tsx`

Server component.

```tsx
<section className="bg-bg-primary">
  <ContentContainer>
    <div className="grid md:grid-cols-[1fr_596px] gap-8 py-12">
      {/* Left column */}
      <div>
        <h1 className="font-serif font-semibold text-[79px] md:text-[79px] text-[41px] leading-none tracking-[-0.02em] text-text-headline">
          The Morning Paper, Now on Cereal.
        </h1>
        <p className="font-serif italic text-[40px] text-text-body leading-[42px] mt-4">
          A monthly cereal for people who grew up, but never stopped liking cereal.
        </p>
        <hr className="border-black my-4" />
        <div className="font-serif text-[35px] text-text-secondary leading-[43px]">
          <DropCap letter="P" />
          art breakfast, part cultural digest...
        </div>
        <PriceLockup />
        <div className="flex flex-col gap-3 mt-6">
          <Button variant="primary-filled">Get this Month's Issue</Button>
          <Button variant="primary-outline">Preview Last Month's Issue</Button>
        </div>
      </div>
      {/* Right column */}
      <div className="relative">
        <Image
          src="/images/newspaper-mockup-hero.png"
          alt="The Cerealist newspaper mockup, Vol. I No. 1"
          width={596}
          height={824}
          priority
        />
      </div>
    </div>
  </ContentContainer>
</section>
```

### `DropCap` component

```tsx
// src/components/ui/DropCap.tsx
export function DropCap({ letter }: { letter: string }) {
  return (
    <span
      aria-hidden="true"
      className="float-left font-serif font-semibold text-[105px] leading-[1] tracking-[-0.02em] text-text-headline mr-1"
    >
      {letter}
    </span>
  )
}
```

On mobile, `DropCap` is hidden (`hidden md:inline`); the paragraph starts normally.

### `PriceLockup` component

```tsx
<div className="flex items-baseline gap-2 mt-4">
  <span className="font-serif font-bold text-[40px] text-text-headline">$19.99</span>
  <span className="font-serif italic text-[31px] text-text-body">per monthly edition</span>
</div>
```

## Dependencies

- `Button` (ui primitive)
- `DropCap` (new ui primitive)
- `ContentContainer`
- `next/image`
- Hero image asset at `/public/images/newspaper-mockup-hero.png`

## Verify When Done

- [ ] Headline renders at 79px desktop, 41px mobile
- [ ] Italic subtitle renders below headline
- [ ] Drop cap "P" floats left at 105px (desktop only)
- [ ] Body text wraps correctly around drop cap on desktop
- [ ] Price "$19.99 per monthly edition" renders below body
- [ ] "Get this Month's Issue" blue filled button renders
- [ ] "Preview Last Month's Issue" outline button renders below it
- [ ] Newspaper mockup image renders on right column (desktop) / stacked (mobile)
- [ ] Image has correct `alt` text
- [ ] Layout stacks correctly on small screens (below `md` breakpoint / ~768px) — 375px is the Figma reference, not the minimum supported width
- [ ] No hardcoded hex values
- [ ] No TypeScript errors
