import { User } from '../models/index.js';
import { getUserByEmail } from '../services/index.js';
import {
  hashPassword,
  comparePassword,
  generateAccessToken,
  generateRefreshToken
} from '../utils/index.js';

export const signup = async (req, res) => {
  const avatar = req.file?.path;
  const {
    firstName,
    lastName,
    password,
    email,
    userName,
    phoneNumber,
    telegram,
    githubProfile,
    linkedInProfile
  } = req.body;
  try {
    const dbUser = await getUserByEmail(email);
    if (dbUser) {
      const error = new Error('User with this email already exists');
      error.statusCode = 400;
      throw error;
    }
    const hashedPassword = await hashPassword(password);
    const user = new User({
      firstName,
      lastName,
      password: hashedPassword,
      userName,
      avatar,
      contacts: {
        email,
        phoneNumber,
        telegram,
        githubProfile,
        linkedInProfile
      }
    });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};

export const signin = async (req, res) => {
  const { password, email } = req.body;
  try {
    const dbUser = await getUserByEmail(email);
    if (!dbUser) {
      const error = new Error('User with this email does not exist');
      error.statusCode = 401;
      throw error;
    }
    console.log(dbUser);
    const isEqual = await comparePassword(password, dbUser.password);
    if (!isEqual) {
      const error = new Error('Wrong password');
      error.statusCode = 401;
      throw error;
    }
    const accessToken = generateAccessToken(dbUser._id);
    const refreshToken = generateRefreshToken(dbUser._id);
    delete dbUser.password;
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; HttpOnly; Secure; SameSite=None; Max-Age=${24 * 60 * 60}`,
      `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=None; Max-Age=${24 * 60 * 60}`
    ]);
    // res.cookie('refreshToken', refreshToken, {
    //   // httpOnly: true,
    //   // secure: true,
    //   // sameSite: 'None',
    //   maxAge: 24 * 60 * 60 * 1000
    // });
    res.status(200).json({ user: dbUser, accessToken, refreshToken });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};
