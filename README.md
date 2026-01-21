# Sail Web Dev Archive

A minimal Astro site for hosting translated web development essays, styled with a calm, print-like layout. Content lives in an MDX collection and is built for Cloudflare Pages.

## Tech stack

- Astro 5 + MDX content collections
- TypeScript
- Cloudflare Pages adapter (Wrangler for local preview/deploy)

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` by default.

## Build & preview

```bash
npm run build
npm run preview
```

Cloudflare Pages preview:

```bash
npm run cf:preview
```

## Add a post

Create a new MDX file in `src/content/blog` with frontmatter that matches the schema in `src/content/config.ts`:

```mdx
---
title: Your title
description: Short summary
date: 2025-01-01
banner: ./image.jpg
tags:
  - Tag
---
```

- Images used by posts should live alongside the MDX file.
- The homepage highlights the latest post by date.

## Project structure

- `src/pages/index.astro`: homepage with latest post
- `src/pages/blog/[slug].astro`: blog post page
- `src/content/blog`: MDX entries and images
- `src/layouts/BaseLayout.astro`: global layout + styles
- `public/`: static assets

## Deploy

```bash
npm run cf:deploy
```

This runs an Astro build and deploys `dist/` to Cloudflare Pages via Wrangler.
