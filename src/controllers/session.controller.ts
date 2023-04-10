import { Request, Response } from "express";
import { sessionService } from "../services/sessions/session.service";

export const sessionController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await sessionService(email, password);
  return res.status(200).json({ token: token });
};
