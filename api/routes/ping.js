var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  console.log("----------------------");
  console.log(res);
  res.send('PING');
});

module.exports = router;
