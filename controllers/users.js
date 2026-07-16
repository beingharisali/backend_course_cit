const userModel = require("../models/Users");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await userModel.findOne({email})
    if(existingUser){
      return res.status(401).json({
        success:false,
        msg:"Email already exist, please use another email"
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
      firstName, lastName, email, password: hashedPassword
    });
    const token = jwt.sign({firstName, lastName, email}, process.env.JWT_SECRET)
    res.status(201).json({
      success: true,
      msg: "User registered",
      user: {
        firstName, lastName, email, password:hashedPassword
      },
      token
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
    const existingUser = await userModel.findOne({email})
    if (!existingUser) {
      return res.status(404).json({
        success:false,
        msg:"User don't exist, please create account first"
      })
    }
    const matchedPassword = await bcrypt.compare(password, existingUser.password)
    if (!matchedPassword) {
      return res.status(400).json({
        success:false,
        msg:"Invalid Credentials"
      })
    }
    const token = jwt.sign({email, password}, process.env.JWT_SECRET)
    res.status(201).json({
      success: true,
      msg: "User Logged in",
      token
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
