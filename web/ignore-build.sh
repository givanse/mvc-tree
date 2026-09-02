#!/bin/sh
# Netlify ignore command. Runs from the base directory (web/).
# Exit 0 = skip the build (save credits). Exit 1 = proceed.
# Official: ignore does not cancel a build triggered by a build hook, regardless
# of exit code. INCOMING_HOOK_URL is still checked if that ever changes.
# UI "Trigger deploy" / "Deploy site" still run ignore. "Clear cache and deploy
# site" typically has CACHED_COMMIT_REF == COMMIT_REF (treat as intentional).

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
