import {
  defineCollection,
  z,
} from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const notes = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    private: z.boolean().optional(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const links = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
  }),
});

export const collections = { blog, notes, links };
