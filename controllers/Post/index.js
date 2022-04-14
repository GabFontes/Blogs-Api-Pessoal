const create = require('./createPostController');
const list = require('./listPostsController');
const listById = require('./listPostByIdController');
const update = require('./updatePostController');

module.exports = {
  create,
  list,
  listById,
  update,
};