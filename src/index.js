import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocs } from './config/swaggerConfig.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { testRouter } from './routes/testRouter.js';

dotenv.config();

// const SECRET = process.env.SECRET;
const PORT = process.env.PORT || 4444;
const MONGODB = process.env.MONGODB;

// define server
export const app = express();

// define basic middlewares
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// define swagger middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// define server router
app.use('/api', testRouter);

app.use('/', (req, res) => {
  res.redirect('/api-docs');
});

// define error middlewares
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
