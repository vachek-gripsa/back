import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Server API',
      version: '1.0.0',
      description: 'Description of API endpoints'
    }
  },
  apis: ['./src/routes/*.js']
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
