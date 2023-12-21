export const errorMiddleware = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Some error occurred!' });
};
