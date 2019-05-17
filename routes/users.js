var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController')

router.get('/', userController.findAll);
router.get('/{id}', userController.findOne);
router.post('/', userController.store);
router.delete('/{id}', userController.destroy);
router.patch('/{id}', userController.update);

module.exports = router;
