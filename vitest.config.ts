// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Inject vi.fn() globals like describe/it/expect without imports
    globals: true,
    environment: 'node',
    // Run setup before each test file to inject KubeJS globals
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    typecheck: {
      tsconfig: './tsconfig.test.json',
    },
  },
});
