export const getTestMessage = async (req, res, next) => {
  try {
    return res.send({ message: 'Hello from server!' });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
