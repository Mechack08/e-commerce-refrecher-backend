const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../controllers/userCtrl");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

module.exports = router;
