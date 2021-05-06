var express = require('express');
var router = express.Router();
const login_controller=require('../controller/login.controller')
const signup_controller=require('../controller/signup.controller')
router.get('/signup',signup_controller.register_form)
router.post('/signedup',signup_controller.register)
router.get('/',login_controller.login_form)
router.post('/login',login_controller.loginchk)
router.get('/login',login_controller.redirectLogin)
router.get('/edit-profile',login_controller.edit_profile)
router.post('/edit-profile',login_controller.edited_profile)
router.get('/logout',login_controller.logout)
module.exports = router;
