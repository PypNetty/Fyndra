import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup/index.html"),
        content: resolve(__dirname, "src/content/content.ts"),
        background: resolve(__dirname, "src/background/index.ts"), // <-- AJOUT ICI
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "popup") return "popup/index.js";
          if (chunkInfo.name === "content") return "assets/content.js";
          if (chunkInfo.name === "background") return "background/index.js";
          return "[name].js";
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        preserveModules: false,
      },
    },
  },
});
