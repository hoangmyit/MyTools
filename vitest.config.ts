/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      reporter: ['html', 'lcov'],
    },
  },
  plugins: [react() as any]
});
