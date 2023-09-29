const User = require('../models/user');
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

module.exports = {
  getUserInfo,
  updateUserInfo,
};
