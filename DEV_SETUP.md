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

GitHub Actions (`.github/workflows/ci.yml`) on **push to `master`**:

1. Node 22, `cd web && npm ci`
2. Playwright Chromium + `npm test`
3. `npm run build`
4. Publish `web/dist` to `gh-pages` with CNAME `mvc.givan.se`

The Action uses `GITHUB_TOKEN` (no extra secrets). The repo’s GitHub Pages source should be the `gh-pages` branch.

Local fallback: `./bin/deploy-gh-pages.sh` (builds `web/`, force-pushes `gh-pages`). Prefer the Action.

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
