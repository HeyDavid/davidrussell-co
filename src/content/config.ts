import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    readTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(["published", "coming-soon"]).default("published"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
