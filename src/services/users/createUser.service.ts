import { Addresses } from "../../entities/addresses.entity";
import { Users } from "../../entities/users.entity";
import { IAddressRequest, IUserRequest, IUserResponse } from "../../interfaces";
import appDataSource from "./../../data-source";

export const createUserService = async (
  {
    name,
    email,
    cpf,
    birthdate,
    cellPhone,
    description,
    isBuyer,
    password,
  }: IUserRequest,
  address: IAddressRequest
): Promise<IUserResponse> => {
  const userRepository = appDataSource.getRepository(Users);
  const addressRepository = appDataSource.getRepository(Addresses);

  if (address) {
    address = addressRepository.create({ ...address });
    await addressRepository.save(address);
  }

  const user = userRepository.create({
    name,
    email,
    cpf,
    birthdate,
    cellPhone,
    description,
    isBuyer,
    password,
    address,
  });

  await userRepository.save(user);

  return user;
};
