const MessageController =require("../controllers/MessageController")
const router = require("express").Router();
router.post("/sendMessage", MessageController.sendMessage);
router.post("/getmessages", MessageController.getMessages);
module.exports = router;