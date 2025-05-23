import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contentScript: resolve(__dirname, "src/contentScript.ts"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
  },
  base: "./",
});
