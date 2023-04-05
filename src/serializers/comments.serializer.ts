import { z } from "zod";
import { userResponseSerializer } from "./users.serializer";
import { announcementResponseSerializer } from "./announcements.serializer";

export const createCommentsSerializer = z.object({
  complement: z.string().trim().min(15),
});

export const commentsResponseSerializer = createCommentsSerializer.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: userResponseSerializer,
  announcement: announcementResponseSerializer,
});

export const updateCommentsSerializer = createCommentsSerializer.partial();
