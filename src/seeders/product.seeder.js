const mongoose = require("mongoose");
const axios = require("axios");
const Product = require("../models/product.model");
const { mongo } = require("../config/vars");
// Function to fetch a random image URL from Unsplash
const getRandomImage = async () => {
  try {
    const response = await axios.get(
      "https://source.unsplash.com/featured/?product"
    );
    return response.request.res.responseUrl;
  } catch (error) {
    console.error("Error fetching random image:", error.message);
    throw error;
  }
};

// Function to seed products
const seedProducts = async () => {
  try {
    // Delete existing products
    await Product.deleteMany();

    // Seed 10 products
    const products = [];
    for (let i = 1; i <= 10; i++) {
      const image = await getRandomImage();
      const product = {
        name: `Product ${i}`,
        image,
        description: `Description for Product ${i}`,
      };
      products.push(product);
    }

    // Insert products into the database
    const createdProducts = await Product.insertMany(products);
    console.log("Products seeded successfully:", createdProducts);
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};

// Connect to the MongoDB database
(async () => {
  try {
    const conn = await mongoose.connect(mongo.uri);
    console.log(`mongodb is connected ${conn.connection.host}`);
    // Call the seedRoles function
    await seedProducts();
    mongoose.connection.close();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
})();
