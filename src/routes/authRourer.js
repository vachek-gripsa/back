import express from 'express';

import { signup, signin, signout, refresh } from '../controllers/index.js';
import { validationMiddleware, authMiddleware } from '../middleware/index.js';
import { userValidation } from '../validation/index.js';

export const authRouter = express.Router();

authRouter.post('/sign-up', userValidation, validationMiddleware, signup);
authRouter.post('/sign-in', signin);
authRouter.get('/refresh', refresh);
authRouter.get('/sign-out', authMiddleware, signout);
