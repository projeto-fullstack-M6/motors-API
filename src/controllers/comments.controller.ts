import { Request, Response } from "express";
import { ICommentsRequest } from "../interfaces";
import { createCommentsService } from "../services/comments/createComments.service";

export const createCommentsController = async (req: Request, res: Response) => {
  const commentsData: ICommentsRequest = req.body;
  const userId: string = req.user.id;
  const announcementsId: string = req.params.id;
  const comment = await createCommentsService(commentsData, userId, announcementsId);
  return res.status(201).json(comment);
};
