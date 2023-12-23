import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_ACCESS;

export const generateAccessToken = user => {
  return jsonwebtoken.sign(user, secret, { expiresIn: '15m' });
};
