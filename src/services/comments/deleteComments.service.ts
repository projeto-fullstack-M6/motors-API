import appDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/AppErrors";

export const deleteCommentsService = async (commentId: string) => {
  const commentRepository = appDataSource.getRepository(Comments);
  const foundComment = await commentRepository.findOneBy({ id: commentId });

  if (!foundComment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.delete(commentId);
};
