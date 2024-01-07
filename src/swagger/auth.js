/**
 * @swagger
 * paths:
 *   /api/auth/sign-up:
 *     post:
 *       summary: Register a new user
 *       tags:
 *         - Authentication
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
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
 *                   description: User's phone number in international format (e.g., +1234567890)
 *                 telegram:
 *                   type: string
 *                   description: User's Telegram username
 *                 githubProfile:
 *                   type: string
 *                   description: User's GitHub profile URL
 *                 linkedInProfile:
 *                   type: string
 *                   description: User's LinkedIn profile URL
 *                 file:
 *                   type: string
 *                   format: binary
 *                   description: Avatar image file (JPEG, PNG, etc.)
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
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message
 *               example:
 *                 message: User created successfully
 *         '422':
 *           description: Validation failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Validation failed
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Internal Server Error
 */

/**
 * @swagger
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
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message
 *                   user:
 *                     $ref: '#/components/schemas/UserProfile'
 *                   token:
 *                     type: object
 *                     properties:
 *                       accessToken:
 *                         type: string
 *                         description: JWT access token
 *                       refreshToken:
 *                         type: string
 *                         description: JWT refresh token
 *               example:
 *                 message: User signed in successfully
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
 *                 token:
 *                   accessToken: "access token value"
 *                   refreshToken: "refresh token value"
 *         '401':
 *           description: Authentication failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: User with this email does not exist or wrong password
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Internal Server Error
 */

/**
 * @swagger
 *   /api/auth/refresh:
 *     get:
 *       summary: Refresh access token
 *       tags:
 *         - Authentication
 *       responses:
 *         '200':
 *           description: New access token generated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message
 *                   token:
 *                     type: string
 *                     description: New access token value
 *               example:
 *                 message: New access token
 *                 token: 'access token value'
 *         '401':
 *           description: Unauthorized. Invalid or missing refresh token.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Succes message
 *               example:
 *                 message: Invalid refresh token
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Succes message
 *               example:
 *                 message: Internal Server Error
 */

/**
 * @swagger
 *   /api/auth/sign-out:
 *     get:
 *       summary: Sign out a user
 *       tags:
 *         - Authentication
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: User signed out successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Succes message
 *               example:
 *                 message: User signed out successfully
 *         '401':
 *           description: Not authenticated or Invalid access token
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Not authenticated or Invalid access token
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Internal Server Error
 */
