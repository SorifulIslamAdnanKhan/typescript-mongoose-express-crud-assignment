import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

// Create user into DB

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

// Retrive all users from DB

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

// Retrive a single user from DB

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// Upadte user data

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData = req.body;

    const result = await UserServices.updateUser(userId, userData);
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// Delete user data

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await UserServices.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// Add product into orders field

const addNewProductToOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { productName, price, quantity } = req.body;

    await UserServices.addProductIntoOrder(userId, {
      productName,
      price,
      quantity,
    });

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: 'Order not created successfully!',
      },
    });
  }
};

// Get all orders from specific user

const getAllOrdersFormSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders =
      await UserServices.getAllOrdersFormSpecificUserFromDB(userId);

    console.log(orders);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: 'Orders not found!',
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addNewProductToOrder,
  getAllOrdersFormSpecificUser,
};
