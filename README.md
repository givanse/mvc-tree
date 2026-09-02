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

The live site is [https://mvc.givan.se](https://mvc.givan.se) on Netlify.

Netlify builds the Vite app in `web/` (`npm ci && npm run build`) and publishes `web/dist` (`dist` when the build base is `web`). Repo config is [`netlify.toml`](netlify.toml). GitHub Actions still runs tests and may upload a `site` artifact; it does not publish.

See [DEV_SETUP.md](DEV_SETUP.md) for the Node versions, the Ember legacy path, and CI details.
