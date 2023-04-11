import { Router } from "express";
import {
  createAnnouncemnetsController,
  deleteAnnouncementController,
} from "../controllers/announcements.controller";
import { AuthMiddleware } from "../middlewares";
import { ensureAnnoucementExistsMiddleware } from "../middlewares/announcement/ensureAnnouncementExists.middleware";
import { ensureAnnoucementItsActiveMiddleware } from "../middlewares/announcement/ensureAnnouncementItsActive.middleware";

export const announcementsRouter = Router();

announcementsRouter.get("");
announcementsRouter.get("/:id");
announcementsRouter.post("", AuthMiddleware, createAnnouncemnetsController);
announcementsRouter.patch("/:id");
announcementsRouter.delete(
  "/:id",
  AuthMiddleware,
  ensureAnnoucementItsActiveMiddleware,
  ensureAnnoucementExistsMiddleware,
  deleteAnnouncementController
);
