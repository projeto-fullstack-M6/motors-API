import { z } from "zod";
import { userResponseSerializer } from "./users.serializer";

export const createAddressesSerializer = z.object({
  zipcode: z.string().min(8).max(8).trim(),
  state: z.string().min(2).trim(),
  city: z.string().min(2).trim(),
  street: z.string().min(2).trim(),
  number: z.string().min(1).trim(),
  complement: z.string().trim().nullable(),
});

export const addressesResponseSerializer = createAddressesSerializer.extend({
  id: z.string().uuid(),
  user: userResponseSerializer,
});

export const updateAddressesSerializer = createAddressesSerializer.partial();
