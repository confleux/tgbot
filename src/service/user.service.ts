import { FilterQuery } from "mongoose";
import User, { IUser } from "../models/user.model";

async function createUser(input: IUser) {
  try {
    return await User.create(input);
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }
}

async function findUsers(query: FilterQuery<IUser>): Promise<IUser[]> {
  return User.find(query).lean();
}

async function findUser(query: FilterQuery<IUser>): Promise<IUser> {
  return User.findOne(query).lean();
}

export {createUser, findUsers, findUser};
