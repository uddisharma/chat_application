const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class UserController {
  static register = async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      res.status(209).send("User already registered");
    } else {
      try {
        const user = await UserModel.create({
          username,
          email,
          password: hashPassword,
        });
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  };
  static login = async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ token, user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

module.exports = UserController;
