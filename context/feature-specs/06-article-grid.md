# Spec 06: Article Grid — "Inside This Month's Edition"

## Goal

Implement the 4-column article grid section showing the four editorial categories inside this month's issue, separated by vertical hairline dividers.

## Design

Figma node: `6657:244`.

### Section Header

"INSIDE THIS MONTH'S EDITION" — 28.5px / SemiBold / uppercase / centered
Double hairline rules above and below.

### Grid Layout

Desktop: 4 columns equal width within 1338px content area.
Each column separated by a vertical hairline divider (1px `--text-primary`).

### Article Card Content (per column)

1. **Category tag**: 20.6px / Bold / uppercase / `--accent-blue` — e.g., "POLITICS"
2. **Headline**: 35.4px / Bold / line-height 32.9px / `--text-primary` — e.g., "The War Ends. The Party Starts."
3. **Description**: 27.3px / Regular / line-height 29.2px / `--text-primary` — e.g., "A cartoonist's view of parades, patriotism, and national birthday parties."

No images in this grid. Text only.

### Four Article Cards

1. **POLITICS** — "The War Ends. The Party Starts." / "A cartoonist's view of parades, patriotism, and national birthday parties."
2. **SPORTS** — "New York Knicks Championship Win" / "A cartoonist's take on area dad that can finally stop talking about 1973."
3. **THE FUNNIES** — "Everything is a Superfood" / "A cartoonist's view of nutritional inflation."
4. **OPINION** — "Musk Bags a Thousand Billion" / "A cartoonist's view of the first man to need a longer calculator."

### Bottom Divider

Double hairline rules below the grid.

### Mobile Layout

Single column stacked cards. No vertical dividers. Each card has its category, headline, description stacked.

## Implementation

### `src/components/ArticleGrid/ArticleGrid.tsx`

```tsx
<section>
  <ContentContainer>
    <SectionHeader label="INSIDE THIS MONTH'S EDITION" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-6">
      {articles.map((article, i) => (
        <>
          {i > 0 && <VerticalDivider className="hidden md:block" />}
          <ArticleCard key={article.category} {...article} />
        </>
      ))}
    </div>
    <SectionDivider />
  </ContentContainer>
</section>
```

### `src/components/ArticleGrid/ArticleCard.tsx`

```tsx
interface ArticleCardProps {
  category: string
  headline: string
  description: string
}

export function ArticleCard({ category, headline, description }: ArticleCardProps) {
  return (
    <div className="px-7 py-0">
      <p className="font-serif font-bold text-[20.6px] uppercase text-accent-blue">{category}</p>
      <h3 className="font-serif font-bold text-[35px] leading-[33px] text-text-primary mt-8">{headline}</h3>
      <p className="font-serif text-[27px] leading-[29px] text-text-primary mt-[100px]">{description}</p>
    </div>
  )
}
```

### Article Data

Define as a const array in `ArticleGrid.tsx`:

```ts
const articles = [
  { category: 'POLITICS', headline: 'The War Ends. The Party Starts.', description: "A cartoonist's view of parades, patriotism, and national birthday parties." },
  { category: 'SPORTS', headline: 'New York Knicks Championship Win', description: "A cartoonist's take on area dad that can finally stop talking about 1973." },
  { category: 'THE FUNNIES', headline: 'Everything is a Superfood', description: "A cartoonist's view of nutritional inflation." },
  { category: 'OPINION', headline: 'Musk Bags a Thousand Billion', description: "A cartoonist's view of the first man to need a longer calculator." },
]
```

### Vertical Divider

```tsx
// A 1px vertical hairline between grid columns (desktop only)
function VerticalDivider() {
  return <div className="w-px bg-text-primary self-stretch" />
}
```

## Dependencies

- `SectionHeader`, `SectionDivider`, `ContentContainer`
- `ArticleCard` (new component)

## Verify When Done

- [ ] Section label "INSIDE THIS MONTH'S EDITION" renders uppercase centered
- [ ] 4 columns render on desktop with vertical hairline dividers between them
- [ ] Each column shows category (blue uppercase), headline (bold), description (regular)
- [ ] All 4 article cards have correct copy
- [ ] Mobile stacks to single column without dividers
- [ ] Double hairline rules below section
- [ ] No TypeScript errors
