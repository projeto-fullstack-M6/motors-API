import { Request, Response } from "express";
import { ICommentsRequest } from "../interfaces";
import {
  createCommentsService,
  listCommentsService,
} from "../services/comments";
import { updateCommentsService } from "../services/comments/updateComments.service";
import { deleteCommentsService } from "../services/comments/deleteComments.service";

export const createCommentsController = async (req: Request, res: Response) => {
  const commentsData: ICommentsRequest = req.body;
  const userId: string = req.user.id;
  const announcementsId: string = req.params.id;
  const comment = await createCommentsService(
    commentsData,
    userId,
    announcementsId
  );
  return res.status(201).json(comment);
};

export const listCommentsController = async (req: Request, res: Response) => {
  const announcementsId: string = req.params.id;
  const comment = await listCommentsService(announcementsId);
  return res.json(comment);
};

export const updateCommentsController = async (req: Request, res: Response) => {
  const commentsData: ICommentsRequest = req.body;
  const commentId: string = req.params.id;
  const comment = await updateCommentsService(
    commentsData,
    commentId
  );
  return res.status(200).json(comment);
};

export const deleteCommentsController = async (req: Request, res: Response) => {
  const commentId: string = req.params.id;
  const comment = await deleteCommentsService(commentId);
  return res.status(204).json(comment);
};