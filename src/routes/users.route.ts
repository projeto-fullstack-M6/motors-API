import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUserOwnProfileController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { AuthMiddleware, isAdmMiddleware } from "../middlewares";
import { ensureIsYourOwnProfileOrIsAdmMiddleware } from "../middlewares/users/ensureIsYourOwnProfileOrIsAdm.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/users/ensureUserExists.middleware";

export const usersRouter = Router();

usersRouter.get("", AuthMiddleware, isAdmMiddleware, listUsersController);

usersRouter.get(
  "/:id",
  ensureUserExistsMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  listOneUserController
);

usersRouter.get("/own/profile", AuthMiddleware, listUserOwnProfileController);

usersRouter.post("", createUserController);

usersRouter.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  updateUserController
);

usersRouter.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  deleteUserController
);
