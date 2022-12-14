const { list } = require('../../services/User');

const listUserController = async (req, res) => {
  try {
    const users = await list(req.headers.authorization);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = listUserController;