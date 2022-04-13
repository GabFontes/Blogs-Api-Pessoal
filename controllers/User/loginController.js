const { login } = require('../../services/User');

const loginController = async (req, res) => {
  try {
    const token = await login(req.body);
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = loginController;