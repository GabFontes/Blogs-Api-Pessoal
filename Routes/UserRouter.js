const userRouter = require('express').Router();
const userController = require('../controllers/User');
const userValidation = require('../middlewares/userValidation');
const { tokenNotFound } = require('../middlewares/tokenValidation');

userRouter.post('/', userValidation, userController.create);
userRouter.get('/', tokenNotFound, userController.list);
userRouter.get('/:id', tokenNotFound, userController.listById);

module.exports = userRouter;