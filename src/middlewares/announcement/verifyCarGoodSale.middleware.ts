import appDataSource from "../../data-source";
import { AppError } from "../../errors/AppErrors";
import { Request, Response, NextFunction } from "express";
import { Announcements } from "../../entities/announcement.entity";

export const verifyCarGoodSaleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return next();
};
