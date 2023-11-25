import { User } from '../user.model';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import userUpdateValidationSchema from './user.update.validation';
import config from '../../config';

// Create user into DB

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

// Retrive all users from DB

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

// Retrive a single user from DB

const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId }).select({
    password: 0,
    _id: 0,
    __v: 0,
    orders: 0,
  });

  // Checking user availability in DB

  if (result?.isUserExists(userId)) {
    return result;
  } else {
    throw new Error('User is not exist in database!');
  }
};

// Upadte user data

const updateUser = async (userId: string, userData: TUser) => {
  const zodParseUserData = userUpdateValidationSchema.safeParse(userData);

  // Checking validation error with Zod

  if (!zodParseUserData.success) {
    throw new Error('Validation failed');
  }

  // Creating hash passwrod with bcrypt

  if (zodParseUserData.data.password) {
    zodParseUserData.data.password = await bcrypt.hash(
      zodParseUserData.data.password,
      Number(config.bcrypt_salt_rounds),
    );
  }

  const result = await User.findOneAndUpdate(
    { userId },
    zodParseUserData.data,
    {
      new: true,
    },
  ).select({ password: 0, _id: 0, __v: 0, orders: 0 });

  // Checking user availability in DB

  if (result?.isUserExists(userId)) {
    return result;
  } else {
    throw new Error('User is not exist in database!');
  }
};

// Delete user data

const deleteUser = async (userId: string) => {
  const result = await User.findOneAndDelete({ userId });

  // Checking user availability in DB

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
  updateUser,
  deleteUser,
};
