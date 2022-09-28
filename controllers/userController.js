const userModel = require("../models/userModel.js");

const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, password, verified: false });
    res.status(200).send("Log In Success");
  } catch (error) {
    console.log(error);
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send("Registration Successful");
  } catch (error) {
    res.status(400).send("Error", error);
  }
};

module.exports = {
  loginController,
  registerController,
};
