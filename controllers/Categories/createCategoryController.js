const { create } = require('../../services/Categories');

const createCategoryController = async (req, res) => {
  try {
    if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });

    const created = await create(req.headers.authorization, req.body.name);

    return res.status(201).json(created);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = createCategoryController;