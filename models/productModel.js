const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    color: {
      type: String,
      enum: ["Orange", "Blue", "Black"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Hp"],
    },
    image: {
      type: Array,
    },
    ratings: [
      {
        star: Number,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
