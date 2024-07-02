import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export default orderValidationSchema;