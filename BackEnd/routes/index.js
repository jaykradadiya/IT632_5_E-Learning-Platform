var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.statusCode=200;
  res.send("hello world")
});

module.exports = router;
