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

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/work" }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    order: z.number().default(0),
    public: z.boolean().default(true),
    stack: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    appType: z.string().optional(),
    liveUrl: z.string().optional(),
    liveLabel: z.string().optional(),
  }),
});

export const collections = { blog, work };
