const express = require("express");
const route = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");

route.post("/", createProduct);
route.get("/all", getProducts);

route.get("/:id", getProduct);
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);

module.exports = route;
