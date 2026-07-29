# Spec 05: Opinion Section + Editorial Article

## Goal

Implement the "OPINION — The Editorial Side" section header and the full editorial article body below it, including section label, headline, byline, pull quote, drop-cap body text, and the cereal box image.

## Design

Figma nodes: `6657:777`, `6643:163`, `6643:169`, `6636:117`.

### Section Header

Double hairline rules above and below a row containing:
- Left: "OPINION" — 38.4px / SemiBold / uppercase / `--text-primary`
- Right of center: "The Editorial Side" — 29.7px / SemiBold Italic / `--text-muted`
- Flanking hairline rules to left and right of the label area (radiating outward)

### Article

Full-width editorial article below the section header.

**Layout**: two-column on desktop — left column has cereal box image, right column has text.

**Headline**: "It Was Never Just About the Cereal" — 78.6px / SemiBold / `--text-headline` / centered / letter-spacing -2% / line-height 0.93

**Subtitle**: "How breakfast lost its stories, and what happened next." — 40.3px / Italic / `--text-body` / centered

**Byline**: "BY THE EDITORIAL BOARD" — 29.7px / Bold / uppercase / `--text-headline` / centered / letter-spacing 0.6px

Double hairline divider between byline and article body.

**Right Column Text** (desktop):
- Drop cap "C": 104.9px / SemiBold / `--text-headline`
- Body: "ereal used to be more than cereal. It was something you wanted to eat, and something you wanted to look at. Flavor, color, crunch, alongside games, stories, characters. It wasn't just breakfast. It was an experience." — 35.4px / Regular / `--text-secondary` / line-height 43px
- "experience" is italicized inline

**Pull Quote** (desktop, within right column):
- Double hairline rules above and below
- "*It wasn't just breakfast. It was an experience.*" — 41.4px / Italic / `--text-secondary` / centered

**Continuation text below image**:
- "The Cerealist is the adult version of what cereal always was, something delicious and something entertaining, only now the entertainment grew up too. Instead of games and mascots, it's cartoons, commentary, and headlines." — 34.1px / Regular / `--text-secondary` / line-height 43.8px

**Left Column** (desktop):
- Cereal box image: ~930×796px
- `alt="The Cerealist cereal box Vol. I"`

### Mobile

Stacked: headline → subtitle → byline → divider → body text (no image or image below text).

## Implementation

### `src/components/OpinionSection/OpinionSection.tsx`

```tsx
<section className="bg-bg-primary">
  <ContentContainer>
    <SectionHeader label="OPINION" sublabel="The Editorial Side" />
    <EditorialArticle />
  </ContentContainer>
</section>
```

### `SectionHeader` component

```tsx
// src/components/ui/SectionHeader.tsx
// Renders the double-rule header row with label and optional sublabel
```

### `src/components/EditorialArticle/EditorialArticle.tsx`

```tsx
<article>
  <h2 className="font-serif font-semibold text-[79px] text-text-headline leading-[0.93] tracking-[-0.02em] text-center">
    It Was Never Just About the Cereal
  </h2>
  <p className="font-serif italic text-[40px] text-text-body text-center mt-4">
    How breakfast lost its stories, and what happened next.
  </p>
  <p className="font-serif font-bold text-[30px] uppercase tracking-[0.6px] text-text-headline text-center mt-3">
    BY THE EDITORIAL BOARD
  </p>
  <SectionDivider />
  <div className="grid md:grid-cols-[930px_1fr] gap-8 mt-6">
    {/* Left: cereal box image */}
    <Image src="/images/cerealist-box.png" alt="The Cerealist cereal box Vol. I" width={930} height={796} />
    {/* Right: article body with drop cap and pull quote */}
    <div>
      <DropCap letter="C" />
      <p>ereal used to be more than cereal...</p>
      <PullQuote text="It wasn't just breakfast. It was an experience." />
      <p>As it turns out, that's not a small thing to lose...</p>
    </div>
  </div>
</article>
```

### `PullQuote` component

```tsx
// src/components/ui/PullQuote.tsx
// Double hairline above and below, centered italic text
```

## Dependencies

- `SectionDivider`, `DropCap`, `ContentContainer` (from prior specs)
- `SectionHeader` (new ui primitive)
- `PullQuote` (new ui primitive)
- Cereal box image at `/public/images/cerealist-box.png`

## Verify When Done

- [ ] "OPINION — The Editorial Side" section header renders with double-rule dividers
- [ ] Headline "It Was Never Just About the Cereal" at 79px centered
- [ ] Italic subtitle and byline render below headline
- [ ] Double hairline divider between byline and body
- [ ] Drop cap "C" floats left in article body (desktop only)
- [ ] "experience" is italic within body text
- [ ] Pull quote renders with double-rule borders above and below
- [ ] Cereal box image in left column (desktop), or below text (mobile)
- [ ] Continuation text renders below the layout
- [ ] Mobile stacks correctly
- [ ] No TypeScript errors
