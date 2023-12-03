var express = require("express");
var router = express.Router();
var controller = require("../controllers/admin/auth.controller");
const passport = require("passport");
const { checkPermission } = require("../middleware/checkPermission.middleware");

router.route("/login").post(controller.login);
router
  .route("/roles")
  .get(
    passport.authenticate("jwt", { session: false }),
    checkPermission("create:user"),
    controller.getRoles
  );

module.exports = router;
