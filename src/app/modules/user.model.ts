import { Schema, model } from 'mongoose';
import { TUser, TOrder } from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

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
  },
  orders: {
    type: ordersSchema,
  },
});

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
