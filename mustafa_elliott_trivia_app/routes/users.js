var express = require('express');
var router = express.Router();
const login_controller=require('../controller/login.controller')
const signup_controller=require('../controller/signup.controller')
router.get('/signup',signup_controller.register_form)
router.post('/signedup',signup_controller.register)
router.get('/',login_controller.login_form)
router.post('/login',login_controller.loginchk)
<<<<<<< HEAD
router.get('/logout',login_controller.logout)
=======
>>>>>>> dadc570418f890ee674c80f9b7df9e798bbb0ee1
module.exports = router;
