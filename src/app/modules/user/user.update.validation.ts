import { z } from 'zod';

const addressUpdateSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

const orderUpdateSchema = z.object({
  productName: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
});

const userUpdateValidationSchema = z.object({
  userId: z.number().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  fullName: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  }),
  age: z.number().optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: addressUpdateSchema.optional(),
  orders: z.array(orderUpdateSchema).optional(),
});

export default userUpdateValidationSchema;
