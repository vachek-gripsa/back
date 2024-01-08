import express from 'express';

import { getTestMessage } from '../controllers/index.js';

export const testRouter = express.Router();

testRouter.get('/', getTestMessage);
