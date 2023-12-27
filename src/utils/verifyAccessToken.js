import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_ACCESS;

export const verifyAccessToken = token => {
  try {
    const decodedToken = jsonwebtoken.verify(token, secret);
    return decodedToken;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};
