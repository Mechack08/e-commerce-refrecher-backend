const express = require("express");
const route = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
} = require("../controllers/productCtrl");

route.post("/", createProduct);
route.get("/all", getProducts);
route.get("/:id", getProduct);

module.exports = route;
