import { Request, Response } from "express";
import {
  announcementResponseSerializer,
  createAnnouncementSerializer,
} from "../serializers/announcements.serializer";
import {
  createAnnouncementsService,
  deleteAnnouncementService,
  listAnnouncementsService,
  listOneAnnouncementService,
  updateAnnouncementsService,
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

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcements = await listAnnouncementsService();
  return res.status(200).json(announcements);
};

export const listOneAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementId = req.params.id;
  const announcement = await listOneAnnouncementService(announcementId);
  return res.status(200).json(announcement);
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const updateAnnouncementData = req.body;
  const announcementId = req.params.id;
  const announcementUpdated = await updateAnnouncementsService(
    announcementId,
    updateAnnouncementData
  );
  return res.status(200).json(announcementUpdated);
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcementToDeleteId = req.params.id;
  await deleteAnnouncementService(announcementToDeleteId);
  return res.status(204).send();
};
