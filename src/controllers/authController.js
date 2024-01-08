import { User } from '../models/index.js';
import { getUserByEmail, getUserById } from '../services/index.js';
import {
  hashPassword,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  setCookies
} from '../utils/index.js';

export const signup = async (req, res, next) => {
  console.log(req);
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
    linkedinProfile
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
        linkedinProfile
      }
    });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const signin = async (req, res, next) => {
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
    const accessToken = generateAccessToken(dbUser._id, dbUser.contacts.email);
    const refreshToken = generateRefreshToken(dbUser._id);
    delete dbUser.password;
    const cookies = setCookies(true, 60 * 60 * 24, accessToken, refreshToken);
    res.setHeader('Set-Cookie', cookies);
    res.status(200).json({
      message: 'User signed in successfully',
      user: dbUser,
      token: {
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      const error = new Error('Not authenticated');
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = verifyRefreshToken(token);
    if (!decodedToken) {
      const error = new Error('Invalid refresh token');
      error.statusCode = 401;
      throw error;
    }
    const dbUser = await getUserById(decodedToken.userId);
    const accessToken = generateAccessToken(dbUser._id, dbUser.contacts.email);
    const cookies = setCookies(false, 60 * 60 * 24, accessToken);
    res.setHeader('Set-Cookie', cookies);
    res.status(200).json({
      message: 'New access token',
      token: accessToken
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const cookies = setCookies(true, 0);
    console.log(cookies);
    res.setHeader('Set-Cookie', cookies);
    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
