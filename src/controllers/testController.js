export const getTestMessage = async (req, res) => {
  try {
    res.status(200).json({ message: 'Hello from server!' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};
