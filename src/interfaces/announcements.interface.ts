import { z } from "zod";
import {
  announcementResponseSerializer,
  createAnnouncementSerializer,
  updateAnnouncementSerializer,
} from "../serializers/announcements.serializer";

type IAnnoucementRequest = z.infer<typeof createAnnouncementSerializer>;
type IAnnoucementResponse = z.infer<typeof announcementResponseSerializer>;
type IAnnoucementUpdate = z.infer<typeof updateAnnouncementSerializer>;

export { IAnnoucementRequest, IAnnoucementResponse, IAnnoucementUpdate };
