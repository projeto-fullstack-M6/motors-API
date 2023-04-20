import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";
import { severalAnnouncementsResponseSerializer } from "../../serializers/announcements.serializer";

export const listAllSpecifUserAnnouncementsService = async (
  userId: string,
  queryData: number
) => {
  if (queryData === undefined) {
    queryData = 1;
  }
  const howManyAnnouncementsToSkip: number =
    queryData === 1 ? 0 : (queryData - 1) * 16;

  const announcements = await appDataSource
    .getRepository(Announcements)
    .createQueryBuilder("announcements")
    .leftJoinAndSelect("announcements.user", "user")
    .where("user.id = :id", { id: userId })
    .skip(howManyAnnouncementsToSkip)
    .take(16)
    .getMany();

  const allUserAnnouncements =
    severalAnnouncementsResponseSerializer.parse(announcements);

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
    data: allUserAnnouncements,
  };

  return response;
};
