import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      "./packages/myfront/vitest.config.ts",
      "./packages/yourfront/vitest.config.ts",
    ],
  },
});
