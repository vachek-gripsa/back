import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_ACCESS;

export const verifyAccessToken = token => {
  try {
    const decodedToken = jsonwebtoken.verify(token, secret);
    return decodedToken;
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
};
