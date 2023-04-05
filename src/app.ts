import express, { Application } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { handleError } from "./errors/handleError";
import { usersRouter } from "./routes/users.route";

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
// app.use("/login");
// app.use("/profile");
// app.use("/addresses");
// app.use("/comments");
// app.use("/announcement");
// app.use("/images");

app.use(handleError);
