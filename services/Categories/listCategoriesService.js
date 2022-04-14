const { Category } = require('../../models');
const { tokenValidation } = require('../../middlewares/tokenValidation');

const listCategoriesService = async (token) => {
  try {
    tokenValidation(token);
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listCategoriesService;