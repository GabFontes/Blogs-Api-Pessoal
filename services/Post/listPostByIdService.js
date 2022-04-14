const { BlogPost, User, Category } = require('../../models');
const { tokenValidation } = require('../../middlewares/tokenValidation');

const listPostByIdService = async (token, id) => {
  try {
    tokenValidation(token);
    const post = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) return { message: 'Post does not exist', status: 404 };

    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = listPostByIdService;