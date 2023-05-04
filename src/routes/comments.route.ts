import { Router } from "express";
import {
  createCommentsController,
  listCommentsController,
} from "../controllers/comments.controller";
import { AuthMiddleware } from "../middlewares";

export const commentsRouter = Router();

commentsRouter.post("/:id", AuthMiddleware, createCommentsController);

commentsRouter.get("/", listCommentsController);
