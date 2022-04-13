const create = require('./createUserControllers');
const login = require('./loginController');
const list = require('./listUserController');

module.exports = {
  create,
  list,
  login,
};