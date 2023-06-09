import { any, z } from "zod";
import { userResponseSerializer } from "./users.serializer";

export const createAnnouncementSerializer = z.object({
  brand: z.string().min(2).trim(),
  model: z.string().min(2).trim(),
  year: z.string().min(4).optional(),
  fuel: z.string().min(2).trim().optional(),
  km: z.string().min(2),
  color: z.string().min(2).trim(),
  fipePrice: z.string().min(2).trim().optional(),
  price: z.string().min(2).trim(),
  description: z.string().trim().nullable().optional(),
  images: z.any().optional(),
});

export const announcementResponseSerializer =
  createAnnouncementSerializer.extend({
    id: z.string().uuid(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    isGoodToSale: z.boolean(),
    user: userResponseSerializer,
  });

export const severalAnnouncementsResponseSerializer =
  announcementResponseSerializer.array();

export const updateAnnouncementSerializer =
  createAnnouncementSerializer.partial();
