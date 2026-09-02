# Local setup (2026)

The README still describes the 2016 toolchain (Node 4/6, stock npm, PhantomJS). That path does **not** work anymore. Use this file.

## Versions that install and serve

| Tool | Version |
| --- | --- |
| Node | 14.21.3 (see `.nvmrc`) |
| npm | 8.19.4 |
| Bower | 1.8.8 |
| ember-cli | 2.11.0-beta.1 (pinned in `package.json`) |

Do **not** bump Ember/ember-cli to “fix” install. The original stack still runs; only the **installer** and a republished transitive dep need a newer Node/npm.

## Why README Node 4/6 + npm 3 cannot install

`npm install` with Node 6.17.1 + npm 3.10.10 fails:

```text
Unsupported URL Type: npm:wrap-ansi@^7.0.0
```

Caret ranges now resolve packages (`glob@10` / `@isaacs/cliui`) that use `npm:` aliases. npm 3 cannot parse those.

## Why Node 6 cannot serve after a successful npm 8 install

`ember serve` on Node 6.17.1 then dies with:

```text
SyntaxError: Unexpected token *
    at .../node_modules/mktemp/dist/unique_name.cjs
```

`ember-cli` → `broccoli-builder` → `quick-temp@0.1.9` now depends on `mktemp@^2.0.1` (`mktemp@2.0.4` uses `**` and declares engines Node 20+). That is a republished 0.1.x, not a reason to upgrade Ember.

## Commands (clean clone)

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
./node_modules/.bin/ember test
```

Tests launch **Chrome** (testem 1.18.5 has no `ChromeHeadless` launcher). In CI, Chrome is started with `--headless --no-sandbox --disable-gpu --disable-dev-shm-usage`. Locally, `ember test` also uses the CI Testem mode, so the same flags apply. You need Google Chrome or `google-chrome-stable` on `PATH`.

PhantomJS is not supported. Do not re-add it; it hangs on this stack.

## Watchman

Optional. If missing, Ember CLI warns and falls back to polling.
