const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { CREATED_STATUS } = require('../utils/constants');
const NotFoundError = require('../errors/NotFoundError');

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным id не найден.');
    })
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

const updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, name }, { new: true, runValidators: true })
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным id не найден.');
    })
    .then((updatedUser) => {
      res.send(updatedUser);
    })
    .catch(next);
};

const signup = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({ email, password: hash, name })
        .then(() => {
          res.status(CREATED_STATUS).send({ email, name });
        });
    })
    .catch(next);
};

const signin = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  getUserInfo,
  updateUserInfo,
  signup,
  signin,
};
