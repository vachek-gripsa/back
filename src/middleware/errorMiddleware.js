export const errorMiddleware = (error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message || 'Some error occurred';
  const data = error.data;
  res.status(status).json({ message: message, data: data });
};
