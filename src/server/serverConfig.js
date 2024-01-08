import { app } from './app.js';

export const serverListener = PORT => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};
