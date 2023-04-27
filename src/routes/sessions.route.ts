import { Router } from "express";
import { sessionController } from "../controllers/session.controller";

export const sessionsRouter = Router();

sessionsRouter.post("", sessionController);
