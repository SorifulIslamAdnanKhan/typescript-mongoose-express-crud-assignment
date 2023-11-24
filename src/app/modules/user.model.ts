import { Schema, model } from 'mongoose';
import { TAddress, TUser, TOrder } from './user/user.interface';

const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: [true, 'Street field is required.'],
  },
  city: {
    type: String,
    required: [true, 'City field is required.'],
  },
  country: {
    type: String,
    required: [true, 'Country field is required.'],
  },
});

const ordersSchema = new Schema<TOrder>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User ID field is required.'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username field is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password field is required.'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First name field is required.'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name field is required.'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Age field is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email field is required.'],
    unique: true,
  },
  isActive: {
    type: Boolean,
    required: [true, 'User activation field is required.'],
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: [true, 'Address field is required.'],
  },
  orders: {
    type: ordersSchema,
  },
});

export const User = model<TUser>('User', userSchema);