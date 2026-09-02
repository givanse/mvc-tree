# Local setup (2026)

The published site is the **static Vite app** in `web/`. Use this file for versions and commands.

An Ember 7.1 companion lives in `ember/`. It imports the same `app/jsons` and `app/lib/svg-layout`. It does **not** deploy.

## Static app (primary)

| Tool | Version |
| --- | --- |
| Node | 20 or 22 |
| npm | 10+ (bundled with those Nodes) |
| App | Vite 6 in `web/` |

```bash
cd web
npm install          # or: npm ci
npm run dev          # http://localhost:5173
```

```bash
npm run build
npm run preview      # http://localhost:4173
```

```bash
npx playwright install chromium   # first time, for viz tests
npm test                          # vitest + Playwright
```

No Bower, no Ember CLI, no env vars. Overlay filters use `classList` on SVG groups (no jQuery). Clicking a tree node sets `location.hash` to the article’s DOM id (`#tmve`, not an Ember route).

Article copy is still the Handlebars files under `app/templates/{dpatterns,technologies}`. The Vite shell ports `{{link-to-blank}}` to `<a target="_blank">`. Layout math is imported from `app/lib/svg-layout` (path-factory, coordinates, grid-node, lines, environment).

Universal Analytics (`ember-cli-google-analytics` / `UA-47511141-2`) is not included in the static shell. Do not add GA4 unless asked.

## Deploy

The live host is **https://mvc.givan.se** (Netlify site **mvc**). GitHub Actions does **not** deploy. Do **not** set `stop_builds`.

**Merging to `master` does not publish.** Squash-merge with `[skip netlify]` in the merge commit message unless that merge is itself the intentional ship (it is not). Ignore is a belt; `[skip netlify]` is the merge-commit policy.

**Deploy Previews are already off** (`skip_prs=true`). `[context.deploy-preview] ignore = "exit 0"` (and the same for branch deploys) is belt-and-suspenders if that toggle is later flipped. Auto git publishing stays on; ignore skips those production builds.

### How to ship (CLI only)

Intentional ship is **`netlify deploy --prod`** or a **build hook**. Not the dashboard.

One-time (login persists; link once per clone):

```bash
netlify login
cd web
netlify link --name mvc    # or: netlify link --id <site-id>
netlify status             # confirm mvc / mvc.givan.se
```

Primary path — local Vite build, upload `dist` (ignore does not run):

```bash
cd web
npm run build
netlify deploy --prod --dir=dist
```

Alternative — build hook (official: ignore does **not** cancel a hook-triggered build). Create and trigger via CLI/API, not the dashboard:

```bash
netlify api listSiteBuildHooks --data '{"site_id":"<SITE_ID>"}'
netlify api createSiteBuildHook --data '{"site_id":"<SITE_ID>","body":{"title":"intentional ship","branch":"master"}}'
curl -X POST -d '{}' 'https://api.netlify.com/build_hooks/<HOOK_ID>'
```

`<SITE_ID>` comes from `netlify status` after `netlify link`. Do not add a `workflow_dispatch` that needs a new secret. Optional later: store `NETLIFY_BUILD_HOOK` and POST that URL from Actions.

### Build settings (`netlify.toml`)

**`netlify.toml` is the source of truth** for remote (git/hook) builds:

1. Base directory `web`
2. Command `npm ci && npm run build` (or `npm run build` if install is separate)
3. Publish `dist` (that is `web/dist` in the repo)
4. `NODE_VERSION` 24

If Site UI Build settings are filled, they override this file. Match them via `netlify api getSite` / `updateSite` if a hook build still uses `ember build`. The primary CLI upload path does not use those fields.

No extra Netlify secrets are required for a static build. Do not add a GitHub Pages CNAME or publish via `gh-pages`.

### Ignore script (`web/ignore-build.sh`)

Ignore commands that reference a file must start with `./`. Ignore runs **from the base directory** (`web/`), so paths are relative to `web/`, not the repo root. `./ignore-build.sh` is set on `[build]`.

- Deploy Preview / branch-deploy: skip.
- Hook (`INCOMING_HOOK_URL`): proceed (hooks also bypass ignore).
- Production git auto: always skip.
- Any other leftover auto context: `git diff` the Vite app plus the repo-root sources it imports (`../app/jsons`, `../app/lib/svg-layout`, `../app/templates`) and `../netlify.toml`. Quiet → skip.

GitHub Actions (`.github/workflows/ci.yml`) still runs tests on push and pull request:

1. Node 22, `cd web && npm ci`
2. Playwright Chromium + `npm test` (this also builds `web/dist`)
3. Uploads the `site` artifact (`web/dist`)
4. Parallel job: Node 22, `cd ember && npm ci && npm test`

CI does **not** deploy.

## Ember 7.1 (companion)

Octane/Glimmer app on ember-cli 7.1 (Embroider + Vite). Hopped 6.12 LTS → 7.0 (deprecation-removal major) → 7.1 stable.

| Tool | Version |
| --- | --- |
| Node | 20.19+ (see `ember/.nvmrc` / repo `.nvmrc`) |
| npm | 10+ |
| ember-source | ~7.1.0 |
| ember-cli | ~7.1.0 |
| ember-data | WarpDrive `@warp-drive/*` ~5.8.2 (7.1 blueprint default; the tree uses plain objects) |

```bash
cd ember
npm install          # or: npm ci
npm start            # http://localhost:4200
```

```bash
npm test             # vite build --mode development && ember test --path dist
```

No Bower. No Universal Analytics. Overlay filters use tracked state + the `hidden` class (no jQuery). Clicking a tree node sets `location.hash` to the article’s DOM id (`#tmve`).

Layout math is imported from `app/lib/svg-layout`. Fixtures come from `app/jsons`. Article copy is still `app/templates/{dpatterns,technologies}`; a Vite plugin loads those `.hbs` files as strings so Ember’s template compiler does not parse encyclopedia partials.

### Watchman

Optional. If missing, the Vite/Embroider stack falls back without it.
