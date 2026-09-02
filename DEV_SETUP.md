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

The live host is **https://mvc.givan.se** on Netlify. GitHub Actions does **not** deploy.

**Merging to `master` does not publish.** Production ships only on an intentional trigger (policy below).

**Deploy Previews are already off.** Web Dev confirmed this site has `skip_prs=true`. `[context.deploy-preview] ignore = "exit 0"` in `netlify.toml` (and the same for branch deploys) is belt-and-suspenders if that toggle is later flipped—not the only control. `web/ignore-build.sh` skips those contexts too.

### Leftover Netlify UI clicks (Gastón)

`skip_prs` is done. **Do not click anything to “lock” or stop auto builds.**

| Setting | Action |
| --- | --- |
| `skip_prs` / Deploy Previews | **None.** Already `true` (off). |
| `stop_builds` | **Do not touch.** Already false. Turning it on blocks Clear-cache UI deploys and hooks too. Leave Builds enabled. |
| Auto publishing on `master` git push | **Leave it on.** Ignore skips those production builds (`exit 0`). Do not lock deploys. |
| Site UI **Build settings** | **Stay empty or match toml** (UI still overrides the file): Base `web`, command `npm ci && npm run build`, publish `dist`, Node 24. If the UI still has `ember build -e production` / Publish `dist/`, clear those fields **or** set them to match. That is the only leftover settings check. |
| This merge | **None.** Ignore will skip; do not Trigger deploy just to land toml. |

**To actually publish** (not this merge): Deploys → Trigger deploy → **Clear cache and deploy site**, or a **build hook**. Plain “Deploy site” may still be skipped by ignore.

### How to ship

Netlify ignore **does** run for UI “Trigger deploy” / “Deploy site”. Plain **Deploy site** may still be skipped. Use:

1. Netlify UI → Deploys → Trigger deploy → **Clear cache and deploy site** (`CACHED_COMMIT_REF` equals `COMMIT_REF`, treated as intentional), or
2. A **Netlify build hook**. Official docs: ignore will **not** cancel a hook-triggered build, regardless of exit code.

Do not add a `workflow_dispatch` that needs a new secret. Optional later: store `NETLIFY_BUILD_HOOK` and trigger the hook from Actions.

### Build settings (UI vs toml)

**`netlify.toml` is the source of truth** (Site UI Build settings still override this file — leave those fields empty or match):

1. Base directory `web`
2. Command `npm ci && npm run build` (or `npm run build` if install is separate)
3. Publish `dist` (that is `web/dist` in the repo)
4. `NODE_VERSION` 24

**If the Netlify UI still has Build command `ember build -e production` and Publish directory `dist/`**, those fields win and the live site stays on a repo-root Ember app that no longer exists. Clear them so the toml applies, **or** set the UI to match: Base `web`, command `npm ci && npm run build`, publish `dist`.

A deploy can fail at “preparing repo” with `git@github.com Permission denied (publickey)`. That is a stale Netlify SSH deploy key, not Ember vs Vite. Unlink and relink `givanse/mvc-tree` in the site’s Git/GitHub settings.

No extra Netlify secrets are required for a static build. Do not add a GitHub Pages CNAME or publish via `gh-pages`.

### Ignore script (`web/ignore-build.sh`)

Ignore commands that reference a file must start with `./`. Ignore runs **from the base directory** (`web/`), so paths are relative to `web/`, not the repo root. `./ignore-build.sh` is set on `[build]`.

- Deploy Preview / branch-deploy: skip.
- Hook (`INCOMING_HOOK_URL`) or Clear-cache UI (`CACHED_COMMIT_REF` == `COMMIT_REF`): build.
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
