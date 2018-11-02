const express = require('express');
const router = express.Router();

const indexController = require('../controller/index');

router.route('/')
    .get(indexController.index);

module.exports = router;