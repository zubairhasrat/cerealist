# AI Workflow Rules — The Cerealist

## Approach

Build this project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against the feature specs in `context/feature-specs/` — do not infer or invent visual behavior that is not defined in the specs or `ui-specs.json`.

The Figma file key is `ltMOTU1hXnmANbJFStXAVp`. Refer to `context/ui-specs.json` for all design tokens, spacing, and component specs.

## Scoping Rules

- Work on one component or section at a time
- Prefer small, verifiable increments — one component per implementation step
- Do not combine multiple unrelated sections in a single implementation step
- Do not modify sections that are already working when implementing a new section
- Do not add features, animations, or interactions not specified in the feature spec

## When to Split Work

Split an implementation step if it combines:

- UI layout changes and Shopify integration logic
- Multiple independent page sections (e.g., Hero + ArticleGrid in one step)
- Behavior not clearly defined in the context files or feature spec

If a change cannot be visually verified at both desktop and mobile widths in one step, the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent copy, colors, or layout behavior not defined in `ui-specs.json` or the feature spec
- If a design detail is ambiguous, check the Figma file (`ltMOTU1hXnmANbJFStXAVp`) before inventing a solution
- If a requirement is still unclear after checking Figma and specs, add it as an open question in `progress-tracker.md` and stop — do not guess
- Never hardcode Shopify variant IDs — always use environment variables

## Protected Files

Do not modify the following unless explicitly instructed:

- `context/ui-specs.json` — source of truth for all design tokens and component specs
- `context/feature-specs/*.md` — spec files are authored by the human; do not auto-update them
- `.env.local` — environment variables are managed by the human

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- Architecture decisions → `context/architecture.md`
- New conventions established → `context/code-standards.md`
- Progress and completed units → `context/progress-tracker.md`

## Implementation Order

Build sections in this order to avoid dependency issues:

1. Globals (CSS variables, font loading, base layout)
2. Masthead
3. NavBar
4. Hero
5. OpinionSection + EditorialArticle
6. ArticleGrid
7. WhyAdultsLove
8. SocialFollow
9. Footer
10. SubscriptionFlow (ChoosePlanStep → PickCerealStep → Shopify redirect)
11. ProductDetailSheet + NutritionFacts
12. ContactForm
13. Mobile responsive pass for all sections

## Before Moving to the Next Unit

1. The current component is responsive across all screen sizes — verify at ~375px (small mobile), ~768px (tablet), and ~1280px+ (desktop). Figma's 1440px and 375px frames are reference points, not the only targets
2. No TypeScript errors in the component file
3. No hardcoded hex values — all colors use token classes or CSS variables
4. `next/image` is used for all images in the component
5. `progress-tracker.md` is updated to reflect the completed work
6. `npm run build` passes
