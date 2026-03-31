import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    cidade: z.string().optional(),
    estado: z.string().default('Santa Catarina'),
    categoria: z.enum([
      'cidades-para-morar',
      'investimento-imobiliario',
      'custo-de-vida',
      'qualidade-de-vida',
      'trabalho-e-negocios',
    ]),
    populacao: z.number().optional(),
    preco_aluguel_medio: z.number().optional(),
    preco_m2_medio: z.number().optional(),
    idh: z.number().optional(),
    tags: z.array(z.string()).default([]),
    fontes: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
