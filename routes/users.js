var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Cool page route
router.get('/cool', function(req, res) {
  res.send('Youre so cool');
});

module.exports = router;
