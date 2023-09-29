const { Error } = require('mongoose');

const InternalServerError = require('../errors/InternalServerError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');

const serverError = new InternalServerError('На сервере произошла ошибка');
const badRequestError = new BadRequestError('Переданы некорректные данные');
const conflictError = new ConflictError('Пользователь с таким email уже зарегистрирован');

const handleErrors = (err, req, res, next) => {
  const { statusCode = serverError.statusCode, message } = err;

  if (err instanceof Error.CastError || err instanceof Error.ValidationError) {
    return res.status(badRequestError.statusCode).send({ message: badRequestError.message });
  }

  if (err.code === 11000) {
    return res.status(conflictError.statusCode).send({ message: conflictError.message });
  }

  res
    .status(statusCode)
    .send({ message: statusCode === serverError.statusCode ? serverError.message : message });

  return next();
};

module.exports = handleErrors;
