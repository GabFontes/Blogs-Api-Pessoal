const Joi = require('joi');

const categoryValidation = Joi.object({
  name: Joi.required(),
});

module.exports = (req, res, next) => {
  const { error } = categoryValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};