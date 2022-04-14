const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const tokenValidation = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Expired or invalid token');
  }
};

const tokenNotFound = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
  next();
};

module.exports = {
  tokenValidation,
  tokenNotFound,
};