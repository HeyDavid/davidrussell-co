# remotion/ — build-time social card renderer

**Nothing in this folder ships to davidrussell.co.**

The Astro site imports zero Remotion code. This is a separate npm package with
its own `node_modules`, run by hand on a laptop. Its only output is a set of
PNGs committed to `../public/og/`, which are served as ordinary static files
and fetched by link-preview crawlers — never by a browser rendering the page.
Page weight, JS bytes, and Lighthouse scores are unchanged.

## Why not the Remotion Player?

`@remotion/player` is a React component. Dropping it on the homepage would pull
in `react` + `react-dom` + the player — roughly 150 KB gzipped of runtime
JavaScript onto a site that currently ships a few KB of inline vanilla JS and
no framework at all. The hero already has a hand-written WebGL gradient that
costs ~2 KB. A Player embed would be a straight regression, so Remotion is used
here the way it's strongest: as an offline renderer.

## Setup

```bash
cd remotion
npm install
npx remotion browser ensure   # one-time ~113 MB Chrome Headless Shell download
```

## Render the cards

```bash
npm run og                        # every published (non-draft) essay
npm run og the-zombie-problem     # one post
```

Reads frontmatter straight out of `../src/content/writing/*.md` — title,
description, format, readTime, publishDate — so the card can never drift from
the post. Drafts are skipped. Output: `../public/og/<slug>.png` at 2400x1260.

`src/pages/writing/[...slug].astro` picks the card up automatically if the PNG
exists and falls back to `/og-2026.png` if it doesn't. Commit the PNGs.

## Design it

```bash
npm run studio
```

Opens Remotion Studio with live editable props. Brand tokens live in
`src/brand.ts` (sampled from `public/og-2026b.png`).

## Licensing

Remotion is free for individuals and companies up to three people; 4+ requires
a paid company licence (https://remotion.pro/license). Solo use here is covered
by the free licence.
