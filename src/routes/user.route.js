var express = require("express");
var router = express.Router();
var controller = require("../controllers/admin/user.controller");

//validation middlewares
const { userValidationRules, validate } = require("../validations/validator");
const { checkPermission } = require("../middleware/checkPermission.middleware");
/* users crud. */
router
  .route("/create")
  .post(
    checkPermission("create:user"),
    userValidationRules(),
    validate,
    controller.create
  );
router
  .route("/:id")
  .get(checkPermission("get:user:all"), controller.getProfile);
router
  .route("/editUser")
  .put(checkPermission("update:user"), controller.editProfile);
router.route("/").get(checkPermission("get:user:all"), controller.getUsers);
router
  .route("/delete/:id")
  .post(checkPermission("delete:user:all"), controller.deleteUser);

module.exports = router;
