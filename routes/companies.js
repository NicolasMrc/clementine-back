var express = require('express');
var router = express.Router();

var companyController = require('../controllers/CompanyController')

router.get('/', companyController.findAll);
router.get('/:id', companyController.findOne);
router.post('/', companyController.store);
router.delete('/:id', companyController.destroy);
router.patch('/:id', companyController.update);
router.post('/:company_id/users/:user_id', companyController.addUser)

module.exports = router;
