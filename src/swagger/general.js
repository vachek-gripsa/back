/**
 * @swagger
 * tags:
 *   - name: Authentication
 *   - name: Test
 * components:
 *   parameters:
 *     AuthorizationHeader:
 *       name: Authorization
 *       in: header
 *       description: Access token
 *       required: true
 *       schema:
 *         type: string
 *         format: jwt
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: User's first name
 *         lastName:
 *           type: string
 *           description: User's last name
 *         userName:
 *           type: string
 *           description: User's username
 *         avatar:
 *           type: string
 *           description: URL to the user's avatar image
 *         contacts:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: User's email address
 *             phoneNumber:
 *               type: string
 *               description: User's phone number in international format (e.g., +1234567890)
 *             telegram:
 *               type: string
 *               description: User's Telegram username
 *             linkedinProfile:
 *               type: string
 *               description: User's LinkedIn profile URL
 *             githubProfile:
 *               type: string
 *               description: User's GitHub profile URL
 */
