import { z } from "zod";

export const createUserSerializer = z.object({});

export const userResponseSerializer = createUserSerializer
  .extend({})
  .omit({ password: true });

export const listUsersWithoutPassword = userResponseSerializer.array();

export const updateUserSerializer = createUserSerializer.partial();
