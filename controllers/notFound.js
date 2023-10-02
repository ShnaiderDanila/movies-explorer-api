const NotFoundError = require('../errors/NotFoundError');

const handleNotFoundError = (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
};

module.exports = handleNotFoundError;
