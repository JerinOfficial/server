const mongoose = require("mongoose");
const userSchma = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
});

const User = mongoose.model("User", userSchma);
exports.User = User;
