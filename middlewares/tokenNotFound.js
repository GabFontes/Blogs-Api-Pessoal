const tokenNotFound = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
  next();
};

module.exports = tokenNotFound;