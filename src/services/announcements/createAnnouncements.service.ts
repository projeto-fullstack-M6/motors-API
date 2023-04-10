import { IAnnoucementRequest } from "../../interfaces";
import appDataSource from "../../data-source";
import { Announcements } from "../../entities/announcement.entity";
import { Users } from "../../entities/users.entity";

export const createAnnouncementsService = async (
  {
    brand,
    color,
    description,
    fipePrice,
    year,
    fuel,
    isGoodToSale,
    km,
    model,
    price,
  }: IAnnoucementRequest,
  userId: string
) => {
  const announcementRepository = appDataSource.getRepository(Announcements);
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id: userId });

  const announcement = await announcementRepository.create({
    brand,
    color,
    description,
    fipePrice,
    year,
    fuel,
    isGoodToSale,
    km,
    model,
    price,
    user: user ? user : undefined,
  });
  await announcementRepository.save(announcement);

  return announcement;
};
