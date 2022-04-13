const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const tokenValidation = (token) => {
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = tokenValidation;