import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    current: z.boolean().default(false),
    technologies: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  experience,
};
