const { User } = require('../../models');

const tokenValidation = require('../../middlewares/tokenValidation');

const listUserService = async (token) => {
  try {
    tokenValidation(token);

    const users = await User.findAll();

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listUserService;