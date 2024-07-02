import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// ValidationSchema for inventory
const inventoryValidationSchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

// ValidationSchema for Product
const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

const productUpadateValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantValidationSchema).optional(),
  inventory: inventoryValidationSchema.optional(),
});

export  {productValidationSchema,productUpadateValidationSchema}