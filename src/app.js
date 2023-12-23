import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocs, logger } from './config/index.js';
import { errorMiddleware } from './middleware/index.js';
import { testRouter } from './routes/index.js';

// define server
export const app = express();

//define basic middlewares
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// define swagger options
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// add winston logger to app
app.use((req, res, next) => {
  const date = new Date().toUTCString();
  const logMessage = `${date} "${req.method} ${req.originalUrl}" ${res.statusCode} - "${req.headers['user-agent']}"`;
  logger.info(logMessage);
  next();
});

// define server router
app.use('/api', testRouter);

app.use('/', (req, res, next) => {
  res.redirect('/api-docs');
});

// define error middlewares
app.use(errorMiddleware);
