import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/restaurants' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    address: z.string(),
    neighborhood: z.string().optional(),
    phone: z.string(),
    website: z.string().optional(),
    instagram: z.string().optional(),
    priceRange: z.object({
      cartaAvg: z.number(),
      menuDegustacion: z.object({
        min: z.number(),
        max: z.number(),
      }).optional(),
    }),
    chef: z.object({
      name: z.string(),
      role: z.string().optional(),
    }),
    frontOfHouse: z.string().optional(),
    rating: z.number().min(0).max(10),
    ratingScale: z.number().default(8),
    yearEstablished: z.number().optional(),
    cuisine: z.array(z.string()),
    highlights: z.array(z.string()).optional(),
    images: z.object({
      hero: z.string(),
      gallery: z.array(z.string()).optional(),
    }),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { restaurants };
