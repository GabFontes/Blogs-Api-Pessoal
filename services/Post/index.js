const create = require('./createPostService');
const list = require('./listPostsService');
const listById = require('./listPostByIdService');
const update = require('./updatePostService');
const remove = require('./removePostService');

module.exports = {
  create,
  list,
  listById,
  update,
  remove,
};