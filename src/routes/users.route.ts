import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { AuthMiddleware } from "../middlewares";

export const usersRouter = Router();

usersRouter.get("", AuthMiddleware, listUsersController);

usersRouter.get("/:id", listOneUserController);

usersRouter.post("", createUserController);

usersRouter.patch("/:id", updateUserController);

usersRouter.delete("/:id", deleteUserController);
