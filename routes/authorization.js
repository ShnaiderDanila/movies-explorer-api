const authorizationRouter = require('express').Router();

const { signup, signin } = require('../controllers/users');

authorizationRouter.post('/signup', signup);
authorizationRouter.post('/signin', signin);

module.exports = authorizationRouter;
