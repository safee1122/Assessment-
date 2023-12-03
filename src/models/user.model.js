const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const RoleModel = require("../models/role.model");

var UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userRole: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "role",
    },
  },
  { timestamps: true }
);

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};
UserSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});
module.exports = mongoose.model("user", UserSchema);
