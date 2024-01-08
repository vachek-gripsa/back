/**
 * @swagger
 * paths:
 *   /api/test:
 *     get:
 *       summary: Return some test message
 *       tags:
 *         - Test
 *       responses:
 *         '200':
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Success message
 *               example:
 *                 message: Hello from server!
 *         '500':
 *           description: Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Error message
 *               example:
 *                 message: Some error occurred!
 */
