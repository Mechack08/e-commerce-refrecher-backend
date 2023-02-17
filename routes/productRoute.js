const express = require("express");
const route = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

route.post("/", createProduct);
route.get("/all", getProducts);

route.get("/:id", authMiddleware, isAdmin, getProduct);
route.put("/:id", authMiddleware, isAdmin, updateProduct);
route.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = route;
