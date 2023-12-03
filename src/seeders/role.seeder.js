const mongoose = require("mongoose");
const Role = require("../models/role.model");
const { mongo } = require("../config/vars");

// Function to seed roles
const seedRoles = async () => {
  try {
    // Define roles data
    const rolesData = [
      {
        name: "super-admin",
        permissions: [
          "get:user:all",
          "create:user",
          "update:user",
          "delete:user",
          "create:product",
          "delete:product",
          "update:product",
          "get:product:all",
        ],
      },
      {
        name: "admin",
        permissions: [
          "get:user:all",
          "create:user",
          "update:user",
          "create:product",
          "delete:product",
          "update:product",
          "get:product:all",
        ],
      },
      {
        name: "user",
        permissions: ["get:product:all"],
      },
    ];

    // Delete existing roles
    await Role.deleteMany();
    // Insert new roles
    const createdRoles = await Role.insertMany(rolesData);
    console.log("Roles seeded successfully:", createdRoles);
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
};

// Connect to the MongoDB database
(async () => {
  try {
    const conn = await mongoose.connect(mongo.uri);
    console.log(`mongodb is connected ${conn.connection.host}`);
    // Call the seedRoles function
    seedRoles();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
})();
