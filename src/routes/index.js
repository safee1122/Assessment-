var express = require("express");
var router = express.Router();
var userRoutes = require("./user.route");
var authRoutes = require("./auth.route");
var productRoutes = require("./product.route");
const passport = require("passport");

router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userRoutes
);
router.use("/auth", authRoutes);
router.use(
  "/product",
  passport.authenticate("jwt", { session: false }),
  productRoutes
);
module.exports = router;
