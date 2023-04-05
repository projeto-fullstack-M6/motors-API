import { z } from "zod";
import { userResponseSerializer } from "./users.serializer";
import { announcementResponseSerializer } from "./announcements.serializer";

export const createCommentSerializer = z.object({
  text: z.string().trim().min(15),
});

export const commentResponseSerializer = createCommentSerializer.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: userResponseSerializer,
  announcement: announcementResponseSerializer,
});

export const updateCommentSerializer = createCommentSerializer.partial();
