import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    _id: 0,
  });

  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId }).select({
    password: 0,
    _id: 0,
    __v: 0,
    orders: 0,
  });
  if (result?.isUserExists(userId)) {
    return result;
  } else {
    throw new Error('User is not exist in database!');
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
