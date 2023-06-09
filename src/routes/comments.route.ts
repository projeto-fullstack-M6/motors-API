import { Router } from "express";
import {
  createCommentsController,
  deleteCommentsController,
  listCommentsController,
  updateCommentsController,
} from "../controllers/comments.controller";
import { AuthMiddleware } from "../middlewares";
import { CommentsOrAdOwnerMiddleware } from "../middlewares/comment/commentsOrAdOwner.middleware";

export const commentsRouter = Router();

commentsRouter.post("/:id", AuthMiddleware, createCommentsController);

commentsRouter.get("/:id", listCommentsController);

commentsRouter.patch(
  "/:id",
  AuthMiddleware,
  // CommentsOrAdOwnerMiddleware,
  updateCommentsController
);

commentsRouter.delete(
  "/:id",
  AuthMiddleware,
  // CommentsOrAdOwnerMiddleware,
  deleteCommentsController
);
