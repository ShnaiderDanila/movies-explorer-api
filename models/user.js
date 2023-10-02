const { Schema, model } = require('mongoose');

const validator = require('validator');
const bcrypt = require('bcryptjs');

const NotFoundError = require('../errors/NotFoundError');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Некорректный email адрес',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  this.findOne({ email })
    .orFail(() => {
      throw new NotFoundError('Неправильные почта или пароль');
    })
    .select('+password')
    .then((user) => {
      bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new NotFoundError('Неправильные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = model('user', userSchema);
