const mongoose = require("mongoose");
const User = require("../models/user.model");
const { mongo } = require("../config/vars");
const Role = require("../models/role.model");
const { ObjectId } = mongoose.Types;

// Function to seed products
const seedSuperAdmin = async () => {
  try {
    // Check if users exist
    const existingUsers = await User.find();
    if (existingUsers.length === 0) {
      // If users don't exist, seed sample users
      const superAdminRole = await Role.findOne({ name: "super-admin" });
      const usersData = {
        firstname: "super",
        lastname: "admin",
        email: "super.admin@mail.com",
        password: "admin",
        userRole: ObjectId(superAdminRole._id),
      };
      const user = await new User(usersData);
      await user.save();
      console.log("Super Admin seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

// Connect to the MongoDB database
(async () => {
  try {
    const conn = await mongoose.connect(mongo.uri);
    console.log(`mongodb is connected ${conn.connection.host}`);
    // Call the seedRoles function
    await seedSuperAdmin();
    mongoose.connection.close();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
})();
