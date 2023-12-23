export const getTestMessage = async (req, res, next) => {
  try {
    return res.send({ message: 'Hello from server!' });
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
};
