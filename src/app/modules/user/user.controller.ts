import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const zodParseUserData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDB(zodParseUserData);

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { password, __v, _id, ...userData } = result.toObject();

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: userData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User is not created successfully!',
      error: {
        code: 404,
        description: 'User is not created successfully!',
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User is not fetched successfully!',
      error: {
        code: 404,
        description: 'User is not fetched successfully!',
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
};
