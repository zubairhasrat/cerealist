# Spec 08: Social Follow

## Goal

Implement the social media follow section with 4 platform icons and a follow CTA text.

## Design

Figma node: `6657:612`, `6657:659`.

### Layout

Centered column. Icons in a row, CTA text below.

### Social Icons

Four square rounded-corner icon boxes in a horizontal row, ~6px gap:
- Facebook
- Instagram
- TikTok
- X (Twitter)

Icon assets (PNG, already include the full box design):
- `/public/images/facebook-icon.png`
- `/public/images/instagram-icon.png`
- `/public/images/tictok-icon.png` ← note filename typo matches actual file
- `/public/images/x-icon.png`

Each icon box is rendered as an `<Image>` inside an `<a>` tag. The box appearance (rounded corners, cream/beige textured background, dark border) is baked into the PNG assets.

**Shadow effect:** Apply `drop-shadow` via Tailwind on the wrapper `<a>`:
```
drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]
```

**Press/active effect:** On `active:`, translate down-right by 2px and reduce shadow:
```
active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]
```

Icon display size: `80×80px` (adjust to match visual).

### CTA Text

"Follow, Post, & Tag @TheCerealist" — serif / ~32px / Regular / centered / `--text-primary`
- Title Case (not CSS `capitalize` — hardcode the casing)
- Two lines on mobile: "Follow, Post, & Tag" / "@TheCerealist"

## Implementation

### `src/components/SocialFollow/SocialFollow.tsx`

```tsx
import Image from 'next/image'
import { ContentContainer } from '@/components/ui/ContentContainer'

const socialLinks = [
  { platform: 'Facebook', icon: '/images/facebook-icon.png', href: '#' },
  { platform: 'Instagram', icon: '/images/instagram-icon.png', href: '#' },
  { platform: 'TikTok', icon: '/images/tictok-icon.png', href: '#' },
  { platform: 'X', icon: '/images/x-icon.png', href: '#' },
]

export function SocialFollow() {
  return (
    <section className="py-12">
      <ContentContainer>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-[6px]">
            {socialLinks.map(({ platform, icon, href }) => (
              <a
                key={platform}
                href={href}
                aria-label={`Follow us on ${platform}`}
                className="block transition-transform drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]"
              >
                <Image
                  src={icon}
                  alt={platform}
                  width={80}
                  height={80}
                />
              </a>
            ))}
          </div>
          <p className="font-serif text-[32px] text-text-primary text-center">
            Follow, Post, &amp; Tag @TheCerealist
          </p>
        </div>
      </ContentContainer>
    </section>
  )
}
```

## Dependencies

- `ContentContainer`
- Social icon PNG assets in `/public/images/` (already present)

## Verify When Done

- [ ] Four icon boxes render in a horizontal row with ~6px gap
- [ ] Each icon has drop shadow (3px 3px offset)
- [ ] Each icon shows press effect on active (translates 2px down-right, shadow shrinks)
- [ ] Each icon is a link with correct `aria-label`
- [ ] "Follow, Post, & Tag @TheCerealist" text renders below icons, centered, serif, ~32px
- [ ] Layout matches design on desktop and mobile
- [ ] No TypeScript errors
