const mongoose = require("mongoose");
var RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "user",
      unique: true,
      enum: ["super-admin", "admin", "user"],
    },
    permissions: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("role", RoleSchema);
