const mongoose = require("mongoose");
const userSchma = new mongoose.Schema({
  email: String,
  password: String,
  description: String,
  team: String,
  role: String,
});

const User = mongoose.model("User", userSchma);
exports.User = User;
