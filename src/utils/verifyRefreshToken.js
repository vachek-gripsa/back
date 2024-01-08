import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_REFRESH;

export const verifyRefreshToken = token => {
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
