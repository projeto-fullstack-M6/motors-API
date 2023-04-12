import { z } from "zod";
import {
  addressResponseSerializer,
  createAddressSerializer,
} from "./addresses.serializer";

export const createUserSerializer = z.object({
  name: z.string().min(2).trim(),
  email: z.string().trim().email("Invalid email format").min(10),
  cpf: z.string().trim().min(11).max(11),
  cellPhone: z.string().trim().min(11),
  birthdate: z.string().trim().min(8),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/([a-z])/, "Must contain a lowercase")
    .regex(/(\d)/, "Must contain a number")
    .regex(/(\W)|_/, "Must contain a special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
  description: z.string().trim().nullable().optional(),
  isAdm: z.boolean().optional(),
  isBuyer: z.boolean().optional(),
  address: createAddressSerializer.nullable().optional(),
});

export const userResponseSerializer = createUserSerializer
  .extend({
    id: z.string().uuid(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

export const listUsersWithoutPassword = userResponseSerializer.array();

export const updateUserSerializer = createUserSerializer.partial();
