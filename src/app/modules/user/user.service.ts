import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
