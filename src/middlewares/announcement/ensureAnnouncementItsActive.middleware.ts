import appDataSource from "../../data-source";
import { AppError } from "../../errors/AppErrors";
import { Request, Response, NextFunction } from "express";
import { Announcements } from "../../entities/announcement.entity";

export const ensureAnnoucementItsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const announcementId = req.params.id;
  const announcementRepository = appDataSource.getRepository(Announcements);

  const announcements = await announcementRepository.find({
    withDeleted: true,
  });

  const announcementItsNotActive = announcements.find(
    (announcement) => announcement.id === announcementId
  );

  if (announcementItsNotActive && announcementItsNotActive.isActive === false) {
    throw new AppError("Announcement is already inactive!", 400);
  }

  return next();
};
