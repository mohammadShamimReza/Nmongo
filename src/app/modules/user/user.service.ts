import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload); // User -> class , user -> instance
  await user.save(); // built in instance method of user

  const name = user.fullName();
  console.log(name, "this is a model");
  return user;
};

export const getUsersFromDb = async (): Promise<IUser> => {
  console.log('getUsersFromDb')
  // const users = await User.find();
  const users = User.myStaticMethod();
  console.log(users)
  return users;
};

export const getUserByIdFormDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
    return user;
}