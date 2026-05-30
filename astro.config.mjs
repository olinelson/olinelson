// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Map each post slug -> ISO published date, read straight from frontmatter, so
// the sitemap can carry an accurate <lastmod> per post (freshness signal).
const wordsDir = fileURLToPath(new URL("./src/data/words", import.meta.url));
const postDates = Object.fromEntries(
  readdirSync(wordsDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const match = readFileSync(`${wordsDir}/${f}`, "utf8").match(
        /^published:\s*(.+)$/m,
      );
      return [
        f.replace(/\.md$/, ""),
        match ? new Date(match[1].trim()).toISOString() : undefined,
      ];
    }),
);

// https://astro.build/config
export default defineConfig({
  site: "https://olinelson.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      serialize(item) {
        const { origin, pathname } = new URL(item.url);

        const post = pathname.match(/^\/words\/([^/]+)\/?$/);
        if (post && postDates[post[1]]) item.lastmod = postDates[post[1]];

        // Match canonicals: this project builds with `build.format: "file"`.
        if (pathname !== "/" && !/\.(html|xml)$/.test(pathname)) {
          item.url = `${origin}${pathname.replace(/\/$/, "")}.html`;
        }
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  build: {
    format: "file",
  },
});
