const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  // Check if User exist
  const findUser = await User.findOne({ email });

  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser) {
    if (await findUser.isPasswordMatched(password)) {
      res.json(findUser);
    } else {
      throw new Error("Invalid Creditials");
    }
  } else {
    throw new Error("User doesn't exist");
  }
});

module.exports = { createUser, loginUserCtrl };
