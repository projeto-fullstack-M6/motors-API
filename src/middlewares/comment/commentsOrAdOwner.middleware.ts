import { Request, Response, NextFunction } from "express";
import { Comments } from "../../entities/comments.entity";
import appDataSource from "../../data-source";
import { AppError } from "../../errors/AppErrors";

export const CommentsOrAdOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user.id;
  const commentId = req.params.id;

    const commentsRepository = appDataSource.getRepository(Comments);

    const foundComment = await commentsRepository.findOne({
        where: { id: commentId },
        relations: {
            announcement: { user: true },
            user: true
        },
        select: {
            announcement: {
                id: true,
                user: {
                    id: true
                }
            },
            user: {
                id: true
            }
        }
    })

    if (!foundComment) {
        throw new AppError("Comment not found.", 404);
    }

    if (foundComment.announcement.user.id !== userId && foundComment.user.id !== commentId) {
        throw new AppError("Action not allowed.")
    }

  next();
};
