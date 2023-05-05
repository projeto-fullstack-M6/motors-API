import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUserOwnProfileController,
  listUsersController,
  updateUserController,
  sendResetEmailController,
  resetPasswordController,
} from "../controllers/users.controller";
import { AuthMiddleware, isAdmMiddleware } from "../middlewares";
import { ensureIsYourOwnProfileOrIsAdmMiddleware } from "../middlewares/users/ensureIsYourOwnProfileOrIsAdm.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/users/ensureUserExists.middleware";

export const usersRouter = Router();

usersRouter.get("", AuthMiddleware, isAdmMiddleware, listUsersController);

usersRouter.get(
  "/:id",
  AuthMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  ensureUserExistsMiddleware,
  listOneUserController
);

usersRouter.get("/own/profile", AuthMiddleware, listUserOwnProfileController);

usersRouter.post("", createUserController);

usersRouter.patch(
  "/:id",
  AuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  updateUserController
);

usersRouter.delete(
  "/:id",
  AuthMiddleware,
  ensureUserExistsMiddleware,
  ensureIsYourOwnProfileOrIsAdmMiddleware,
  deleteUserController
);

usersRouter.post("/reset-password", sendResetEmailController);

usersRouter.post("/reset-password/:token", resetPasswordController);
