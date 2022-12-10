import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCompression({
      filter: `/\.(js|mjs|json|css|html)$/i`,
      verbose: true,
      threshold: 1025,
      algorithm: `gzip`,
      ext: `.gz`,
    }),
  ],
});
