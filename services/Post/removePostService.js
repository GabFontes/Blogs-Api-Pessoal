const { BlogPost } = require('../../models');

const removePostService = async (id) => {
  try {
    const deleted = await BlogPost.destroy({ where: { id } });
    if (!deleted) throw new Error('Post does not exist');
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = removePostService;