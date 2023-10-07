const signoutRouter = require('express').Router();

const { signout } = require('../controllers/users');

signoutRouter.post('/signout', signout);

module.exports = signoutRouter;
