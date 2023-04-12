import { Router } from "express";

export const usersRouter = Router();

usersRouter.get("");

usersRouter.get("/:id");

usersRouter.post("");

usersRouter.patch("/:id");

usersRouter.delete("/:id");
