# Spec 08: Social Follow

## Goal

Implement the social media follow section with 4 platform icons and a follow CTA text.

## Design

Figma node: `6657:612`, `6657:659`.

### Layout

Centered column. Icons in a row, CTA text below.

### Social Icons

Four circular icons in a horizontal row, 6px gap:
- Facebook — 62×62px circular SVG
- Instagram — 62×62px circular SVG
- TikTok — 62×62px circular SVG
- X (Twitter) — 62×62px circular SVG

Icon assets: `/public/images/social-facebook.svg`, `/public/images/social-instagram.svg`, `/public/images/social-tiktok.svg`, `/public/images/social-x.svg`

### CTA Text

"Follow, post, & tag @theCerealist" — 32.3px / Regular / capitalize / centered / `--text-primary`

## Implementation

### `src/components/SocialFollow/SocialFollow.tsx`

```tsx
const socialLinks = [
  { platform: 'Facebook', icon: '/images/social-facebook.svg', href: '#' },
  { platform: 'Instagram', icon: '/images/social-instagram.svg', href: '#' },
  { platform: 'TikTok', icon: '/images/social-tiktok.svg', href: '#' },
  { platform: 'X', icon: '/images/social-x.svg', href: '#' },
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
                className="block"
              >
                <Image
                  src={icon}
                  alt={platform}
                  width={62}
                  height={62}
                />
              </a>
            ))}
          </div>
          <p className="font-serif text-[32px] text-text-primary text-center capitalize">
            Follow, post, &amp; tag @theCerealist
          </p>
        </div>
      </ContentContainer>
    </section>
  )
}
```

## Dependencies

- `ContentContainer`
- Social icon SVG assets in `/public/images/`

## Verify When Done

- [ ] Four social icons render in a horizontal row
- [ ] Each icon is a link with correct `aria-label`
- [ ] "Follow, post, & tag @theCerealist" text renders below icons
- [ ] Layout is centered
- [ ] No TypeScript errors
