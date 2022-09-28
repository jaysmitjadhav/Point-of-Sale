const mongoose = require("mongoose");

// schema design
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamp: true }
);

const Users = mongoose.model("users", userSchema);
module.exports = Users;
