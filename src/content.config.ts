import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/words" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    public: z.boolean().default(true),
    preview: z.string(),
  }),
});

export const collections = { blog };
