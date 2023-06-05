const UserController= require('../controllers/UserController')
const router= require('express').Router();
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/setAvatar/:id', UserController.setAvatar);
router.get('/contacts',UserController.getAllUsers);
router.get('/user/:id', UserController.getUserById)
module.exports= router;