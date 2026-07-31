# UI Context — The Cerealist

## Theme

Warm newspaper editorial aesthetic. Light mode only. The visual language is a vintage broadsheet — warm cream/parchment backgrounds, serif typography throughout, black ink accents, and editorial divider rules. No dark mode. No utility-style aesthetic.

## Colors

All components must use these CSS custom properties — no hardcoded hex values.

| Role                    | CSS Variable              | Value       |
| ----------------------- | ------------------------- | ----------- |
| Page background         | `--bg-primary`            | `#F1E9E4`   |
| Warm light background   | `--bg-warm-light`         | `#F9EBE6`   |
| Warm lighter background | `--bg-warm-lighter`       | `#FBF0ED`   |
| Card background         | `--bg-card`               | `rgba(233,219,203,0.3)` |
| Cereal card background  | `--bg-cereal-card`        | `#EAD8D1`   |
| Form input background   | `--bg-input`              | `#DDD3D1`   |
| Editor tag background   | `--bg-tag`                | `#E0CFBC`   |
| Footer background       | `--bg-footer`             | `#F8EDE7`   |
| Primary headline text   | `--text-headline`         | `#1E1E1E`   |
| Body text               | `--text-body`             | `#17100E`   |
| Primary text (nav/label)| `--text-primary`          | `#000000`   |
| Secondary text          | `--text-secondary`        | `#2A2929`   |
| Muted text              | `--text-muted`            | `#24231F`   |
| CTA blue accent         | `--accent-blue`           | `#2F5082`   |
| Step indicator active   | `--accent-blue-alt`       | `#3C5066`   |
| Warm border             | `--border-warm`           | `#C2B2A7`   |
| Input border            | `--border-input`          | `#9F9593`   |
| Dark border             | `--border-dark`           | `#564C49`   |
| Card border             | `--border-card`           | `#000000`   |

## Typography

Primary typeface is **Crimson Text** (Google Fonts) for all UI text. Nutrition facts section only uses Inter (heading) and Helvetica (body).

| Role           | Font Family    | Variable        |
| -------------- | -------------- | --------------- |
| All UI text    | Crimson Text   | `--font-serif`  |
| Nutrition head | Inter          | `--font-sans`   |
| Nutrition body | Helvetica      | `--font-system` |

### Type Scale

| Token          | Desktop                            | Mobile                             | Usage                          |
| -------------- | ---------------------------------- | ---------------------------------- | ------------------------------ |
| `display`      | 79px / 100% lh / -2% ls / 600     | 41px / 100% lh / -2% ls / 600     | Hero headlines, article titles |
| `h2`           | 60px / auto / 600                  | 42px / auto / 600                  | Section titles                 |
| `h3`           | 42px / auto / 700                  | 28px / auto / 700                  | Card titles, prices            |
| `subtitle`     | 40px / 42px lh / 400 italic        | 27px / auto / 400 italic           | Subheadlines, pull quotes      |
| `body-large`   | 35px / 43px lh / 400               | 27px / 29px lh / 400               | Article body text              |
| `body`         | 27px / 29px lh / 400               | 20px / auto / 400                  | Descriptions, card text        |
| `body-small`   | 25px / auto / 400                  | 17px / auto / 400                  | Fine print, feature lists      |
| `section-header`| 28px / auto / 600 uppercase       | 17px / auto / 600 uppercase        | Section labels                 |
| `cta`          | 39px / auto / 600                  | 23px / auto / 600                  | Button text                    |
| `meta`         | 26px / auto / 600 italic           | 11px / auto / 600 italic           | Dates, editorial labels        |
| `nav`          | 29px / auto / 400                  | 17px / auto / 700                  | Navigation items               |
| `drop-cap`     | 105px / 100% lh / -2% ls / 600    | —                                  | Opening paragraph initial letter |

## Border Radius

