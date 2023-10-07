const { Error } = require('mongoose');

const { SERVER_ERROR, CONFLICT_ERROR, BAD_REQUEST_ERROR } = require('../utils/constants');

const handleErrors = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR.statusCode, message } = err;

  if (err instanceof Error.CastError || err instanceof Error.ValidationError) {
    return res.status(BAD_REQUEST_ERROR.statusCode).send({ message: BAD_REQUEST_ERROR.message });
  }

  if (err.code === 11000) {
    return res.status(CONFLICT_ERROR.statusCode).send({ message: CONFLICT_ERROR.message });
  }

  res
    .status(statusCode)
    .send({ message: statusCode === SERVER_ERROR.statusCode ? SERVER_ERROR.message : message });

  return next();
};

module.exports = handleErrors;
