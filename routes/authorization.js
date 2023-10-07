const authorizationRouter = require('express').Router();

const { signUpValidation, signInValidation } = require('../middlewares/validation');
const { signup, signin } = require('../controllers/users');

authorizationRouter.post('/signup', signUpValidation, signup);
authorizationRouter.post('/signin', signInValidation, signin);

module.exports = authorizationRouter;
