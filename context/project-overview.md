# The Cerealist — Project Overview

## Overview

The Cerealist is a subscription-based artisan cereal brand that delivers a monthly "edition" of cereal packaged with original editorial content — newspaper-style cartoons, headlines, and opinion columns printed on/with each box. Positioned as "The Morning Paper, Now on Cereal," it targets adults who grew up with cereal culture and still enjoy it. The website is a marketing and e-commerce landing page that converts visitors into subscribers via a two-step plan selection flow, then hands off checkout to Shopify.

## Goals

1. Convert landing page visitors into subscribers via a clear, compelling two-step subscription flow
2. Communicate the editorial/cultural identity of the brand through newspaper-style layout and copy
3. Allow one-time purchase ("Just This Issue") alongside monthly subscription
4. Hand off all payment and fulfillment to Shopify — no custom checkout built here
5. Provide a contact channel ("Write to the Desk") for customer inquiries

## Core User Flow

1. User lands on homepage — sees hero headline, subheading, price, and "Get this Month's Issue" CTA
2. User clicks CTA → subscription modal opens (desktop) or navigates to full-screen step (mobile)
3. **Step 1 — Choose Plan**: Monthly Edition ($19.99/mo) vs. Just This Issue ($28.99)
4. **Step 2 — Pick Cereal**: Choose from 4 cereal options (Honey Rings, Fruit Crunch, Captain's Crunch, Cocoa Clusters), set quantity
5. User clicks "Checkout" → redirected to Shopify checkout
6. Fulfillment and payment handled entirely by Shopify

## Features

### Landing Page Sections

- **Masthead / Top Bar**: Vol. I · No. 1, brand wordmark "The Cerealist," Monthly Edition badge, price $19.99
- **Navigation**: Date (desktop left), CTAs (Subscribe + Get this Month's Issue), nav links (Home | Cartoons | Contact the Desk)
- **Hero**: Display headline, italic subheading, drop-cap body text with price, primary CTA buttons, rotated newspaper mockup image
- **Opinion / Editorial Section**: Full-bleed editorial article with section header, headline, pull quote, body text with drop cap, and cereal box image
- **Article Grid ("Inside This Month's Edition")**: 4-column grid with vertical dividers — Politics, Sports, The Funnies, Opinion article cards
- **Why Adults Love**: 3 feature cards with reasons (nostalgic breakfast, print culture, morning ritual)
- **Social Follow**: Row of 4 social icons (Facebook, Instagram, TikTok, X) + "Follow, post, & tag @theCerealist"
- **Footer**: Nav pills (Cereal, Granola, Contact the Desk), large wordmark, tagline "Cereal, Grown Up.", legal links, copyright

### Subscription Flow

- **Choose Plan Modal** (desktop overlay / mobile full-screen): Two plan cards — Monthly Edition and Just This Issue
- **Pick Cereal Modal** (desktop overlay / mobile full-screen): 2×2 grid of cereal options, Editor's Pick badge, quantity selector, cart summary, Checkout button → Shopify

### Product Detail

- Full-screen sheet with ingredients list and FDA-style nutrition facts table (accessible `<table>` markup)

### Contact Form ("Write to the Desk")

- Topic radio selector (7 options), From, Reply-To, Subject text fields, message textarea, Submit button

## Scope

### In Scope

- Marketing landing page with all sections listed above
- Desktop and mobile responsive layouts
- Two-step subscription selection flow (plan + cereal picker)
- Product detail / nutrition facts sheet
- Contact form (UI only — no backend email sending in v1)
- Shopify redirect for checkout (no custom payment processing)
- Accessible, semantic HTML throughout

### Out of Scope

- Custom checkout/payment — Shopify handles this entirely
- User accounts / login / order history
- CMS or content management for editorial articles
- Cartoons page (navigation link exists, page not built in v1)
- Backend email processing for contact form (v1 is UI only)
- Admin dashboard

## Success Criteria

1. A visitor can navigate from the homepage to the Shopify checkout by completing both subscription steps
2. All landing page sections are fully responsive — Figma references 1440px (desktop) and 375px (mobile) as design targets, but the layout scales fluidly across all viewport widths
3. Product detail nutrition facts renders as a proper accessible `<table>`
4. Contact form renders with all fields and radio options from the spec
5. `npm run build` passes with no TypeScript errors
6. All images include meaningful `alt` text; interactive elements have visible focus states
