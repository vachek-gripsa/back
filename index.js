import dotenv from 'dotenv';

import { runServer } from './src/server/index.js';

dotenv.config();

const PORT = process.env.PORT || 4444;
const MONGODB = process.env.MONGODB;

runServer(PORT, MONGODB);
