const postRouter = require('express').Router();
const postController = require('../controllers/Post');
const postValidation = require('../middlewares/postValidation');
const { tokenNotFound } = require('../middlewares/tokenValidation');

postRouter.post('/', tokenNotFound, postValidation, postController.create);
postRouter.get('/', tokenNotFound, postController.list);
postRouter.get('/:id', tokenNotFound, postController.listById);

module.exports = postRouter;