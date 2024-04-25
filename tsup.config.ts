import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/string.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
