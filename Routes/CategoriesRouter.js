const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/Categories');
const categoryValidation = require('../middlewares/categoryValidation');
const { tokenNotFound } = require('../middlewares/tokenValidation');

categoriesRouter.post('/', tokenNotFound, categoryValidation, categoriesController.create);
categoriesRouter.get('/', tokenNotFound, categoriesController.list);

module.exports = categoriesRouter;