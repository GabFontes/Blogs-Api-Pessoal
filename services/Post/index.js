const create = require('./createPostService');
const list = require('./listPostsService');
const listById = require('./listPostByIdService');

module.exports = {
  create,
  list,
  listById,
};