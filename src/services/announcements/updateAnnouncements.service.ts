import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppErrors";
import { IAnnoucementUpdate } from "../../interfaces";

export const updateAnnouncementsService = async (
  id: string,
  {
    brand,
    color,
    description,
    fipePrice,
    year,
    fuel,
    km,
    model,
    price,
    images,
  }: IAnnoucementUpdate
) => {
  const announcementRepository = appDataSource.getRepository(Announcements);

  const announcementExists = await announcementRepository.findOneBy({ id });

  if (!announcementExists) {
    throw new AppError("Announcement not found", 404);
  }

  await announcementRepository.update(id, {
    brand,
    color,
    description,
    fipePrice,
    year,
    fuel,
    km,
    model,
    price,
    images,
  });

  const announcement = await announcementRepository.findOneBy({ id });

  return announcement;
};
