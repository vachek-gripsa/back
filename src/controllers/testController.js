export const getTestMessage = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'Hello from server!' });
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
};
