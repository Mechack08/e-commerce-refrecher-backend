const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userCtrl");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
