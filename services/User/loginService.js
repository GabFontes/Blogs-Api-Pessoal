const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { JWT_SECRET } = process.env;

const loginService = async (data) => {
  try {
    const { email, password } = data;

    const userExists = await User.findOne({ where: { email, password } });
    if (!userExists) throw new Error('Invalid fields');

    const payload = {
      ...data,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = loginService;