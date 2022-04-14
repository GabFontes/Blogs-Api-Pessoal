const { BlogPost, Category, User } = require('../../models');
const { tokenValidation } = require('../../middlewares/tokenValidation');

const createPostService = async (token, data) => {
  try {
    const decoded = tokenValidation(token);
    const { email } = decoded;

    const { dataValues: { id } } = await User.findOne({ where: { email } });
    const { title, content, categoryIds } = data;

    const categories = categoryIds.map((idd) => Category.findByPk(idd));
    const resolved = await Promise.all(categories);

    const verify = resolved.some((cat) => cat === null);

    if (verify) return { message: '"categoryIds" not found', status: 400 };

    const created = await BlogPost.create({ title, content, categoryIds, userId: id });

    return { ...created, userId: id };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createPostService;