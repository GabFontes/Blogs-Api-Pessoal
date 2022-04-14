const { tokenValidation } = require('./tokenValidation');
const { BlogPost, User } = require('../models');

const verifyIfUserIsAuthorized = async (req, res, next) => {
  try {
    const { email } = tokenValidation(req.headers.authorization);
    const { dataValues: { userId } } = await BlogPost.findByPk(req.params.id);

    const { dataValues: { id } } = await User.findOne({ where: { email } });
    if (userId !== id) return res.status(401).json({ message: 'Unauthorized user' });
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = verifyIfUserIsAuthorized;