| Context                  | Value  | Token           |
| ------------------------ | ------ | --------------- |
| Desktop CTA buttons      | 0px    | `--radius-none` |
| Form inputs, radio items | 5px    | `--radius-sm`   |
| Submit button, general   | 8px    | `--radius-md`   |
| Plan selection cards     | 12px   | `--radius-lg`   |
| Cereal picker container  | 21px   | `--radius-xl`   |
| Step pills, nav pills    | 31px   | `--radius-pill` |

## Component Library

No third-party component library. All components are custom-built to match the editorial newspaper design system. Components live in `src/components/`.

**Tailwind CSS v4** is used for styling. Configuration is entirely in `src/app/globals.css` — no `tailwind.config.ts`. Design tokens are CSS custom properties in `:root`, exposed as Tailwind utilities via `@theme inline`. See `code-standards.md` → Styling for the full v4 pattern.

## Breakpoints

Figma reference frames: 1440px (desktop) and 375px (mobile). These are **design reference points only** — implementation is fluid and responsive across all screen sizes.

Use Tailwind's standard breakpoint prefixes:

| Prefix | Min-width | Intent                          |
| ------ | --------- | ------------------------------- |
| (none) | 0px       | Mobile-first base styles        |
| `sm`   | 640px     | Large phones / small tablets    |
| `md`   | 768px     | Tablets / layout breakpoint     |
| `lg`   | 1024px    | Small desktops                  |
| `xl`   | 1280px    | Standard desktops               |
| `2xl`  | 1536px    | Large desktops                  |

Default mobile-first: write base styles for small screens, add `md:` / `lg:` / `xl:` overrides for wider layouts.

## Layout Patterns

- **Content container**: max-width 1383px, centered with `mx-auto`, padding `px-4 md:px-[30px]` — content naturally fluid below max-width
- **Single column (mobile)**: all sections stack vertically, 16px side padding
- **Two column (≥ md)**: switches to side-by-side at `md` breakpoint (768px+), not hard-locked to 1440px
- **Hero**: CSS Grid 2-column at `md`+, stacked below `md`
- **Article grid**: 4-column at `lg`+, 2-column at `md`, single-column below `md`
- **Modals**: overlay at `md`+, full-screen sheet below `md`
- **Masthead**: full-width bar above nav; collapses at `md` breakpoint — show mobile hamburger nav below
- **NavBar**: three-column layout at `md`+; hamburger + wordmark below `md`
- **Font sizes**: use Figma values as max targets; scale down proportionally on smaller viewports — use `clamp()` or responsive class variants (`text-[41px] md:text-[79px]`)

## Section Dividers

Double hairline horizontal rule — two thin `<hr>` elements stacked ~8px apart, full content width, black (`#000000`).

```tsx
// Use: <SectionDivider /> renders two stacked hairline rules
```

## Drop Cap

Opening paragraph of editorial articles uses a large drop cap on the first letter (desktop only).

```css
/* CSS ::first-letter or float-left span */
.drop-cap::first-letter {
  font-size: 105px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -2%;
  float: left;
}
```

## Buttons

| Variant          | BG         | Text       | Border                  | Radius |
| ---------------- | ---------- | ---------- | ----------------------- | ------ |
| `primary-filled` | `#2F5082`  | `#FFFFFF`  | none                    | 0px desktop / 6px mobile |
| `primary-outline`| transparent| `#000000`  | 1.8px `#606060`         | 6px    |
| `step-pill-active`| `#3C5066` | `#FFFFFF`  | 1.5px `#C2B2A7`         | 31px   |
| `step-pill-inactive`| transparent| `#000000` | 1.5px `#C2B2A7`        | 31px   |
| `checkout`       | `#1E1E1E`  | `#FFFFFF`  | 1px `#000000`           | 8px    |
| `submit`         | transparent| `#000000`  | 2.3px `#564C49`         | 8px    |

## Icons

Social icons (Facebook, Instagram, TikTok, X) are 62×62px circular SVGs. No icon library — custom SVG assets from `/public/images/`.
