var express = require('express');
var router = express.Router();

var http = require('http');

/* GET click. */
router.get('/', function(req, res, next) {
    res.render('click', { code: 'XXX-XXX-XXX', url: 'http://fuck.u' });
});

module.exports = router;
