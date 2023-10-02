const { NODE_ENV, JWT_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../errors/NotFoundError');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new UnauthorizedError('Необходима авторизация пользователя'));
  }

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret-key');
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация пользователя'));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
