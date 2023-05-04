import { Router } from "express";
import { createCommentsController } from "../controllers/comments.controller";
import { AuthMiddleware } from "../middlewares";

export const commentsRouter = Router();

commentsRouter.post("/:id", AuthMiddleware, createCommentsController);
