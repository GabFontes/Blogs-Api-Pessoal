const create = require('./createPostService');
const list = require('./listPostsService');
const listById = require('./listPostByIdService');
const update = require('./updatePostService');

module.exports = {
  create,
  list,
  listById,
  update,
};