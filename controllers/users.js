const { NODE_ENV, JWT_SECRET } = process.env;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
      const jwtToken = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret-key',
        { expiresIn: '7d' },
      );
      res
        .cookie('jwt', jwtToken, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        })
        .send({ message: 'Аутентификация выполнена успешно!' });
    })
    .catch(next);
};

const signout = (req, res) => {
  res
    .cookie('jwt', 'null', {
      maxAge: 3000,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    })
    .send({ message: 'Выход успешно выполнен!' });
};

module.exports = {
  getUserInfo,
  updateUserInfo,
  signup,
  signin,
  signout,
};
