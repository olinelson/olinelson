# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal site and blog (olinelson.com) built with Astro 5, deployed as a static
site to GitHub Pages. The package manager is **bun** (`bun.lock` is committed).

## Commands

```bash
bun install          # install deps
bun run dev          # local dev server (astro dev)
bun run build        # production build to dist/
bun run preview      # serve the built dist/ locally
```

There are no tests, linters, or formatters configured.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml` (`withastro/action@v3` →
`actions/deploy-pages`), which builds and publishes to GitHub Pages. `public/CNAME`
holds the custom domain. There is no separate staging environment — `master` is live.

## Architecture

- **Styling**: Tailwind CSS v4 wired through the Vite plugin (`@tailwindcss/vite`), not
  a config file. `src/assets/app.css` is the single entry stylesheet and declares the
  daisyUI v5 plugin plus the custom `olinelson` theme (referenced as
  `data-theme="olinelson"` in `default.astro`). Use daisyUI component classes
  (`menu`, `card`, `collapse`, `avatar`, etc.) — they are the established convention here.
- **Client JS**: Hotwired Stimulus. `src/scripts/application.js` auto-registers every
  `src/scripts/controllers/*_controller.js` via `import.meta.glob`. To add behavior,
  drop a new `<name>_controller.js` and reference it with `data-controller="<name>"` —
  no manual registration needed.
- **Layouts/pages**: `src/pages/index.astro` is the homepage (the bulk of the site);
  blog pages live under `src/pages/words/`. All compose `layouts/default.astro` (html
  shell + nav + Stimulus bootstrap) which pulls in `layouts/head.astro` (meta, Plausible
  analytics, RSS autodiscovery, app.css) and a `seo` slot fed by
  `components/seo/index.astro` (uses `astro-seo`; accepts optional `title`/`description`/
  `canonical`/`type` props, defaulting to the homepage values).
- **Icons**: each SVG is its own `.astro` component under `src/icons/`.

## Blog

Posts are local Markdown in `src/data/words/*.md`, loaded via the `blog` content
collection (`src/content.config.ts`; frontmatter: `title`, `published` (date),
`public` (bool, default true), `preview`). Migrated off hey.com — the build no longer
hits the network for content.

- **Homepage list**: `components/blogsList.astro` reads the collection, shows the 5
  newest, links to `/words/<slug>.html`, plus an "All writing" link to the index.
- **Index**: `src/pages/words/index.astro` lists every post (emitted as `/words.html`).
- **Post pages**: `src/pages/words/[slug].astro` renders each post with
  `@tailwindcss/typography` (`prose`) + Shiki (`github-light`) highlighting; the prose is
  themed via CSS-var overrides in that file's `<style is:global>`.
- **Images**: stored under `public/words/<slug>/`, referenced with absolute `/words/...`
  paths.
- **RSS**: `src/pages/feed.xml.js` emits a **full-content** feed at `/feed.xml` — renders
  each post via the Astro Container API, sanitized with `sanitize-html`, image/link URLs
  absolutized. Autodiscovery `<link>` is in `layouts/head.astro`.

**Add a post**: drop a `.md` into `src/data/words/` with the frontmatter above, commit,
push. Set `public: false` to keep a draft out of the list/index/feed.

The one-off importer that pulled the original hey.com posts is parked at
`scripts/import-hey.mjs` (uses the `turndown` devDependency); it is not part of the build.

## Conventions

- Astro is configured with `build.format: "file"` — pages emit as `foo.html`, not
  `foo/index.html`. Keep internal links consistent with that.
- TypeScript is `astro/tsconfigs/strict`.
- `site` is set to `https://olinelson.com` in `astro.config.mjs`; the sitemap
  integration and absolute SEO/OG image URLs depend on it.
