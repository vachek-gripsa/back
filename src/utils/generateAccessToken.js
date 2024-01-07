import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_ACCESS;

export const generateAccessToken = userId => {
  const expiresIn = '15m';
  const validTo = Date.now() + 15 * 60 * 1000;
  return jsonwebtoken.sign({ validTo, userId, type: 'access' }, secret, { expiresIn });
};
