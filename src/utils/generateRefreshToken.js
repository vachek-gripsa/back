import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_REFRESH;

export const generateRefreshToken = userId => {
  const expiresIn = '24h';
  const validTo = Date.now() + 24 * 60 * 60 * 1000;
  return jsonwebtoken.sign({ validTo, userId, type: 'refresh' }, secret, { expiresIn });
};
