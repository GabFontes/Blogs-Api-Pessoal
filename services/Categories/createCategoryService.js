const { Category } = require('../../models');
const { tokenValidation } = require('../../middlewares/tokenValidation');

const createCategoryService = async (token, name) => {
  try {
    tokenValidation(token);
    const created = await Category.create({ name });
    return created;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createCategoryService;