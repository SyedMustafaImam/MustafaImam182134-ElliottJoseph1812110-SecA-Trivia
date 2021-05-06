const express = require('express')
const router=express.Router()
const issue_controller=require('../controllers/bookDashBoard.controller')
router.post('/issuance/add',issue_controller.addbook)
router.post('/:id/update',issue_controller.update_book)
router.post('/:id/delete',issue_controller.book_delete)
router.get('/list',issue_controller.book_list)

module.exports=router;
