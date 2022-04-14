const { update } = require('../../services/Post');

const updatePostController = async (req, res) => {
  try {
    const updated = await update(req.params.id, req.body, req.headers.authorization);

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = updatePostController;