import appDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Announcements } from "../../entities/announcement.entity";

export const deleteAnnouncementService = async (
  announcementToDeleteId: string
) => {
  const announcementRepository: Repository<Announcements> =
    appDataSource.getRepository(Announcements);
  const findAnnoucement = await announcementRepository.findOneBy({
    id: announcementToDeleteId,
  });
  findAnnoucement!.isActive = false;
  await announcementRepository.update(announcementToDeleteId, findAnnoucement!);
  await announcementRepository.softRemove(findAnnoucement!);
};
