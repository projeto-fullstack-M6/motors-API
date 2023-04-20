import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppErrors";

export const ensureIsYourOwnProfileOrIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;

  const idInTheParams = req.params.id;

  const userThatMakesTheRequestId = req.user.id;

  if (!isAdm && userThatMakesTheRequestId !== idInTheParams) {
    throw new AppError("Missing admin authorization", 403);
  }

  next();
};
