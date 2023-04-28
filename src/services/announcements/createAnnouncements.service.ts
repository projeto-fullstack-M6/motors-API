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
    km,
    model,
    price,
    images,
  }: IAnnoucementRequest,
  userId: string
) => {
  const announcementRepository = appDataSource.getRepository(Announcements);
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id: userId });

  const dataFipePrice = parseInt(fipePrice);
  const dataPrice = parseInt(price);
  const fivePercent = dataFipePrice * (5 / 100);
  const isGoodSale = dataFipePrice - fivePercent;
  const isGoodToSale = dataPrice > isGoodSale ? false : true;

  const announcement = await announcementRepository.create({
    brand,
    color,
    description,
    fipePrice,
    year,
    fuel,
    km,
    model,
    price,
    isGoodToSale,
    user: user!,
    images: images,
  });
  await announcementRepository.save(announcement);

  return announcement;
};
