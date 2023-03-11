const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {
    res.type('text/plain')
    res.send('Hello World')
});

module.exports = router;