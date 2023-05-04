import { Router } from "express";
import {
  createAnnouncemnetsController,
  deleteAnnouncementController,
  listAllSpecifUserAnnouncementsController,
  listAnnouncementController,
  listOneAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcements.controller";
import { AuthMiddleware } from "../middlewares";
import { ensureAnnoucementExistsMiddleware } from "../middlewares/announcement/ensureAnnouncementExists.middleware";
import { ensureAnnoucementItsActiveMiddleware } from "../middlewares/announcement/ensureAnnouncementItsActive.middleware";
import { verifyCarGoodSaleMiddleware } from "../middlewares/announcement/verifyCarGoodSale.middleware";

export const announcementsRouter = Router();

announcementsRouter.get("", AuthMiddleware, listAnnouncementController);

announcementsRouter.get(
  "/:id",
  AuthMiddleware,
  ensureAnnoucementItsActiveMiddleware,
  ensureAnnoucementExistsMiddleware,
  listOneAnnouncementController
);

announcementsRouter.get(
  "/user/specif",
  AuthMiddleware,
  listAllSpecifUserAnnouncementsController
);

announcementsRouter.post(
  "",
  AuthMiddleware,
  verifyCarGoodSaleMiddleware,
  createAnnouncemnetsController
);

announcementsRouter.patch(
  "/:id",
  AuthMiddleware,
  ensureAnnoucementItsActiveMiddleware,
  ensureAnnoucementExistsMiddleware,
  updateAnnouncementController
);

announcementsRouter.delete(
  "/:id",
  AuthMiddleware,
  ensureAnnoucementItsActiveMiddleware,
  ensureAnnoucementExistsMiddleware,
  deleteAnnouncementController
);
