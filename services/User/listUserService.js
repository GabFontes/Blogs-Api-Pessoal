const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { JWT_SECRET } = process.env;

const listUserService = async (token) => {
  try {
    jwt.verify(token, JWT_SECRET);

    const users = await User.findAll();

    return users;
  } catch (error) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = listUserService;