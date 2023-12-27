import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_REFRESH;

export const generateRefreshToken = userId => {
  return jsonwebtoken.sign({ userId }, secret, { expiresIn: '24h' });
};
