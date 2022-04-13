const tokenValidation = require('../../middlewares/tokenValidation');
const { User } = require('../../models');

const listUserByIdService = async (id, token) => {
  try {
    tokenValidation(token);
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listUserByIdService;