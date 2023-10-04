const mongoose = require("mongoose");
const adminSchma = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

const Admin = mongoose.model("Admin", adminSchma);
exports.Admin = Admin;
