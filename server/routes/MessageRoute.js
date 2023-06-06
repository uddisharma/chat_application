const MessageController =require("../controllers/MessageController")
const router = require("express").Router();
router.post("/sendMessage", MessageController.sendMessage);

module.exports = router;