import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";

export const listAnnouncementsService = async () => {
  const announcementRepository = appDataSource.getRepository(Announcements);

  const announcements = await announcementRepository.find();

  return announcements;
};
