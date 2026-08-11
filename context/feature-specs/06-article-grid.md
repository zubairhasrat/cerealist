# Spec 06: Article Grid — "Inside This Month's Edition"

## Goal

Implement the 4-column article grid section showing the four editorial categories inside this month's issue, separated by vertical hairline dividers.

## Design

Figma node: `6657:244`.

### Section Header

Structure (top to bottom):
1. Double hairline rule (full width)
2. "INSIDE THIS MONTH'S EDITION" — 28.5px / SemiBold / uppercase / centered / no flanking hairlines
3. Double hairline rule (full width)

This is different from the Opinion section header (which uses single rules + flanking hairlines).

### Grid Layout

**Desktop**: 4 equal-width columns with vertical hairline dividers (1px `--color-ink`) between them.  
**Mobile**: 2-column grid. Vertical hairline divider between left/right columns. Horizontal hairline rule between rows.

### Article Card Content (per column)

1. **Category tag**: ~20px / Bold / uppercase / `--color-navy` (blue) — e.g., "POLITICS"
2. **Headline**: 35.4px / Bold / line-height 32.9px / `--color-ink` — e.g., "The War Ends. The Party Starts."
3. **Description**: 27.3px / Regular / line-height 29.2px / `--color-ink` — immediately below headline, small margin (~8px), no large gap

No images. Text only.

### Four Article Cards (desktop column order / mobile grid order)

| Desktop col | Mobile position | Category | Headline | Description |
|---|---|---|---|---|
| 1 | row1-left | POLITICS | The War Ends. The Party Starts. | A cartoonist's view of parades, patriotism, and national birthday parties. |
| 2 | row1-right | SPORTS | New York Knicks Championship Win | A cartoonist's take on area dad that can finally stop talking about 1973. |
| 3 | row2-left | OPINION | Musk Bags a Thousand Billion | A cartoonist's view of the first man to need a longer calculator. |
| 4 | row2-right | THE FUNNIES | Everything is a Superfood | A cartoonist's view of nutritional inflation. |

Note: mobile order is POLITICS, SPORTS, OPINION, THE FUNNIES — Opinion moves before The Funnies on mobile.

### Bottom Divider

Double hairline rules below the grid.

## Corrections from design review

- Mobile is **2-column grid** (not single column as originally specified)
- Mobile has vertical divider between columns and horizontal hairline between rows
- `mt-[100px]` on description is wrong — description follows headline with small normal margin
- Section header uses double rules above and below (no flanking hairlines like Opinion section)

## Implementation

### Section Header

Use `SectionHeader` component but needs a `variant="double"` prop to render double rules instead of single rules + flanking hairlines.

Or inline the header directly in `ArticleGrid.tsx`:

```tsx
<div className="my-4">
  <DoubleRule />
  <p className="font-crimson font-semibold text-[28px] uppercase text-center text-ink py-3">
    INSIDE THIS MONTH&apos;S EDITION
  </p>
  <DoubleRule />
</div>
```

### `src/components/home/EditionSection.tsx`

(Replaces existing `EditionSection.tsx` or create new `ArticleGrid` folder per code standards)

```tsx
<section className="bg-paper">
  <ContentContainer>
    {/* Section header */}
    <DoubleRule />
    <p className="... uppercase text-center py-3">INSIDE THIS MONTH'S EDITION</p>
    <DoubleRule />

    {/* Grid: desktop 4-col, mobile 2-col */}
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink mt-6">
      {articles.map((article) => (
        <ArticleCard key={article.category} {...article} />
      ))}
    </div>

    <DoubleRule className="mt-6" />
  </ContentContainer>
</section>
```

### `ArticleCard`

```tsx
<div className="px-4 md:px-6 py-4 md:py-0">
  <p className="font-crimson font-bold text-[14px] md:text-[20px] uppercase text-navy">{category}</p>
  <h3 className="font-crimson font-bold text-[22px] md:text-[35px] leading-[1.1] text-ink mt-1">{headline}</h3>
  <p className="font-crimson text-[16px] md:text-[27px] leading-[1.1] text-ink mt-2">{description}</p>
</div>
```

### Mobile row divider

`divide-x` handles vertical dividers. For horizontal rule between row 1 and row 2 on mobile, use `border-b border-ink` on the first two cards (mobile only):

```tsx
className={`... ${index < 2 ? 'md:border-b-0 border-b border-ink' : ''}`}
```

## Dependencies

- `DoubleRule`, `ContentContainer`
- `ArticleCard` (new, inline or separate file)

## Verify When Done

- [ ] Double hairline above and below "INSIDE THIS MONTH'S EDITION" label
- [ ] Desktop: 4 equal columns with vertical hairline dividers
- [ ] Mobile: 2-column grid with vertical + horizontal hairline dividers
- [ ] Each card: blue uppercase category, bold headline, regular description (small gap between)
- [ ] All 4 cards have correct copy in correct order
- [ ] Double hairline rules below grid
- [ ] No TypeScript errors
