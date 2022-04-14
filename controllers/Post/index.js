const create = require('./createPostController');
const list = require('./listPostsController');
const listById = require('./listPostByIdController');

module.exports = {
  create,
  list,
  listById,
};