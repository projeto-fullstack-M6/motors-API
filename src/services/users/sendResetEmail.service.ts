import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";
import { resetPasswordTemplate, sendEmail } from "../../utils/sendEmail.utils";

export const sendResetEmailService = async (
  email: string,
  protocol: string,
  host: string
) => {
  const userRepository = appDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const generatedToken = crypto.randomUUID();

  await userRepository.update(user.id, {
    resetToken: generatedToken,
  });

  const resetPass = resetPasswordTemplate(
    email,
    user.name,
    protocol,
    host,
    generatedToken
  );

  await sendEmail(resetPass);
};
