# Spec 11: Product Detail / Nutrition Facts

## Goal

Implement the product detail sheet with ingredients list and an FDA-style nutrition facts table, accessible as a proper `<table>`.

## Design

Figma node: `5591:1452` (desktop), `6503:656` (mobile).

Full-screen sheet (overlay on desktop, full page on mobile).

## Layout

### Header

Product name + "Nutrition Facts" heading — Inter font at 900 weight (the only place Inter is used).

### Ingredients

Text block listing all ingredients.

### Nutrition Facts Table

FDA-style bordered table. Structured with proper semantic HTML:

```html
<table>
  <caption>Nutrition Facts</caption>
  <thead>
    <tr>
      <th scope="col">Serving Size</th>
      <th scope="col">Amount Per Serving</th>
      <th scope="col">% Daily Value*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Calories</th>
      <td>120</td>
      <td>—</td>
    </tr>
    <!-- continue for all nutrients -->
  </tbody>
</table>
```

Typography inside nutrition table:
- Heading "Nutrition Facts": Inter 900 weight
- All other table text: Helvetica (`--font-system`)

## Implementation

### `src/components/ProductDetail/ProductDetailSheet.tsx`

```tsx
// 'use client' — needed if it's a dismissible overlay
export function ProductDetailSheet({ onClose }: { onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-label="Product Detail">
      {/* Close button */}
      <NutritionFacts />
    </div>
  )
}
```

### `src/components/ProductDetail/NutritionFacts.tsx`

```tsx
export function NutritionFacts() {
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 900 }}>
        Nutrition Facts
      </h2>
      <table className="w-full border border-black" style={{ fontFamily: 'var(--font-system)' }}>
        <thead>
          <tr>
            <th scope="col" className="border border-black p-1 text-left">Nutrient</th>
            <th scope="col" className="border border-black p-1 text-right">Amount</th>
            <th scope="col" className="border border-black p-1 text-right">% DV</th>
          </tr>
        </thead>
        <tbody>
          {/* Nutrient rows — populate with actual cereal data */}
        </tbody>
      </table>
      <p className="text-xs mt-2">*Percent Daily Values are based on a 2,000 calorie diet.</p>
    </div>
  )
}
```

## Dependencies

- Inter font (already loaded in globals for nutrition use)

## Verify When Done

- [ ] "Nutrition Facts" heading renders in Inter 900 weight
- [ ] Nutrition table uses proper `<table>`, `<th scope="col">`, `<th scope="row">`
- [ ] Table body text is Helvetica
- [ ] Sheet is accessible as `role="dialog"` with `aria-modal="true"`
- [ ] Ingredients section renders
- [ ] No TypeScript errors
