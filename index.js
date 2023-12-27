import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

dotenv.config();

const PORT = process.env.PORT || 4444;
const MONGODB = process.env.MONGODB;

mongoose
  .connect(MONGODB)
  .then(() => console.log(`Connection to MongoDB: successful`))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(err => console.log(err));
