import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserIntoDB(user);

    // console.log(result);

    //const newData = result.toObject();

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { password, ...userData } = result.toObject();

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: userData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const UserController = {
  createUser,
};
