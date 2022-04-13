const Joi = require('joi');

const userValidation = Joi.object({
  displayName: Joi.string().min(8).required()
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  // https://stackoverflow.com/questions/57972358/joi-email-validation
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    .messages({
      'email.required': '"email" is required',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'password.required': '"password" is required ',
      'string.min': '"password" length must be 6 characters long',
    }),
  image: Joi.string(),
});

module.exports = (req, res, next) => {
  const { error } = userValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};