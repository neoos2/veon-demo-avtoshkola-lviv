// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The page is published under a sub-path (GitHub Pages) and opened from file://:
// make every built asset reference relative.
const relativeAssets = {
  name: "relative-assets",
  hooks: {
    "astro:build:done": ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const f of readdirSync(root).filter((n) => n.endsWith(".html"))) {
        const p = join(root, f);
        writeFileSync(p, readFileSync(p, "utf8").replace(/(["',\s(])\/_astro\//g, "$1./_astro/"));
      }
      const assets = join(root, "_astro");
      for (const f of readdirSync(assets).filter((n) => n.endsWith(".css"))) {
        const p = join(assets, f);
        writeFileSync(p, readFileSync(p, "utf8").replaceAll("url(/_astro/", "url("));
      }
    },
  },
};

export default defineConfig({
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  integrations: [relativeAssets],
});
