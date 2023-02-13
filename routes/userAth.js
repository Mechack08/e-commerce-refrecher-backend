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
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", authMiddleware, deleteUser);
router.put("/:id", authMiddleware, updateUser);

module.exports = router;
