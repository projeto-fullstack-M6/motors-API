import appDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { ICommentsResponse } from "../../interfaces";

export const listCommentsService = async (): Promise<ICommentsResponse[]> => {
  const commentsRepository = appDataSource.getRepository(Comments);

  const commentsFound = await commentsRepository.find({
    relations: {
      user: {
        address: true,
      },
      announcement: true,
    },
    select: {
      user: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        cellPhone: true,
        isBuyer: true,
        address: {
          id: true,
        },
      },
    },
  });

  return commentsFound;
};
