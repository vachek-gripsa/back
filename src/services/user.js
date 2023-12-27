import { User } from '../models/index.js';

export const getUserByEmail = async email => {
  try {
    const user = await User.findOne({ 'contacts.email': email });
    return user;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};
