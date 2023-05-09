import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";

export const listAnnouncementsService = async (queryData: number) => {
  const howManyAnnouncementsToSkip: number =
    queryData === 1 ? 0 : (queryData - 1) * 16;

  const announcements = await appDataSource
    .getRepository(Announcements)
    .createQueryBuilder("announcements")
    .leftJoin("announcements.user", "user")
    .select([
      "announcements",
      "user.id",
      "user.name",
      "user.email",
      "user.cpf",
      "user.cellPhone",
      "user.birthdate",
      "user.description",
      "user.isAdm",
      "user.isActive",
      "user.isBuyer",
      "user.createdAt",
      "user.resetToken",
      "user.updatedAt",
      "user.deletedAt",
    ])
    .skip(howManyAnnouncementsToSkip)
    .take(16)
    .withDeleted()
    .getMany();

  const baseUrl = "http://localhost:3000/announcements";
  const prevPage = queryData === 1 ? null : `${baseUrl}?page=${queryData - 1}`;
  const nextPage =
    queryData >= announcements.length
      ? null
      : `${baseUrl}?page=${queryData + 1}`;

  const response = {
    prevPage: prevPage,
    nextPage: nextPage,
    page: queryData,
    results: announcements.length,
    data: announcements,
  };

  return response;
};
