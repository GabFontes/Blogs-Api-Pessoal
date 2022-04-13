const { Category } = require('../../models');
const tokenValidation = require('../../middlewares/tokenValidation');

const listCategoriesService = async (token) => {
  try {
    const categories = await Category.findAll();
    tokenValidation(token);
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listCategoriesService;