const { Schema, model } = require('mongoose');

const validator = require('validator');
const bcrypt = require('bcryptjs');

const UnauthorizedError = require('../errors/UnauthorizedError');

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

function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .orFail(() => {
      throw new UnauthorizedError('Неправильные почта или пароль');
    })
    .select('+password')
    .then((userData) => {
      const user = bcrypt
        .compare(password, userData.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильные почта или пароль');
          }
          return userData;
        });
      return user;
    });
}

userSchema.statics.findUserByCredentials = findUserByCredentials;

module.exports = model('user', userSchema);
