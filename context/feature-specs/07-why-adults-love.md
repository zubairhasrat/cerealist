# Spec 07: Why Adults Love The Cerealist

## Goal

Implement the "WHY ADULTS LOVE THE CEREALIST" section with three feature cards explaining the audience appeal.

## Design

Figma node: `6657:305`.

### Section Header

"WHY ADULTS LOVE THE CEREALIST" — 28.5px / SemiBold / uppercase / centered
Double hairline rules above and below.

### Cards Layout

Three cards in a row on desktop. Each card:
- Background: `rgba(233, 219, 203, 0.3)` — `--bg-card`
- Border: 2.8–3.2px / `#7F7C7C` (grey, not black) / rounded-xl (19–21px)
- Height: ~108px
- Text: 24.9–27.4px / Regular / `--text-secondary` / centered

### Card Content

1. "For people who miss the childhood breakfast experience."
2. "For people who still love print culture."
3. "For people who want a morning ritual that brings back memories."

Cards 1 and 3 are slightly narrower (~427px) than card 2 (~468px). On mobile, stack vertically.

### Bottom Divider

Double hairline rules below the three cards.

## Implementation

### `src/components/WhyAdultsLove/WhyAdultsLove.tsx`

```tsx
const reasons = [
  'For people who miss the childhood breakfast experience.',
  'For people who still love print culture.',
  'For people who want a morning ritual that brings back memories.',
]

export function WhyAdultsLove() {
  return (
    <section>
      <ContentContainer>
        <SectionHeader label="WHY ADULTS LOVE THE CEREALIST" />
        <div className="flex flex-col md:flex-row gap-[29px] mt-6">
          {reasons.map((text) => (
            <FeatureCard key={text} text={text} />
          ))}
        </div>
        <SectionDivider />
      </ContentContainer>
    </section>
  )
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="flex-1 rounded-xl border-[2.9px] border-[#7F7C7C] bg-bg-card px-12 py-5 text-center">
      <p className="font-serif text-[25px] text-text-secondary leading-normal">{text}</p>
    </div>
  )
}
```

Note: The grey border color `#7F7C7C` does not have a CSS variable — add `--border-grey: #7F7C7C` to globals if needed.

## Dependencies

- `SectionHeader`, `SectionDivider`, `ContentContainer`

## Verify When Done

- [ ] "WHY ADULTS LOVE THE CEREALIST" section header renders
- [ ] Three cards render in a row on desktop
- [ ] Cards have the correct semi-transparent warm background and grey border
- [ ] All three card texts are correct
- [ ] Cards stack vertically on mobile
- [ ] Double hairline rules below section
- [ ] No TypeScript errors
