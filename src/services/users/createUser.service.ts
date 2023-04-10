import { Users } from "../../entities/users.entity";
import { IUserRequest, IUserResponse } from "../../interfaces";
import appDataSource from "./../../data-source";

export const createUserService = async ({
  name,
  email,
  cpf,
  birthdate,
  cellPhone,
  description,
  isBuyer,
  password,
  isAdm,
}: IUserRequest): Promise<IUserResponse> => {
  const userRepository = appDataSource.getRepository(Users);

  const user = userRepository.create({
    name,
    email,
    cpf,
    birthdate,
    cellPhone,
    description,
    isBuyer,
    password,
    isAdm,
  });

  await userRepository.save(user);

  return user;
};
