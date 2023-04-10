import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";
import appDataSource from "./../../data-source";

export const deleteUserService = async (id: string) => {
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, { isActive: false });
};
