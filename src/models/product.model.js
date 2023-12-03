const mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", ProductSchema);
