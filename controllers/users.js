const userModel = require("../models/Users");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await userModel.create({
      firstName, lastName, email, password
    });
    res.status(201).json({
      success: true,
      msg: "User registered",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    res.status(201).json({
      success: true,
      msg: "User Logged in",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
module.exports = { register, login };
