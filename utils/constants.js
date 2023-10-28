const InternalServerError = require('../errors/InternalServerError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');

const SERVER_ERROR = new InternalServerError('На сервере произошла ошибка');
const CONFLICT_ERROR = new ConflictError('Пользователь с таким email уже зарегистрирован');
const BAD_REQUEST_ERROR = new BadRequestError('Переданы некорректные данные');

const CREATED_STATUS = 201;

const regexURL = /^https?:\/\/(w{3}\.)?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]+\.[a-z0-9]+\/?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]*#?$/i;

const allowedCors = [
  'https://api.movies-explorer.shndr.nomoredomainsrocks.ru',
  'https://movies-explorer.shndr.nomoredomainsrocks.ru',
  'http://localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE';

module.exports = {
  SERVER_ERROR,
  CONFLICT_ERROR,
  BAD_REQUEST_ERROR,
  CREATED_STATUS,
  regexURL,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
