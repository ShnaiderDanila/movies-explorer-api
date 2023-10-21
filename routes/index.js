const routes = require('express').Router();

const auth = require('../middlewares/auth');

const authorizationRouter = require('./authorization');
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const signoutRouter = require('./signout');
const notFoundRouter = require('./notFound');

routes.use('/', authorizationRouter);

routes.use(auth);

routes.use('/movies', moviesRouter);
routes.use('/users', usersRouter);
routes.use('/', signoutRouter);
routes.use('*', notFoundRouter);

module.exports = routes;
