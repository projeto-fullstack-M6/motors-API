import express, { Application } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import { handleError } from "./errors/handleError";
import { announcementsRouter, sessionsRouter, usersRouter } from "./routes";

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/sessions", sessionsRouter);
// app.use("/profile");
// app.use("/addresses");
// app.use("/comments");
app.use("/announcements", announcementsRouter);
// app.use("/images");

app.use(handleError);
