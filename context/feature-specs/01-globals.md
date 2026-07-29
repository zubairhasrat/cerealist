# Spec 01: Globals — CSS Variables, Fonts, Base Layout

## Goal

Set up the foundational styles: CSS custom properties for all design tokens, Crimson Text font loading via `next/font/google`, Tailwind config extensions, and the base page layout wrapper.

## Design

All color, typography, and spacing tokens from `ui-context.md` must be defined as CSS custom properties in `globals.css`. Tailwind must be configured to extend with these token values so components can use `text-headline`, `bg-primary`, etc. instead of raw hex values.

## Implementation

### `globals.css`

Define all CSS custom properties under `:root`:

```css
:root {
  --bg-primary: #F1E9E4;
  --bg-warm-light: #F9EBE6;
  --bg-warm-lighter: #FBF0ED;
  --bg-card: rgba(233, 219, 203, 0.3);
  --bg-cereal-card: #EAD8D1;
  --bg-input: #DDD3D1;
  --bg-tag: #E0CFBC;
  --bg-footer: #F8EDE7;
  --text-headline: #1E1E1E;
  --text-body: #17100E;
  --text-primary: #000000;
  --text-secondary: #2A2929;
  --text-muted: #24231F;
  --accent-blue: #2F5082;
  --accent-blue-alt: #3C5066;
  --border-warm: #C2B2A7;
  --border-input: #9F9593;
  --border-dark: #564C49;
  --border-card: #000000;
  --radius-none: 0px;
  --radius-sm: 5px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 21px;
  --radius-pill: 31px;
  --font-serif: 'Crimson Text', Georgia, serif;
  --font-sans: Inter, system-ui, sans-serif;
  --font-system: Helvetica, Arial, sans-serif;
}

body {
  background-color: var(--bg-primary);
  font-family: var(--font-serif);
  color: var(--text-primary);
}
```

### `tailwind.config.ts`

Extend the Tailwind theme to map all tokens:

```ts
theme: {
  extend: {
    colors: {
      'bg-primary': 'var(--bg-primary)',
      'bg-warm-light': 'var(--bg-warm-light)',
      'bg-warm-lighter': 'var(--bg-warm-lighter)',
      'bg-card': 'var(--bg-card)',
      'bg-cereal-card': 'var(--bg-cereal-card)',
      'bg-input': 'var(--bg-input)',
      'bg-footer': 'var(--bg-footer)',
      'text-headline': 'var(--text-headline)',
      'text-body': 'var(--text-body)',
      'text-secondary': 'var(--text-secondary)',
      'text-muted': 'var(--text-muted)',
      'accent-blue': 'var(--accent-blue)',
      'accent-blue-alt': 'var(--accent-blue-alt)',
      'border-warm': 'var(--border-warm)',
      'border-input': 'var(--border-input)',
      'border-dark': 'var(--border-dark)',
    },
    borderRadius: {
      'none': '0px',
      'sm': '5px',
      'md': '8px',
      'lg': '12px',
      'xl': '21px',
      'pill': '31px',
    },
    fontFamily: {
      serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    },
    maxWidth: {
      content: '1383px',
    },
  },
}
```

### `src/app/layout.tsx`

Load fonts with `next/font/google`:

```tsx
import { Crimson_Text, Inter } from 'next/font/google'

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-crimson',
})

const inter = Inter({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-inter',
})
```

Apply both font variables to `<html>` className. Set `lang="en"`.

### Content Container

Create a shared `<ContentContainer>` utility component:

```tsx
// src/components/ui/ContentContainer.tsx
export function ContentContainer({ children, className }: ...) {
  return (
    <div className={`max-w-content mx-auto px-[30px] md:px-4 ${className}`}>
      {children}
    </div>
  )
}
```

Fluid responsive container — max-width 1383px with auto margins, 16px side padding on mobile, 30px on `md`+. Content scales naturally between breakpoints; 1383px is the cap, not a fixed width.

## Dependencies

None beyond what's already installed (Next.js, Tailwind, TypeScript).

## Verify When Done

- [ ] All CSS custom properties defined in `globals.css`
- [ ] Tailwind config extends with all token colors and border radii
- [ ] `body` renders with `--bg-primary` (#F1E9E4) background
- [ ] Crimson Text loads correctly at weights 400, 600, 700 (normal + italic)
- [ ] Inter loads at weight 900
- [ ] `ContentContainer` is fluid — centers content at max-width 1383px and scales down with padding on smaller screens
- [ ] No TypeScript errors
- [ ] `npm run build` passes
