const Product = require("../../models/product.model");
/**
 * Create a fresh user into the database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {JSON}
 */

exports.create = async (req, res, next) => {
  try {
    const product = await new Product(req.body);
    product.save();
    res.status(200).send({
      message: "product created",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      throw new Error("products not found");
    }
    return res.send({
      success: true,
      message: "products retrieved successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    let {_id,...updateduser} = req?.body;
    let ProductData;
    ProductData = await Product.findByIdAndUpdate(_id, updateduser);
    if (!ProductData) {
      throw new Error("Product not found");
    }
    return res.send({
      success: true,
      message: "Product Updated!",
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!products) {
      throw new Error("product not found");
    }
    return res.send({
      success: true,
      message: "product deleted successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};
