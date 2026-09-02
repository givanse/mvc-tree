import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(root, '..');

export default defineConfig({
  root,
  publicDir: 'public',
  base: '/',
  resolve: {
    alias: {
      '@svg-layout': resolve(repoRoot, 'app/lib/svg-layout'),
      '@jsons': resolve(repoRoot, 'app/jsons'),
      '@templates': resolve(repoRoot, 'app/templates')
    }
  },
  server: {
    fs: {
      allow: [repoRoot]
    }
  },
  preview: {
    port: 4173,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html')
      }
    }
  },
  test: {
    include: ['tests/**/*.test.js']
  }
});
