const { create } = require('../../services/Post');

const createPostController = async (req, res) => {
  try {
    const created = await create(req.headers.authorization, req.body);

    if (created.message) return res.status(created.status).json({ message: created.message });

    return res.status(201).json({
      id: created.dataValues.id,
      userId: created.userId,
      title: created.dataValues.title,
      content: created.dataValues.content,
    });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = createPostController;