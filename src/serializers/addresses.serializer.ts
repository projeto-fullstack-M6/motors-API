import { z } from "zod";
import { userResponseSerializer } from "./users.serializer";

export const createAddressSerializer = z.object({
  zipcode: z.string().min(8).max(8).trim(),
  state: z.string().min(2).trim(),
  city: z.string().min(2).trim(),
  street: z.string().min(2).trim(),
  number: z.string().min(1).trim(),
  complement: z
    .string()
    .nullable()
    .optional()
    .transform((value) => (value === null ? "" : value)),
});

export const addressResponseSerializer = createAddressSerializer.extend({
  id: z.string().uuid(),
  user: userResponseSerializer,
});

export const updateAddressSerializer = createAddressSerializer.partial();
