import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";

export const listUsersService = async () => {
  const userRepository = appDataSource.getRepository(Users);

  const users = await userRepository.find();

  if (!users) {
    throw new AppError("Users not found", 404);
  }

  return users;
};
