import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const sessionService = async (email: string, password: string) => {
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("Wrong email or password", 403);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Wrong email or password", 403);
  }

  const token = jwt.sign(
    { id: user.id, isActive: user.isActive, isAdm: user.isAdm },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1d",
    }
  );

  return token;
};
