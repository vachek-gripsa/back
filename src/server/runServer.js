import { serverListener, connectToDatabase } from './index.js';

export const runServer = async (PORT, MONGO) => {
  try {
    await connectToDatabase(MONGO);
    serverListener(PORT);
  } catch (error) {
    console.error(`App initialization error`);
  }
};
