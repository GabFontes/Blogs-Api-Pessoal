const { listById } = require('../../services/User');

const listUserByIdController = async (req, res) => {
  try {
    const user = await listById(req.params.id, req.headers.authorization);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = listUserByIdController;