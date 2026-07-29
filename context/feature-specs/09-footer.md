# Spec 09: Footer

## Goal

Implement the site footer with navigation pills, large wordmark, tagline, legal links, and copyright.

## Design

Figma node: `6657:358`, `6657:779`.

Background: `--bg-footer` (#F8EDE7).

### Layout (top to bottom)

1. **Nav Pills Row**: Three outlined pill buttons — "Cereal", "Granola", "Contact the Desk"
2. **Large Wordmark**: "The Cerealist" — massive serif wordmark, centered
3. **Tagline**: "Cereal, Grown Up." — 60.3px / SemiBold / `--text-headline` / centered
4. **Decorative divider**: horizontal rule below tagline
5. **Legal Links Row**: "TERMS OF SERVICE" | "PRIVACY POLICY" | "ACCESSIBILITY" — 29.4px / SemiBold / centered with gap
6. **Copyright**: "©" symbol + "The Cerealist" (smaller) — bottom of footer

### Nav Pills

Each pill: outlined, border 1.4px black, border-radius 31px (pill), text is ~40.9px SemiBold in `--bg-warm-light` color. Separated by vertical dividers (`|` or SVG line).

Pill items: Cereal | Granola | Contact the Desk

### Wordmark Area

Large "The Cerealist" masthead — either use the same SVG wordmark asset or render as large bold serif:
- ~1100px wide on desktop
- Slight rotation (0.47deg) matching Figma

Behind the wordmark: decorative paper texture strip (same as masthead).

### Tagline

"Cereal, Grown Up." — 60.3px / SemiBold / centered / `--text-headline`

### Legal Links

Three text items centered with spacing, all uppercase SemiBold 29.4px:
- "TERMS OF SERVICE"
- "PRIVACY POLICY"  
- "ACCESSIBILITY"

### Copyright

"© The Cerealist" — standard copyright, bottom

## Implementation

### `src/components/Footer/Footer.tsx`

```tsx
export function Footer() {
  const navItems = ['Cereal', 'Granola', 'Contact the Desk']
  const legalLinks = ['Terms of Service', 'Privacy Policy', 'Accessibility']

  return (
    <footer className="bg-bg-footer pt-12 pb-8">
      <ContentContainer>
        {/* Nav pills */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {navItems.map((item, i) => (
            <>
              {i > 0 && <VerticalDivider />}
              <a
                key={item}
                href="#"
                className="font-serif font-bold text-[41px] text-bg-warm-light border border-black rounded-pill px-6 py-1"
              >
                {item}
              </a>
            </>
          ))}
        </div>

        {/* Large wordmark */}
        <div className="text-center my-8">
          <span className="font-serif font-bold text-[120px] leading-none tracking-tight text-text-headline">
            The Cerealist
          </span>
        </div>

        {/* Tagline */}
        <p className="font-serif font-semibold text-[60px] text-text-headline text-center">
          Cereal, Grown Up.
        </p>

        <hr className="border-text-primary my-6" />

        {/* Legal links */}
        <div className="flex items-center justify-center gap-6">
          {legalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-serif font-semibold text-[29px] uppercase text-text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-serif text-center text-text-primary mt-4">
          © The Cerealist
        </p>
      </ContentContainer>
    </footer>
  )
}
```

## Dependencies

- `ContentContainer`
- Wordmark SVG (optional — can render as text)

## Verify When Done

- [ ] Footer background is `--bg-footer` (#F8EDE7)
- [ ] Three nav pills render with pill border and correct labels
- [ ] Large "The Cerealist" wordmark renders centered
- [ ] "Cereal, Grown Up." tagline at 60px renders below wordmark
- [ ] Legal links render as three centered uppercase links
- [ ] Copyright "© The Cerealist" at bottom
- [ ] No TypeScript errors
