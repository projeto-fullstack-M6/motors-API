import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";

export const listUserOwnProfileService = async (userId: string) => {
  const userRepository = appDataSource.getRepository(Users);

  const userOwnProfile = await userRepository.findOneBy({ id: userId });

  return userOwnProfile;
};
