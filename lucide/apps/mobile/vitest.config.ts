import { defineConfig } from 'vitest/config';
import path from 'node:path';
export default defineConfig({
  resolve: { alias: { '@lucide/shared': path.resolve(__dirname, '../../packages/shared/src/index.ts'), '@': path.resolve(__dirname, 'src') } },
  test: { include: ['test/**/*.test.ts'] },
});
