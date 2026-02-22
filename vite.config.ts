import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      build: {
        outDir: 'docs',
        rollupOptions: {
          plugins: [
            {
              name: 'copy-404',
              closeBundle() {
                const out = path.resolve(__dirname, 'docs');
                const index = path.join(out, 'index.html');
                const fallback = path.join(out, '404.html');
                if (fs.existsSync(index)) fs.copyFileSync(index, fallback);
              },
            },
          ],
        },
      },
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
