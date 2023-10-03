const authorizationRouter = require('express').Router();

const { signUpValidation, signInValidation } = require('../middlewares/validation');
const { signup, signin, signout } = require('../controllers/users');

authorizationRouter.post('/signup', signUpValidation, signup);
authorizationRouter.post('/signin', signInValidation, signin);
authorizationRouter.post('/signout', signout);

module.exports = authorizationRouter;
