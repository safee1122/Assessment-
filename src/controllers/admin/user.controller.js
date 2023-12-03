const User = require("../../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectId } = mongoose.Types;
/**
 * Create a fresh user into the database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {JSON}
 */

exports.create = async (req, res, next) => {
  try {
    const user = await new User(req.body);
    user.save();
    res.status(200).send({
      message: "user created",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    let { id } = req.params;
    const userData = await User.findById(ObjectId(id), {
      password: 0,
    }).populate("userRole");
    if (!userData) {
      throw new Error("user not found");
    }
    return res.send({
      success: true,
      message: "Profile retrieved successfully",
      userData,
    });
  } catch (error) {
    next(error);
  }
};

exports.editProfile = async (req, res, next) => {
  try {
    let id = req?.body?._id;
    let password;
    let userData;
    if (req?.body?.password) {
      const hash = await bcrypt?.hash(req?.body?.password, 10);
      password = hash;
      userData = await User.findByIdAndUpdate(id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: password,
        role: req.body.role,
      });
    } else {
      userData = await User.findByIdAndUpdate(id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
      });
    }

    if (!userData) {
      throw new Error("Something went wrong");
    }

    return res.send({
      success: true,
      message: "Profile Updated!",
      // userData,
    });
  } catch (error) {
    next(error);
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    const userData = await User.find().populate("userRole");
    if (!userData) {
      throw new Error("users not found");
    }
    return res.send({
      success: true,
      message: "Users retrieved successfully",
      userData,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("user not found");
    }
    return res.send({
      success: true,
      message: "user deleted successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
// for uploading user profile image

// exports.imageUpload = async (req, res, next) => {
//   try {
//     let { filename } = req.file;
//     let { id } = req.body;
//     let user = await User.findByIdAndUpdate(
//       id,
//       { profileImage: filename },
//       { new: true }
//     );
//     if (!user) {
//       throw new Error("Something went wrong");
//     }

//     if (user) {
//       return res.status(200).send({
//         success: true,
//         message: "Updated Successfully",
//       });
//     }

//     if (!userData) {
//       throw new Error("Something went wrong");
//     }

//     return res.send({
//       success: true,
//       message: "Profile Updated!",
//       userData,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
