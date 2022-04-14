const { BlogPost, Category } = require('../../models');

const updatePostService = async (id, data) => {
  try {
    await BlogPost.update({ ...data }, { where: { id } });

    const post = await BlogPost.findByPk(id, {
      attributes: { exclude: ['published', 'updated'] },
      include: [
        { model: Category, as: 'categories' },
      ],
    });

    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = updatePostService;