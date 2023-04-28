import { hashSync } from "bcryptjs";
import appDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErrors";
import { IAddressUpdate, IUserUpdate } from "../../interfaces";
import { Addresses } from "../../entities/addresses.entity";

export const updateUserService = async (
	id: string,
	{
		name,
		email,
		cpf,
		cellPhone,
		birthdate,
		description,
		isBuyer,
		password,
	}: IUserUpdate,
	address: IAddressUpdate
) => {
	const userRepository = appDataSource.getRepository(Users);
	const addressRepository = appDataSource.getRepository(Addresses);

	const userExists = await userRepository.findOneBy({ id });

	let addressUpdated;

	if (!userExists) {
		throw new AppError("User not found", 404);
	}

	if (address) {
		if (userExists.address.id) {
			await addressRepository.update(userExists.address.id, {
				...address,
			});
			addressUpdated = await addressRepository.findOneBy({
				id: userExists.address.id,
			});
		} else {
			addressUpdated = addressRepository.create({ ...address });
			await addressRepository.save(address);
		}
	}

	password = password ? hashSync(password, 10) : userExists.password;

	const updatedUser = await userRepository.update(id, {
		name,
		email,
		cpf,
		cellPhone,
		birthdate,
		description,
		isBuyer,
		password,
		address: addressUpdated || address,
	});

	const user = await userRepository.findOneBy({ id });

	return user;
};
