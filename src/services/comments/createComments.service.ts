import { ICommentsRequest, ICommentsResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { Users } from "../../entities/users.entity";
import { Announcements } from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppErrors";

export const createCommentsService = async (
  commentsData: ICommentsRequest,
  userId: string,
  announcementsId: string
): Promise<ICommentsResponse> => {
  const commentsRepository = appDataSource.getRepository(Comments);
  const usersRepository = appDataSource.getRepository(Users);
  const announcementsRepository = appDataSource.getRepository(Announcements);

  const userFound = await usersRepository.findOneBy({ id: userId });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const announcementFound = await announcementsRepository.findOneBy({
    id: announcementsId,
  });

  if (!announcementFound) {
    throw new AppError("Announcement not found!", 404);
  }

  const comment = commentsRepository.create({
    ...commentsData,
    user: {
      id: userFound.id,
      name: userFound.name,
      email: userFound.email,
      cpf: userFound.cpf,
      cellPhone: userFound.cellPhone,
      isBuyer: userFound.isBuyer,
    },
    announcement: announcementFound,
  });
  await commentsRepository.save(comment);

  return comment;
};
