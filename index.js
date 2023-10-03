const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { User } = require("./model/users");
app.use(cors());
app.use(express.json());
app.listen(4000, () => {
  console.log("server connected");
});
const MONGOURL = process.env.MongoURL;
mongoose
  .connect(
    "mongodb+srv://jerin25:Jerin2001@cluster0.bzglc9k.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  });
app.post("/add", async (req, res) => {
  const { name, email, password, userType } = req.body;
  try {
    await User.create({ name, email, password, userType });
    res.send({ status: "registered", data: req.body });
  } catch (error) {
    console.log(error);
  }
});
app.get("/", async (req, res) => {
  const allUsers = await User.find({});
  res.send({ data: allUsers });
});
