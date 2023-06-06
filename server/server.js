const express = require('express');
const app = require("express")();
const mongoose = require("mongoose");
const cors= require("cors");
require("dotenv").config();
const UserRoutes= require('./routes/UserRoute')
const MessageRoutes= require("./routes/MessageRoute")
mongoose
  .connect("mongodb://127.0.0.1/chat-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(cors());
app.use(express.json())
app.use("/",UserRoutes)
app.use("/",MessageRoutes)
app.listen(5000, () => {
  console.log("Server is running");
});
