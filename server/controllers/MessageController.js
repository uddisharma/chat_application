const MessageModel = require("../models/Messages");
class MessageController {
  static sendMessage = async (req, res) => {
    try {
      const { text, from, to } = req.body;
      const message = await MessageModel.create({
        text: text,
        users: [from, to],
        sender: from,
      });
      if (message) {
        return res.status(201).json({ message: message });
      } else {
        return res.status(500).json({ error: "Someting went wrong" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  static getMessages = async (req, res) => {
    try {
      const { from, to } = req.body;
    //   console.log(req.body);
      const messages = await MessageModel.find({
        users: { $all: [from, to] },
      }).sort({ updatedAt: 1 });
      if (messages) {
        const projectedmsg = messages.map((e) => {
          return {
            fromSelf: e.sender.toString() == from,
            message: e.text,
          };
        });
        res.send(projectedmsg);
      } else {
        return res.status(500).json({ error: "Someting went wrong" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
module.exports = MessageController;
