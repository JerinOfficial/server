const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { User } = require("./model/users");
const { Admin } = require("./model/admin");
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
  const { email, password, description, team, role, userId } = req.body;
  try {
    await User.create({ email, password, description, team, role, userId });
    res.send({ status: "registered", data: req.body });
  } catch (error) {
    console.log(error);
  }
});
app.get("/", async (req, res) => {
  const allUsers = await User.find({});
  res.send({ data: allUsers });
});
app.post("/create", async (req, res) => {
  const { email, password } = req.body;
  try {
    const allUsers = await Admin.find({});
    const temp = allUsers.find((i) => i.email === email);
    if (temp?.email === email) {
      res.send({ status: "userExists" });
    } else {
      await Admin.create({ email, password, role: "Administrator" });
      res.send({ status: "registered", data: req.body });
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/admin", async (req, res) => {
  const allUsers = await Admin.find({});
  res.send({ data: allUsers });
});
