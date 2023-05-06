import express, { Application } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import { handleError } from "./errors/handleError";
import {
  announcementsRouter,
  commentsRouter,
  sessionsRouter,
  usersRouter,
} from "./routes";

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/sessions", sessionsRouter);
app.use("/comments", commentsRouter);
app.use("/announcements", announcementsRouter);

app.use(handleError);
