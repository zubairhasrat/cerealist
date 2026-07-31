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

### Tailwind v4 token mapping (in `globals.css`)

**No `tailwind.config.ts`** — this project uses Tailwind v4. All config lives in `globals.css`.

New tokens go in `:root`, then mapped in `@theme inline` to generate utilities:

```css
/* 1. Raw values in :root */
:root {
  --color-cereal-card: #ead8d1;
  --color-input: #ddd3d1;
  --color-footer: #f8ede7;
  /* ... etc */
  --radius-pill: 31px;
}

/* 2. Expose as Tailwind utilities via @theme inline */
@theme inline {
  --color-cereal-card: var(--color-cereal-card);
  --color-input: var(--color-input);
  --color-footer: var(--color-footer);
  /* generates: bg-cereal-card, text-cereal-card, border-cereal-card */
}

/* 3. New breakpoints or fully-generated tokens go in @theme (no inline) */
@theme {
  --breakpoint-xs: 370px;
}
```

`rgba` values (like `--color-card`) cannot use `@theme inline` — reference via `bg-[var(--color-card)]` arbitrary syntax. Border radius values are plain CSS variables, used via `rounded-[var(--radius-pill)]`.

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
- [ ] All color tokens in `:root` + mapped in `@theme inline` (no tailwind.config.ts)
- [ ] `body` renders with `--bg-primary` (#F1E9E4) background
- [ ] Crimson Text loads correctly at weights 400, 600, 700 (normal + italic)
- [ ] Inter loads at weight 900
- [ ] `ContentContainer` is fluid — centers content at max-width 1383px and scales down with padding on smaller screens
- [ ] No TypeScript errors
- [ ] `npm run build` passes
