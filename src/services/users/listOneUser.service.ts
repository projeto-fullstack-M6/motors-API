import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";

export const listOneUserService = async (id: string) => {
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};
