const { create } = require('../../services/User');

const createUserController = async (req, res) => {
  try {
    const token = await create(req.body);
    return res.status(201).json(token);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = createUserController;