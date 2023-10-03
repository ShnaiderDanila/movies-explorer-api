const CREATED_STATUS = 201;

const regexURL = /^https?:\/\/(w{3}\.)?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]+\.[a-z0-9]+\/?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]*#?$/i;
const regexNameRU = /[^a-z]/gi;
const regexNameEN = /[^а-яё]/gi;

module.exports = {
  CREATED_STATUS,
  regexURL,
  regexNameRU,
  regexNameEN,
};
