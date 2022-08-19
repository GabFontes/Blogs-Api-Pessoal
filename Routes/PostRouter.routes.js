const postRouter = require('express').Router();
const postController = require('../controllers/Post');
const postValidation = require('../middlewares/postValidation');
const { tokenNotFound } = require('../middlewares/tokenValidation');
const verifyIfUserIsAuthorized = require('../middlewares/verifyIfUserIsAuthorized');
const updatePostValidation = require('../middlewares/updatePostValidation');

postRouter.post('/', tokenNotFound, postValidation, postController.create);
postRouter.get('/', tokenNotFound, postController.list);
postRouter.get('/:id', tokenNotFound, postController.listById);
postRouter.put('/:id',
  tokenNotFound,
  updatePostValidation,
  verifyIfUserIsAuthorized,
  postController.update);
postRouter.delete('/:id', tokenNotFound, verifyIfUserIsAuthorized, postController.remove);

module.exports = postRouter;