import { hashSync } from "bcryptjs";
import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";

export const resetPasswordService = async (
	password: string,
	resetToken: string
) => {
	const userRepository = appDataSource.getRepository(Users);

	const user = await userRepository.findOneBy({ resetToken });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	await userRepository.update(user.id, {
		password: hashSync(password, 10),
		resetToken: "expired",
	});
};
