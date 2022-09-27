const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/config.js");
const itemModel = require("./models/itemModel.js");
const items = require("./utils/data.js");
const { deleteMany } = require("./models/itemModel.js");
require("colors");

// config
dotenv.config();
connectDb();

// seeder function
const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log("All items added".bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}.bgRed.inverse`);
    process.exit(1);
  }
};

importData();
