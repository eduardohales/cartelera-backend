const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.route('/user')
    .post(userController.addUser);

router.route('/user/all')
    .get(userController.listUser);

module.exports = router;