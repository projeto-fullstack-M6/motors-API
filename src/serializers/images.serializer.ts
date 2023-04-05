import { z } from "zod";
import { announcementResponseSerializer } from "./announcements.serializer";

export const createImageSerializer = z.object({
  image: z.string().trim().min(15),
});

export const imageResponseSerializer = createImageSerializer.extend({
  id: z.string().uuid(),
  announcement: announcementResponseSerializer,
});

export const updateImageSerializer = createImageSerializer.partial();
