import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'auth.html'),
        'dashboard-v3': resolve(__dirname, 'dashboard-v3.html'),
        indexv3: resolve(__dirname, 'indexv3.html'),
        indexv4: resolve(__dirname, 'indexv4.html'),
      },
    },
  },
  server: { host: '0.0.0.0', port: 5173 },
});
