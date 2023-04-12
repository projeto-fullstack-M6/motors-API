import { Router } from "express";
import { createAnnouncemnetsController } from "../controllers/announcements.controller";
import { AuthMiddleware } from "../middlewares";

export const announcementsRouter = Router();

announcementsRouter.get("");
announcementsRouter.get("/:id");
announcementsRouter.post("", AuthMiddleware, createAnnouncemnetsController);
announcementsRouter.patch("/:id");
announcementsRouter.delete("/:id");
