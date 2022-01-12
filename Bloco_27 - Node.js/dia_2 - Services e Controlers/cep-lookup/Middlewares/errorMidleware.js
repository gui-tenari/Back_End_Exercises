/* eslint-disable no-unused-vars */
const errorCodes = {
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
};

const errorMiddleware = (err, req, res, next) => {
  const { code, message } = err.error;
  return res.status(errorCodes[code]).json({ message });
};

module.exports = errorMiddleware;
