import bcrypt from "bcryptjs"
import { User } from "../Models";
import { UpdateQuery, FilterQuery } from "mongoose";
import { IUser } from "../Interfaces";
import { UserPayload } from "../Types";


abstract class UserAbstract {
  abstract createUser(payload: UserPayload): Promise<IUser>;
  abstract findUser(searchQuery: object): Promise<IUser | null>;
  abstract updateUser(searchQuery: object, updateData: object): Promise<void>;
}

export class UserService extends UserAbstract {
  async createUser(payload: UserPayload): Promise<IUser> {
    //   hash password
    payload.password = await bcrypt.hash(payload.password, 12);
    //   create user
      const user = await User.create(payload);
    return user as IUser;
  }

  async findUser(searchQuery: FilterQuery<IUser>): Promise<IUser | null> {
    const user = await User.findOne(searchQuery).lean();
    return user as IUser;
  }

  async updateUser(
    searchQuery: object,
    updateData: UpdateQuery<IUser>
  ): Promise<void> {
    const update = await User.findOneAndUpdate(searchQuery, updateData, {
      new: true,
    })
      .lean()
      .exec();
    console.log(update, "USER UPDATE");
  }
}
