const authorizationRouter = require('express').Router();

const { signup, signin, signout } = require('../controllers/users');

authorizationRouter.post('/signup', signup);
authorizationRouter.post('/signin', signin);
authorizationRouter.post('/signout', signout);

module.exports = authorizationRouter;
