const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { JWT_SECRET } = process.env;

const createUserService = async (data) => {
  try {
    const { email, displayName, password, image } = data;

    const user = await User.findOne({ where: { email } });

    if (user) throw new Error('User already registered');

    await User.create({ email, displayName, password, image });

    const payload = {
      ...data,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createUserService;