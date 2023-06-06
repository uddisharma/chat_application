const MessageModel = require("../models/Messages");
class MessageController {
  static sendMessage = async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
module.exports = MessageController;
