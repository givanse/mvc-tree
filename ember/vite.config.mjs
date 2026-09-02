import { readdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(root, '..');

function loadHbsDir(dir) {
  const articles = {};
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.hbs')) {
      continue;
    }
    articles[name.replace(/\.hbs$/, '')] = readFileSync(
      resolve(dir, name),
      'utf8',
    );
  }
  return articles;
}

function encyclopediaArticlesPlugin() {
  const virtualId = 'virtual:encyclopedia-articles';
  const resolved = `\0${virtualId}`;

  return {
    name: 'encyclopedia-articles',
    resolveId(id) {
      if (id === virtualId) {
        return resolved;
      }
    },
    load(id) {
      if (id !== resolved) {
        return;
      }
      const dpatterns = loadHbsDir(
        resolve(repoRoot, 'app/templates/dpatterns'),
      );
      const technologies = loadHbsDir(
        resolve(repoRoot, 'app/templates/technologies'),
      );
      return `export const patternSources = ${JSON.stringify(dpatterns)};
export const technologySources = ${JSON.stringify(technologies)};`;
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      '@svg-layout': resolve(repoRoot, 'app/lib/svg-layout'),
      '@jsons': resolve(repoRoot, 'app/jsons'),
      '@deep-link': resolve(repoRoot, 'app/lib/deep-link.js'),
    },
  },
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
  plugins: [
    encyclopediaArticlesPlugin(),
    classicEmberSupport(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
