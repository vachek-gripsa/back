import express from 'express';

import { getTestMessage } from '../controllers/testController.js';

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
 *   /:
 *     get:
 *       summary: Returns a welcome message
 *       tags: [Test]
 *       responses:
 *         '200':
 *           description: A successful response
 *           content:
 *             application/json:
 *               example:
 *                 message: Hello from server!
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal Server Error
 */
testRouter.get('/', getTestMessage);
