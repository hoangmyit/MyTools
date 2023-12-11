import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  base: './',
  build: {
    chunkSizeWarningLimit: 50000
  },
  server: {
    host: true,
  }
});
