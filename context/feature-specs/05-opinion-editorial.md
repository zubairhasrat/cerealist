# Spec 05: Opinion Section + Editorial Article

## Goal

Implement the "OPINION — The Editorial Side" section header and the full editorial article body below it, including section label, headline, byline, pull quote, drop-cap body text, and the cereal box image.

## Design

Figma nodes: `6657:777`, `6643:163`, `6643:169`, `6636:117`.

### Section Header

Structure (top to bottom):
1. Single hairline rule (full width)
2. Label row: single hairline rules extend left and right of centered label area — "OPINION" bold + "The Editorial Side" italic sit between the two flanking rules
3. Single hairline rule (full width)

- "OPINION" — 38.4px / SemiBold / uppercase / `--text-primary`
- "The Editorial Side" — 29.7px / SemiBold Italic / `--text-muted`

### Article Header (full width, centered)

- **Headline**: "It Was Never Just About the Cereal" — 78.6px / SemiBold / `--text-headline` / centered / letter-spacing -2% / line-height 0.93
  - Mobile: 41px
- **Subtitle**: "How breakfast lost its stories, and what happened next." — 40.3px / Italic / `--text-body` / centered
  - Mobile: 27px
- **Byline**: "BY THE EDITORIAL BOARD" — 29.7px / Bold / uppercase / `--text-headline` / centered / letter-spacing 0.6px
  - Mobile: left-aligned

Double hairline divider between byline and article body.

### Article Body

**Desktop**: two-column grid — left column has cereal box image, right column has text.  
**Mobile**: single column — left-aligned, drop cap shown, image floats right within continuation paragraph.

**Right Column Text** (desktop) / Full width (mobile):
- Drop cap "C": 104.9px / SemiBold / `--text-headline` / float left — **shown on both desktop and mobile**
- Body: "ereal used to be more than cereal. It was something you wanted to eat, and something you wanted to look at. Flavor, color, crunch, alongside games, stories, characters. It wasn't just breakfast. It was an experience." — 35.4px / Regular / `--text-secondary` / line-height 43px
- "experience" is italicized inline

**Pull Quote** (below body paragraph, in right column desktop / full-width mobile):
- Double hairline rules above and below
- "*It wasn't just breakfast. It was an experience.*" — 41.4px / Italic / `--text-secondary` / centered

**Continuation text** (below pull quote):
- "As it turns out, that's not a small thing to lose. We brought it back, just *differently*. The Cerealist is the adult version of what cereal always was, something delicious and something entertaining, only now the entertainment grew up too. Instead of games and mascots, it's cartoons, commentary, and headlines." — 34.1px / Regular / `--text-secondary` / line-height 43.8px
- "differently" is italicized inline
- **Mobile only**: image floats right within this paragraph (text wraps left around it)

**Left Column** (desktop only):
- Image: `/public/images/article-cereal-box-image.png`
- `alt="The Cerealist cereal box, Vol. I"`
- Full column height, `w-full h-auto`

## Implementation

### `src/components/SectionHeader.tsx`

Update existing component. Renders: single rule → label row with flanking rules → single rule.

```tsx
<div>
  <hr className="border-ink" />
  <div className="flex items-center gap-4 py-2">
    <hr className="flex-1 border-ink" />
    <div className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="font-semibold uppercase text-[38px] text-ink">OPINION</span>
      <span className="italic text-[30px] text-ink-mid">The Editorial Side</span>
    </div>
    <hr className="flex-1 border-ink" />
  </div>
  <hr className="border-ink" />
</div>
```

### `src/components/ui/PullQuote.tsx` (new)

```tsx
// Double hairline above and below, centered italic text
<div>
  <DoubleRule />
  <p className="font-serif italic text-[41px] text-ink-mid text-center py-4">
    {text}
  </p>
  <DoubleRule />
</div>
```

### `src/components/home/OpinionSection.tsx`

```tsx
<section className="bg-paper">
  <ContentContainer>
    <SectionHeader label="OPINION" sublabel="The Editorial Side" />
    <article className="mt-6">
      {/* Centered article header */}
      <h2 className="... text-center">It Was Never Just About the Cereal</h2>
      <p className="italic ... text-center">How breakfast lost its stories...</p>
      <p className="font-bold uppercase ... text-center md:text-center text-left">BY THE EDITORIAL BOARD</p>
      <DoubleRule className="my-6" />
      {/* Two-col body */}
      <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-8">
        <div className="hidden md:block">
          <Image src="/images/article-cereal-box-image.png" ... />
        </div>
        <div>
          {/* Drop cap body */}
          {/* Pull quote */}
          {/* Continuation with mobile float image */}
        </div>
      </div>
    </article>
  </ContentContainer>
</section>
```

## Dependencies

- `DoubleRule`, `DropCap`, `ContentContainer`, `SectionHeader` (existing)
- `PullQuote` (new ui primitive)
- Image: `/public/images/article-cereal-box-image.png`

## Corrections from design review

- Section header uses single hairlines (not double) above and below the label row
- Mobile text alignment is left-aligned (not centered) for headline, subtitle, byline
- Drop cap is shown on mobile too (not desktop-only as originally specified)
- Mobile image floats right within continuation text (not "below text")
- Continuation text starts with "As it turns out, that's not a small thing to lose. We brought it back, just *differently*." — missing from original spec
- Column sizing is approximately 50/50 (not 930px fixed)

## Verify When Done

- [ ] Single hairline above/below section header; label centered with flanking rules
- [ ] Headline at 79px desktop / 41px mobile, centered
- [ ] Subtitle italic centered; byline bold uppercase (left-aligned mobile)
- [ ] Double hairline divider between byline and body
- [ ] Drop cap "C" at 105px floats left — desktop AND mobile
- [ ] "experience" and "differently" italic inline
- [ ] Pull quote with double-rule borders above and below
- [ ] Desktop: cereal box image in left column, text in right column
- [ ] Mobile: image floats right within continuation paragraph
- [ ] No TypeScript errors
