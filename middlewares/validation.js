const { celebrate, Joi } = require('celebrate');

const { regexURL, regexNameRU, regexNameEN } = require('../utils/constants');

const signUpValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

const signInValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const updateUserInfoValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regexURL),
    trailerLink: Joi.string().required().pattern(regexURL),
    thumbnail: Joi.string().required().pattern(regexURL),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().pattern(regexNameRU),
    nameEN: Joi.string().required().pattern(regexNameEN),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  signUpValidation,
  signInValidation,
  updateUserInfoValidation,
  createMovieValidation,
  deleteMovieValidation,
};
