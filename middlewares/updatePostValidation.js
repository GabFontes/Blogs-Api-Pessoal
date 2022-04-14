const Joi = require('joi');

const loginValidation = Joi.object({
  title: Joi.required(),
  content: Joi.required(),
});

module.exports = (req, res, next) => {
  if (req.body.categoryIds) {
    return res.status(400).json(
      { message: 'Categories cannot be edited' },
    );
  }
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};