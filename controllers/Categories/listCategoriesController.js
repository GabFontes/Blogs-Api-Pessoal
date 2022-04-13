const { list } = require('../../services/Categories');

const listCategoryController = async (req, res) => {
  try {
    if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
    const categories = await list(req.headers.authorization);
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = listCategoryController;