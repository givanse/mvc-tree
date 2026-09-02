#!/bin/sh
# Netlify ignore command. Runs from the base directory (web/).
# Exit 0 = skip the build (save credits). Exit 1 = proceed.
#
# Intentional ship is not this script:
#   - `netlify deploy --prod --dir=dist` from web/ after `npm run build`
#     (CLI file upload; ignore does not run)
#   - a build hook (official: ignore does not cancel hooks, regardless of
#     exit code). INCOMING_HOOK_URL is still checked if that ever changes.
#
# Git auto-builds: skip deploy-preview and branch-deploy; skip production
# git-push. Path ignore is a leftover-context safety net (honors base=web).

if [ "$CONTEXT" = "deploy-preview" ] || [ "$CONTEXT" = "branch-deploy" ]; then
  exit 0
fi

if [ -n "$INCOMING_HOOK_URL" ] || [ "$CACHED_COMMIT_REF" = "$COMMIT_REF" ]; then
  exit 1
fi

# Production git-push auto-deploys never ship.
if [ "$CONTEXT" = "production" ]; then
  exit 0
fi

# Leftover auto context (missing/wrong CONTEXT): skip unless site paths changed.
# Paths are relative to web/ (base = "web"). Also watch Vite alias sources and toml.
git diff --quiet "$CACHED_COMMIT_REF" "$COMMIT_REF" \
  . \
  ../app/jsons \
  ../app/lib/svg-layout \
  ../app/templates \
  ../netlify.toml
