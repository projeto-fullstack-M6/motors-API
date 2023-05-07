import { ICommentsRequest, ICommentsResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { Users } from "../../entities/users.entity";
import { Announcements } from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppErrors";

export const updateCommentsService = async (
  commentsData: ICommentsRequest,
  commentId: string
): Promise<ICommentsResponse> => {
  const commentsRepository = appDataSource.getRepository(Comments);

  const foundComment = await commentsRepository.findOne({
    where: { id: commentId },
  });

  if (!foundComment) {
    throw new AppError("Comment not found!", 404);
  }

  const comment = commentsRepository.create({
    ...foundComment,
    ...commentsData,
  });
  await commentsRepository.save(comment);

  return comment;
};
