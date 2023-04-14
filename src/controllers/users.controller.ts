import { Request, Response } from "express";
import { createAddressSerializer } from "../serializers/addresses.serializer";
import {
  createUserSerializer,
  updateUserSerializer,
  userResponseSerializer,
} from "../serializers/users.serializer";
import {
  createUserService,
  deleteUserService,
  listOneUserService,
  listUsersService,
  updateUserService,
} from "../services/users";

export const createUserController = async (req: Request, res: Response) => {
  const { address, ...user } = req.body;

  if (address) {
    createAddressSerializer.parse(address);
  }

  const newUser = await createUserService(
    createUserSerializer.parse(user),
    address
  );
  return res.status(201).json(userResponseSerializer.parse(newUser));
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteUserService(id);
  return res.status(204).json();
};

export const listOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await listOneUserService(id);
  return res.status(200).json(userResponseSerializer.parse(user));
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(userResponseSerializer.array().parse(users));
};

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body;
  const { address } = user;

  const updatedUser = await updateUserService(
    id,
    updateUserSerializer.parse(user),
    address
  );
  return res.status(200).json(userResponseSerializer.parse(updatedUser));
};
