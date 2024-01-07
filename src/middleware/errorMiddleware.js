export const errorMiddleware = (error, req, res) => {
  console.error(error);
  const status = error.statusCode;
  const message = error.message || 'Some error occurred';
  const data = error.data;
  res.status(status).json({ message: message, data: data });
};
