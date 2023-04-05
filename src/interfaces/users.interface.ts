import { z } from "zod";
import {
  createUserSerializer,
  updateUserSerializer,
  userResponseSerializer,
} from "../serializers/users.serializer";

type IUserRequest = z.infer<typeof createUserSerializer>;
type IUserResponse = z.infer<typeof userResponseSerializer>;
type IUserUpdate = z.infer<typeof updateUserSerializer>;

export { IUserRequest, IUserResponse, IUserUpdate };
