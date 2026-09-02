# Local setup (2026)

The published site is the **static Vite app** in `web/`. Use this file for versions and commands.

The Ember 2.11 tree at the repo root still exists (Stage 0/1 layout extraction). Do **not** hop Ember to run or deploy the encyclopedia.

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

The live host is **https://mvc.givan.se** on Netlify.

**`netlify.toml` is the source of truth** (Site UI Build settings override this file):

1. Base directory `web`
2. Command `npm ci && npm run build` (or `npm run build` if install is separate)
3. Publish `dist` (that is `web/dist` in the repo)
4. `NODE_VERSION` 24

**If the Netlify UI still has Build command `ember build -e production` and Publish directory `dist/`**, those fields win and the live site stays on the repo-root Ember app. Clear them so the toml applies, **or** set the UI to match: Base `web`, command `npm run build`, publish `dist`.

A deploy can fail at “preparing repo” with `git@github.com Permission denied (publickey)`. That is a stale Netlify SSH deploy key, not Ember vs Vite. Unlink and relink `givanse/mvc-tree` in the site’s Git/GitHub settings. The live site stays Ember until clone works.

No extra Netlify secrets are required for a static build. Do not add a GitHub Pages CNAME or publish via `gh-pages`.

GitHub Actions (`.github/workflows/ci.yml`) still runs tests on push and pull request:

1. Node 22, `cd web && npm ci`
2. Playwright Chromium + `npm test` (this also builds `web/dist`)
3. Uploads the `site` artifact (`web/dist`)

CI does **not** deploy. The Ember job is legacy-only and does not publish.

## Ember 2.11 (legacy only)

Still used only if you need to compare against the old shell. It does **not** deploy.

| Tool | Version |
| --- | --- |
| Node | 14.21.3 (see `.nvmrc`) |
| npm | 8.19.4 |
| Bower | 1.8.8 |
| ember-cli | 2.11.0-beta.1 (pinned in root `package.json`) |

Do **not** bump Ember/ember-cli to “fix” install. The original stack still runs; only the **installer** and a republished transitive dep need a newer Node/npm.

### Why README Node 4/6 + npm 3 cannot install (Ember)

`npm install` with Node 6.17.1 + npm 3.10.10 fails:

```text
Unsupported URL Type: npm:wrap-ansi@^7.0.0
```

Caret ranges now resolve packages (`glob@10` / `@isaacs/cliui`) that use `npm:` aliases. npm 3 cannot parse those.

### Why Node 6 cannot serve after a successful npm 8 install

`ember serve` on Node 6.17.1 then dies with:

```text
SyntaxError: Unexpected token *
    at .../node_modules/mktemp/dist/unique_name.cjs
```

`ember-cli` → `broccoli-builder` → `quick-temp@0.1.9` now depends on `mktemp@^2.0.1` (`mktemp@2.0.4` uses `**` and declares engines Node 20+). That is a republished 0.1.x, not a reason to upgrade Ember.

### Ember commands (clean clone)

```bash
nvm install 14.21.3
nvm use 14.21.3
npm install -g npm@8.19.4
npm install -g bower@1.8.8

# GitHub no longer accepts git:// (Bower may still request it)
git config --global url."https://github.com/".insteadOf git://github.com/

git clone https://github.com/givanse/mvc-tree.git
cd mvc-tree
npm install          # or: npm ci  (after the lockfile is present)
bower install
./node_modules/.bin/ember serve
```

Visit **http://localhost:4200**. Live reload uses port **49153**. No env vars.

```bash
PATH="/usr/bin:$PATH" ./node_modules/.bin/ember test
```

Tests launch **Chrome** (testem 1.18.5 has no `ChromeHeadless` launcher). In CI, Chrome is started with `--headless --no-sandbox --disable-gpu --disable-dev-shm-usage`. Locally, `ember test` also uses the CI Testem mode, so the same flags apply. You need Google Chrome or `google-chrome-stable` on `PATH`.

If `google-chrome` on `PATH` is a wrapper that forces `--user-data-dir` / `--remote-debugging-port` (some cloud VMs do this), Testem can hang. Prefer the real binary:

```bash
PATH="/usr/bin:$PATH" ./node_modules/.bin/ember test
```

`ember-cli-build.js` imports `vendor/ember-shims.js`, which registers the AMD `ember` module. ember-cli 2.11 expects `ember-source.paths.shims`; ember-source 2.18 (what `^2.11` resolves to) does not export it. Without the shim, Chrome fails with `Could not find module ember`.

PhantomJS is not supported. Do not re-add it; it hangs on this stack.

### Watchman

Optional. If missing, Ember CLI warns and falls back to polling.
