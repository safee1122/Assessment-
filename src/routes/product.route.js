var express = require("express");
var router = express.Router();
var controller = require("../controllers/admin/product.controller");

//validation middlewares
const {
  productValidationRules,
  validate,
} = require("../validations/validator");
const { checkPermission } = require("../middleware/checkPermission.middleware");

/* GET products listing. */

router
  .route("/create")
  .post(
    checkPermission("create:product"),
    productValidationRules(),
    validate,
    controller.create
  );
router.route("/").get(controller.getAllProducts);
router
  .route("/:id")
  .delete(
    checkPermission("update:product"),
    productValidationRules(),
    validate,
    controller.updateProduct
  );
router
  .route("/:id")
  .delete(checkPermission("delete:product"), controller.deleteProduct);

module.exports = router;
