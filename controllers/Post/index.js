const create = require('./createPostController');
const list = require('./listPostsController');
const listById = require('./listPostByIdController');
const update = require('./updatePostController');
const remove = require('./removePostController');

module.exports = {
  create,
  list,
  listById,
  update,
  remove,
};