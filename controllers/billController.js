const itemModel = require("../models/billModel.js");

const addBillsController = async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.send("Bill created");
  } catch (error) {
    res.send("Error");
  }
};

module.exports = {
  addBillsController,
};
