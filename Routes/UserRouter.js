const userRouter = require('express').Router();
const userController = require('../controllers/User');
const userValidation = require('../middlewares/userValidation');

userRouter.post('/', userValidation, userController.create);
userRouter.get('/', userController.list);
userRouter.get('/:id', userController.listById);

module.exports = userRouter;