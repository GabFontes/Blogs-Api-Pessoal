const { listById } = require('../../services/Post');

const listPostController = async (req, res) => {
  try {
    const post = await listById(req.headers.authorization, req.params.id);
    if (post.message) return res.status(post.status).json({ message: post.message });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = listPostController;