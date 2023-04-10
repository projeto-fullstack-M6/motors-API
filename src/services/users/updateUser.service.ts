import { hashSync } from "bcryptjs";
import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";
import { IUserUpdate } from "../../interfaces";

export const updateUserService = async (
  id: string,
  {
    name,
    email,
    cpf,
    cellPhone,
    birthdate,
    description,
    isAdm,
    isBuyer,
    password,
  }: IUserUpdate
) => {
  const userRepository = appDataSource.getRepository(Users);

  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    throw new AppError("User not found", 404);
  }

  password = password ? hashSync(password, 10) : userExists.password;

  const updatedUser = await userRepository.update(id, {
    name,
    email,
    cpf,
    cellPhone,
    birthdate,
    description,
    isAdm,
    isBuyer,
    password,
  });

  const user = await userRepository.findOneBy({ id });

  return user;
};
