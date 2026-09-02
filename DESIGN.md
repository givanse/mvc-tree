# MVC Tree

General design of the application.

Encyclopedia content and SVG layout math live at the repo root in `app/` and are imported by both shells:

* `web/` — static Vite app (production / Netlify)
* `ember/` — Ember 7.1 Octane/Glimmer companion

## Layout

`app/lib/svg-layout` is Ember-free. Path-factory and grid geometry must not be rewritten.

`app/jsons` holds JSON:API fixtures (patterns, technologies, headers, columns). Both shells hydrate them into plain objects and call `computeNodeGeometry`.

## Ember 7.1 shell

* `ember/app/utils/tree-data.js` — fixture hydration (same algorithm as `web/src/data.js`)
* `ember/app/components/root-svg.gjs` — SVG tree (Glimmer, not `tagName: 'svg'`)
* `ember/app/services/overlays.js` — overlay checkbox state
* Article copy is rendered from Handlebars strings (`link-to-blank` → `<a target="_blank">`)
