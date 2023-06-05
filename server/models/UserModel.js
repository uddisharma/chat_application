const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAvatarset: {
    type: Boolean,
    default: false,
  },
  Avatar: {
    type: String,
    // default:
    //   "https://img.freepik.com/premium-vector/man-face-logo-with-vector_96853-578.jpg?size=626&ext=jpg&ga=GA1.1.261178553.1685726782&semt=ais",
  },
});
const userModel = new mongoose.model("User", UserSchema);
module.exports = userModel;
