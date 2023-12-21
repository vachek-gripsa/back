import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocs } from './config/swaggerConfig.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { testRouter } from './routes/testRouter.js';
import { logger } from './config/winstonConfig.js';

dotenv.config();

const PORT = process.env.PORT || 4444;
const MONGODB = process.env.MONGODB;

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

app.use('/', testRouter);
app.use(errorMiddleware);

mongoose
  .connect(MONGODB)
  .then(() => console.log(`Connection to MongoDB: successful`))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(err => console.log(err));
