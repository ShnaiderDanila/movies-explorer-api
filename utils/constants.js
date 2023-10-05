const CREATED_STATUS = 201;

const regexURL = /^https?:\/\/(w{3}\.)?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]+\.[a-z0-9]+\/?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]*#?$/i;
const regexNameRU = /^[^a-z]+$/i;
const regexNameEN = /^[^а-яё]+$/i;

const allowedCors = [
  'http://api.movies-explorer.shndr.nomoredomainsrocks.ru',
  'https://api.movies-explorer.shndr.nomoredomainsrocks.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE';

module.exports = {
  CREATED_STATUS,
  regexURL,
  regexNameRU,
  regexNameEN,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
