#!/bin/bash

set -euo pipefail

# Local fallback for the GitHub Action that publishes web/dist to gh-pages.
# CI (push to master) is the supported deploy path.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/web"

if ! command -v npm >/dev/null; then
  echo "npm is required. Use Node 20 or 22 (see DEV_SETUP.md)." >&2
  exit 1
fi

npm ci
npm run build

ghPagesFolderPath="$ROOT/../mvc-tree-gh-pages"

rm -rf "$ghPagesFolderPath"
mkdir -v "$ghPagesFolderPath"

cd "$ghPagesFolderPath"
git init
git remote add origin git@github.com:givanse/mvc-tree.git
git checkout -b gh-pages

cd "$ROOT"
echo -e '\n>> copy new'
cp -Rv web/dist/. "$ghPagesFolderPath"
# Vite copies web/public/CNAME into dist/; keep it at the branch root.
cd "$ghPagesFolderPath"

git add -A .

git commit -m 'automated deploy' --author 'deploy-gh-pages <givanse@gmail.com>'

git push -u -f origin gh-pages
