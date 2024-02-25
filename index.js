const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.js");

const app = express();

const PORT = 8000;

mongoose
  .connect(
    "mongodb+srv://amirashrafwrites:amir1991@amirashraf.wkbm6we.mongodb.net/blogtube"
  )
  .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server started at PORT: ${PORT}`);
});
