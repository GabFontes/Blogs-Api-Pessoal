const { list } = require('../../services/Post');

const listPostController = async (req, res) => {
  try {
    const allPosts = await list(req.headers.authorization);
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = listPostController;