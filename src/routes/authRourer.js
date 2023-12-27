import express from 'express';

import { userValidation } from '../config/index.js';
import { signup, signin } from '../controllers/index.js';
import { validationMiddleware } from '../middleware/index.js';

export const authRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Get access to the app
 */

/**
 * @swagger
 * paths:
 *   /api/auth/sign-up:
 *     post:
 *       summary: Register a new user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   description: User's first name
 *                 lastName:
 *                   type: string
 *                   description: User's last name
 *                 password:
 *                   type: string
 *                   format: password
 *                   description: User's password
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: User's email address
 *                 userName:
 *                   type: string
 *                   description: User's username
 *                 phoneNumber:
 *                   type: string
 *                   description: User's phone number
 *                 telegram:
 *                   type: string
 *                   description: User's Telegram username
 *                 githubProfile:
 *                   type: string
 *                   description: User's GitHub profile URL
 *                 linkedInProfile:
 *                   type: string
 *                   description: User's LinkedIn profile URL
 *               required:
 *                 - firstName
 *                 - lastName
 *                 - password
 *                 - email
 *                 - userName
 *       responses:
 *         '201':
 *           description: User successfully created
 *           content:
 *             application/json:
 *               example:
 *                 message: User created
 *         '422':
 *           description: Validation failed
 *           content:
 *             application/json:
 *               example:
 *                 message: Validation failed
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 message: Internal Server Error
 */
authRouter.post('/sign-up', userValidation, validationMiddleware, signup);

/**
 * @swagger
 * paths:
 *   /api/auth/sign-in:
 *     post:
 *       summary: Authenticate and sign in a user
 *       tags:
 *         - Authentication
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: User's email address
 *                 password:
 *                   type: string
 *                   format: password
 *                   description: User's password
 *               required:
 *                 - email
 *                 - password
 *       responses:
 *         '200':
 *           description: User successfully authenticated
 *           content:
 *             application/json:
 *               example:
 *                 user:
 *                   firstName: "Avatar"
 *                   lastName: "Last Airbender"
 *                   userName: "Mr. Irrelevant"
 *                   avatar: "https://(root path)/avatar.jpg"
 *                   contacts:
 *                     - email: "last.airbender@avatar.com"
 *                     - phoneNumber: "+380661234567"
 *                     - telegram: "@MeIrrelevant"
 *                     - linkedinProfile: "https://linkedin..."
 *                     - githubProfile: "https://gothub..."
 *                   financialProjects: []
 *                 accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4NTE2MjM5MDJ9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *         '401':
 *           description: Authentication failed
 *           content:
 *             application/json:
 *               example:
 *                 message: User with this email does not exist or wrong password
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 message: Internal Server Error
 */
authRouter.post('/sign-in', signin);
