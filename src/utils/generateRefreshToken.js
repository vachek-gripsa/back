import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_REFRESH;

export const generateRefreshToken = user => {
  return jsonwebtoken.sign(user, secret, { expiresIn: '24h' });
};
