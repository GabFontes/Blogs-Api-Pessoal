const { remove } = require('../../services/Post');

const removePostController = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(204).end();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = removePostController;