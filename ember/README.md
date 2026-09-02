# Ember 6.12 shell

Octane/Glimmer rewrite of the historical Ember 2.11 app. Encyclopedia fixtures and SVG layout math stay in `../app/` and are imported as the source of truth — the same files the Vite app in `../web/` uses.

This app is **not** what Netlify deploys. Production is `web/` (see repo-root `netlify.toml`).

## Prerequisites

Node.js 20.19+ (ember-cli 6.12 engines). npm 10+.

## Commands

```bash
cd ember
npm install          # or: npm ci
npm start            # http://localhost:4200
```

```bash
npm test             # vite build --mode development && ember test --path dist
```

```bash
npm run build        # production build in ember/dist
```

The Vite encyclopedia is a sibling:

```bash
cd ../web
npm install
npm run dev          # http://localhost:5173
npm test             # Vitest path snapshots + Playwright viz CI
```
