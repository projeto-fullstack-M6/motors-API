import { z } from "zod";
import { userResponseSerializer } from "./users.serializer";

export const createAnnouncementSerializer = z.object({
  brand: z.string().min(2).trim(),
  model: z.string().min(2).trim(),
  year: z.number().min(4),
  fuel: z.string().min(2).trim(),
  km: z.number().min(2),
  color: z.string().min(2).trim(),
  fipePrice: z.string().min(2).trim(),
  price: z.string().min(2).trim(),
  description: z.string().trim().nullable().optional(),
  isGoodToSale: z.boolean(),
});

export const announcementResponseSerializer =
  createAnnouncementSerializer.extend({
    id: z.string().uuid(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: userResponseSerializer,
  });

export const updateAnnouncementSerializer =
  createAnnouncementSerializer.partial();
