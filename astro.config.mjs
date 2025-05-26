// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://olinelson.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
  build: {
    format: "file",
  },
});
