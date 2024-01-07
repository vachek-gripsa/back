import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import multer from 'multer';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocs, logger, fileFilter, fileStorage, headers } from '../config/index.js';
import { errorMiddleware } from '../middleware/index.js';
import { testRouter, authRouter } from '../routes/index.js';

/* define server */
export const app = express();

/* define basic protection middlewares */
app.use(helmet());
app.use(cors(headers));

/* define basic parsing middlewares */
app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/images', express.static('images'));

/* define swagger options */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* add winston logger to app */
app.use((req, res, next) => {
  const date = new Date().toUTCString();
  const logMessage = `${date} "${req.method} ${req.originalUrl}" ${res.statusCode} - "${req.headers['user-agent']}"`;
  logger.info(logMessage);
  next();
});

/* define server router */
app.use('/api/test', testRouter);
app.use('/api/auth', authRouter);

app.use('/', (req, res) => {
  res.redirect('/api-docs');
});

/* define error middlewares */
app.use(errorMiddleware);
