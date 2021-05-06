const express = require('express')
const router=express.Router()
<<<<<<< HEAD
const issue_controller=require('../controllers/issuanceDashBoard.controller')
router.post('/issuance/add',issue_controller.AddBooks)
router.post('/:id/update',issue_controller.ModifyBook)
router.post('/:id/delete',issue_controller.DeleteBook)
router.get('/list',issue_controller.ListBooks)
=======
const issue_controller=require('../controllers/bookDashBoard.controller')
router.post('/issuance/add',issue_controller.addbook)
router.post('/:id/update',issue_controller.update_book)
router.post('/:id/delete',issue_controller.book_delete)
router.get('/list',issue_controller.book_list)
>>>>>>> dadc570418f890ee674c80f9b7df9e798bbb0ee1

module.exports=router;
