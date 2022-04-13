const userRouter = require('express').Router();
const userController = require('../controllers/User');
const userValidation = require('../middlewares/userValidation');

userRouter.post('/', userValidation, userController.create);

module.exports = userRouter;