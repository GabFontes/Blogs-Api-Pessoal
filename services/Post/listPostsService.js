const { BlogPost, User, Category } = require('../../models');
const { tokenValidation } = require('../../middlewares/tokenValidation');

const listPostsService = async (token) => {
  try {
    tokenValidation(token);

    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return allPosts;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listPostsService;