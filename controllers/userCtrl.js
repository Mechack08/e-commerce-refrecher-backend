const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/jwt");

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
      res.json({
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        mobile: findUser?.mobile,
        email: findUser?.email,
        token: generateToken(findUser?.id),
      });
    } else {
      throw new Error("Invalid Creditials");
    }
  } else {
    throw new Error("User doesn't exist");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find().select("-password");
    res.json(getUsers);
  } catch (e) {
    throw new Error(e);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await User.findByIdAndDelete(id).select("-password");
    res.json(deleted);
  } catch (error) {
    throw new Error(error);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const { _id } = req.user;

  try {
    const updeted = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req.body?.firstname,
        lastname: req.body?.lastname,
        mobile: req.body?.mobile,
        email: req.body?.email,
      },
      { new: true }
    ).select("-password");
    res.json(updeted);
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(id, {
      isBlocked: true,
    });
    res.json({
      message: "User blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(id, {
      isBlocked: false,
    });
    res.json({
      message: "User unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
};
