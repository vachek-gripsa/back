import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_ACCESS;

export const generateAccessToken = userId => {
  return jsonwebtoken.sign({ userId }, secret, { expiresIn: '15m' });
};
