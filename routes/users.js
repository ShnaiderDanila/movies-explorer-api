const usersRouter = require('express').Router();

const { updateUserInfoValidation } = require('../middlewares/validation');
const { getUserInfo, updateUserInfo } = require('../controllers/users');

usersRouter.get('/me', getUserInfo);
usersRouter.patch('/me', updateUserInfoValidation, updateUserInfo);

module.exports = usersRouter;
