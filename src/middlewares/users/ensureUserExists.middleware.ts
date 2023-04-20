import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppErrors";

export const ensureUserExistsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = appDataSource.getRepository(Users);

  const idInTheParams = req.params.id;

  const findUser = userRepository.findOneBy({ id: idInTheParams });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  next();
};
