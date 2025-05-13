import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    public: z.boolean(),
    preview: z.string(),
    published: z.string(),
  }),
});

export const collections = { blog };
