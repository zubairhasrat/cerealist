# Spec 09: Footer

## Goal

Implement the site footer with a nav bar, legal links, large copyright wordmark with cereal box image, and tagline with decorative rules.

## Design

Figma node: `6657:358`, `6657:779`.

### Layout (top to bottom)

1. **Footer Nav Bar**: "Cereal | Granola | Contact the Desk" — dark background using `/images/button-bg.png`, same visual style as the top NavBar
2. **Legal Links Row**: "TERMS OF SERVICE"  "PRIVACY POLICY"  "ACCESSIBILITY" — left-aligned, small uppercase, on `--bg-footer` (#F8EDE7)
3. **Wordmark + Cereal Box Row**: `© The Cerealist` wordmark (image) on the left, `footer-cereal-box.png` on the right
4. **Tagline with Decorative Rules**: `——— Cereal, Grown Up. ———` centered with horizontal lines on both sides

### Footer Nav Bar

- Background: `style={{ backgroundImage: 'url(/images/button-bg.png)' }}` covering full width
- Nav items: "Cereal" | "Granola" | "Contact the Desk" separated by `|` dividers
- Same styling as top NavBar (white/light text, SemiBold serif)

### Legal Links

Three items, left-aligned, spaced, uppercase SemiBold ~18px, `--text-primary` color:

- "TERMS OF SERVICE"
- "PRIVACY POLICY"
- "ACCESSIBILITY"

### Large Copyright Wordmark

- `©` rendered as inline text (large, ~80px) immediately before the wordmark image
- Wordmark: `<Image src="/images/the-cerealist-text.png" alt="The Cerealist" />` — do NOT render as text
- Full width, left-anchored

### Right Side Decorative Image

- `<Image src="/images/footer-cereal-box.png" alt="" />` — absolutely positioned right side
- Overlaps wordmark row, bottom-aligned

### Tagline with Decorative Rules

- Flexbox row: `<hr flex-1 />` + `<span>Cereal, Grown Up.</span>` + `<hr flex-1 />`
- Font: SemiBold ~28–32px, `--text-headline` color

## Implementation

### `src/components/Footer/Footer.tsx`

```tsx
import Image from 'next/image'
import { ContentContainer } from '@/components/ui/ContentContainer'

export function Footer() {
  const navItems = ['Cereal', 'Granola', 'Contact the Desk']
  const legalLinks = ['Terms of Service', 'Privacy Policy', 'Accessibility']

  return (
    <footer>
      {/* Footer nav bar */}
      <div
        className="w-full py-3"
        style={{ backgroundImage: 'url(/images/button-bg.png)', backgroundSize: 'cover' }}
      >
        <ContentContainer>
          <div className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <span key={item} className="flex items-center gap-6">
                {i > 0 && <span className="text-white/60">|</span>}
                <a href="#" className="font-serif font-semibold text-white text-lg">
                  {item}
                </a>
              </span>
            ))}
          </div>
        </ContentContainer>
      </div>

      {/* Footer body */}
      <div className="bg-[#F8EDE7] pt-6 pb-10">
        <ContentContainer>
          {/* Legal links — left-aligned */}
          <div className="flex items-center gap-6 mb-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans font-semibold text-sm uppercase tracking-widest text-text-primary"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Wordmark + cereal box */}
          <div className="relative flex items-end">
            <div className="flex items-center gap-2">
              <span className="font-serif text-[80px] leading-none text-text-headline">©</span>
              <Image
                src="/images/the-cerealist-text.png"
                alt="The Cerealist"
                width={900}
                height={140}
                className="h-auto w-full max-w-[900px]"
              />
            </div>
            <Image
              src="/images/footer-cereal-box.png"
              alt=""
              width={300}
              height={400}
              className="absolute right-0 bottom-0 w-[180px] md:w-[280px]"
            />
          </div>

          {/* Tagline with decorative side rules */}
          <div className="flex items-center gap-4 mt-4">
            <hr className="flex-1 border-text-headline" />
            <span className="font-serif font-semibold text-[28px] text-text-headline whitespace-nowrap">
              Cereal, Grown Up.
            </span>
            <hr className="flex-1 border-text-headline" />
          </div>
        </ContentContainer>
      </div>
    </footer>
  )
}
```

## Assets

| Asset | Path | Usage |
|-------|------|-------|
| Footer nav background | `/images/button-bg.png` | `backgroundImage` on footer nav bar |
| Wordmark | `/images/the-cerealist-text.png` | `<Image>` in copyright row |
| Cereal box | `/images/footer-cereal-box.png` | `<Image>` absolutely positioned right |

## Dependencies

- `ContentContainer`
- `next/image`

## Verify When Done

- [ ] Footer nav bar renders with `button-bg.png` background and three nav items
- [ ] Footer body background is `--bg-footer` (#F8EDE7)
- [ ] Legal links render left-aligned, uppercase, spaced
- [ ] `©` text + `the-cerealist-text.png` image render side by side
- [ ] `footer-cereal-box.png` appears on right side of wordmark row
- [ ] Tagline centered with horizontal rules on both sides
- [ ] No TypeScript errors
