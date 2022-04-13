const create = require('./createUserControllers');
const login = require('./loginController');
const list = require('./listUserController');
const listById = require('./listUserByIdController');

module.exports = {
  create,
  list,
  login,
  listById,
};