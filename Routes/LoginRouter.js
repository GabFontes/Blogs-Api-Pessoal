const loginRouter = require('express').Router();
const loginController = require('../controllers/User');
const loginValidation = require('../middlewares/loginValidation');

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;