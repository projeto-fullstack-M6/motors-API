import appDataSource from "../../data-source";
import { AppError } from "../../errors/AppErrors";
import { Request, Response, NextFunction } from "express";
import { Announcements } from "../../entities/announcement.entity";

export const ensureAnnoucementExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const announcementId = req.params.id;
  const announcementRepository = appDataSource.getRepository(Announcements);
  const findAnnoucement = await announcementRepository.findOneBy({
    id: announcementId,
  });
  if (!findAnnoucement) {
    throw new AppError("Announcement not found!", 404);
  }
  return next();
};
