import { Request, Response } from "express";
import {
  announcementResponseSerializer,
  createAnnouncementSerializer,
} from "../serializers/announcements.serializer";
import {
  createAnnouncementsService,
  deleteAnnouncementService,
} from "../services/announcements";

export const createAnnouncemnetsController = async (
  req: Request,
  res: Response
) => {
  const announcement = req.body;
  const userId = req.user.id;

  const newAnnouncement = await createAnnouncementsService(
    createAnnouncementSerializer.parse(announcement),
    userId
  );
  return res
    .status(201)
    .json(announcementResponseSerializer.parse(newAnnouncement));
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementToDeleteId = req.params.id;
  await deleteAnnouncementService(announcementToDeleteId);
  return res.status(204).send();
};
