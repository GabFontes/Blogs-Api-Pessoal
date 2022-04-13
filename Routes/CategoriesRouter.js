const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/Categories');
const categoryValidation = require('../middlewares/categoryValidation');

categoriesRouter.post('/', categoryValidation, categoriesController.create);
categoriesRouter.get('/', categoriesController.list);

module.exports = categoriesRouter;