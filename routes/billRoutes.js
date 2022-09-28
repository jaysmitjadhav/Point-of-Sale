const express = require("express");
const { addBillsController } = require("../controllers/billController");

const router = express.Router();

// routes
// Method - post
router.post("/add-bills", addBillsController);

module.exports = router;
