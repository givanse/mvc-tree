# MVC Tree

[![CI](https://github.com/givanse/mvc-tree/actions/workflows/ci.yml/badge.svg)](https://github.com/givanse/mvc-tree/actions/workflows/ci.yml)

[mvc.givan.se](http://mvc.givan.se/)

A chronological visualization of the family of MVC patterns.

The **site** is a static Vite app in `web/`. Encyclopedia content and SVG layout math stay in `app/` and are imported as the source of truth:

* `app/jsons` — JSON:API fixtures (patterns, technologies, headers, columns)
* `app/templates/dpatterns` and `app/templates/technologies` — article copy
* `app/lib/svg-layout` — path-factory and grid geometry (do not rewrite the path algorithm)

The Ember 2.11 app remains in-tree as a historical shell. It is **not** what you run or deploy.

## Prerequisites

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) 20 or 22 (with npm)

## Installation

```
git clone <repository-url>
cd mvc-tree/web
npm install
```

## Running / Development

```
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

Production-mode preview (what CI tests and Netlify serve):

```
npm run build
npm run preview
```

Visit [http://localhost:4173](http://localhost:4173).

### Tests

From `web/`:

* `npm test` — Vitest path snapshots + Playwright viz CI
* `npm run test:unit` — path `d` snapshots and Handlebars port
* `npm run test:e2e` — Playwright (builds and serves `web/dist`)

### Deploy

The live site is [https://mvc.givan.se](https://mvc.givan.se) on **Netlify**.

**[`netlify.toml`](netlify.toml) is the source of truth:** Base directory `web`, command `npm ci && npm run build` (or `npm run build` if install is separate), publish `dist` (i.e. `web/dist`), `NODE_VERSION` 24.

**Netlify Site UI Build settings override the file.** If the UI still has Build command `ember build -e production` and Publish directory `dist/` (repo-root Ember), the live site never leaves Ember. Clear those fields so the toml applies, **or** set the UI to match: Base `web`, command `npm run build`, publish `dist`.

A deploy can fail at “preparing repo” with `git@github.com Permission denied (publickey)`. That is a stale Netlify SSH deploy key, not Ember vs Vite. Unlink and relink `givanse/mvc-tree` in the site’s Git/GitHub settings. The live site stays Ember until clone works.

GitHub Actions still runs tests and may upload a `site` artifact; it does not publish.

See [DEV_SETUP.md](DEV_SETUP.md) for the Node versions, the Ember legacy path, and CI details.
