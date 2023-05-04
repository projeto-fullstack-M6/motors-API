import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppErrors";

export const listOneAnnouncementService = async (id: string) => {
  const announcementRepository = appDataSource.getRepository(Announcements);

  const announcement = await announcementRepository.findOne({
    where: { id: id },
    relations: {
      comment: true,
    },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  return announcement;
};
