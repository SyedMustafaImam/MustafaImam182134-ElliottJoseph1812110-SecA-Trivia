const router = require('.')
const issue_controller=require('../controllers/issuanceDashBoard.controller')
router.get('/issuance/add',issue_controller.AddBooks)
router.post('/:id/update',issue_controller.ModifyBook)
router.post('/:id/delete',issue_controller.DeleteBook)
router.get('/list',issue_controller.ListBooks)

module.exports=router;