import express from 'express';

import { getTestMessage } from '../controllers/index.js';

export const testRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Basic routes for testing
 */

/**
 * @swagger
 * paths:
 *   /api/test:
 *     get:
 *       summary: Return some test message
 *       tags: [Test]
 *       responses:
 *         '200':
 *           description: Success
 *           content:
 *             application/json:
 *               example:
 *                 message: Hello from server!
 *         '500':
 *           description: Error
 *           content:
 *             application/json:
 *               example:
 *                 message: Some error occurred!
 */
testRouter.get('/', getTestMessage);
