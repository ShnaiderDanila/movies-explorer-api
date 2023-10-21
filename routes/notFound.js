const notFoundRouter = require('express').Router();

const handleNotFoundError = require('../controllers/notFound');

notFoundRouter.all('*', handleNotFoundError);

module.exports = notFoundRouter;
