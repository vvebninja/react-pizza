import z from 'zod';

const SafeUrl = z.string().refine(val => {
  try {
    return Boolean(new URL(val));
  } catch {
    return false;
  }
}, 'Invalid URL');

const DoughOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  extraPrice: z.number(),
  isAvailable: z.boolean(),
});

const SizeOptionSchema = z.object({
  id: z.string(),
  value: z.number(),
  extraPrice: z.number(),
  isAvailable: z.boolean(),
});

export const PizzaSchema = z.object({
  id: z.string(),
  imgSrc: SafeUrl,
  title: z.string(),
  price: z.number(),
  options: z.object({
    dough: z.array(DoughOptionSchema),
    sizes: z.array(SizeOptionSchema),
  }),
});

export type Pizza = z.infer<typeof PizzaSchema>;

export type DoughOption = Pizza['options']['dough'][number];

export type SizeOption = Pizza['options']['sizes'][number];
