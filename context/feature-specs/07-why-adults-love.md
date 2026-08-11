# Spec 07: Why Adults Love The Cerealist

## Goal

Implement the "WHY ADULTS LOVE THE CEREALIST" section with three feature cards explaining the audience appeal.

## Design

Figma node: `6657:305`.

### Section Header

"WHY ADULTS LOVE THE CEREALIST" — 28.5px / SemiBold / uppercase / centered
`<DoubleRule />` above and below the label (full-width, not flanking).
Section has 32px margin-top (`mt-8`).

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

### `src/components/home/WhyAdultsSection.tsx`

```tsx
import SectionHeader from "@/components/SectionHeader";
import DoubleRule from "@/components/DoubleRule";
import ContentContainer from "@/components/ui/ContentContainer";

const reasons = [
  'For people who miss the childhood breakfast experience.',
  'For people who still love print culture.',
  'For people who want a morning ritual that brings back memories.',
]

export default function WhyAdultsSection() {
  return (
    <section className="mt-8">
      <ContentContainer>
        <DoubleRule />
        <p className="font-crimson font-semibold text-[28.5px] uppercase tracking-wide text-center py-3">
          WHY ADULTS LOVE THE CEREALIST
        </p>
        <DoubleRule />
        <div className="flex flex-col md:flex-row gap-[29px] mt-6">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex-1 rounded-[20px] border-[2.9px] border-rule-light bg-[var(--color-card)] px-12 py-5 text-center"
            >
              <p className="font-[family-name:var(--font-crimson)] text-[25px] text-ink-mid leading-normal">{text}</p>
            </div>
          ))}
        </div>
        <DoubleRule className="mt-6" />
      </ContentContainer>
    </section>
  )
}
```

Note: `--color-rule-light: #7F7C7C` already exists in globals.css — no new token needed.
`--color-card: rgba(233 219 203 / 0.3)` also already defined.

## Dependencies

- `DoubleRule`, `ContentContainer` (no SectionHeader — header is inlined with DoubleRule pattern)

## Verify When Done

- [ ] "WHY ADULTS LOVE THE CEREALIST" section header renders
- [ ] Three cards render in a row on desktop
- [ ] Cards have the correct semi-transparent warm background and grey border
- [ ] All three card texts are correct
- [ ] Cards stack vertically on mobile
- [ ] Double hairline rules below section
- [ ] No TypeScript errors
