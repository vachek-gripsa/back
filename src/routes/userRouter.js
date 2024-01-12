import express from 'express';

import { validationMiddleware, authMiddleware } from '../middleware/index.js';
import { userValidation } from '../validation/index.js';

export const userRouter = express.Router();

userRouter.get('/');
userRouter.patch('/user');
userRouter.delete('/user');
userRouter.put('/user-password');
userRouter.put('/user-email');
