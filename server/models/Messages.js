const mongoose = require("mongoose");
const MessageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const MessageModel= new mongoose.model("Message", MessageSchema);

module.exports = MessageModel;