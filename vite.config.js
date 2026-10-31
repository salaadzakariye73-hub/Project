import { defineConfig } from 'vite';

// JSX is written inside .js files (App.js, index.js ...), so esbuild is told to treat
// src/**/*.js as JSX with the automatic runtime (no "import React" needed in components).
export default defineConfig({
  esbuild: {
    loader: 'jsx',
    jsx: 'automatic',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
  server: {
    port: 5173,
    // In development "/api" is forwarded to the Express server (no CORS needed)
    proxy: { '/api': { target: 'http://localhost:5000', changeOrigin: true } },
  },
});
