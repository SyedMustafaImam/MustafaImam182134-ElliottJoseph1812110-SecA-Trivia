var express = require('express');
var router = express.Router();
const login_controller=require('../controller/login.controller')
const signup_controller=require('../controller/signup.controller')
router.get('/signup',signup_controller.register_form)
router.post('/signedup',signup_controller.register)
router.get('/',login_controller.login_form)
router.post('/login',login_controller.loginchk)
module.exports = router;
