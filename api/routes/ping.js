var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + ' to ' +
            req.client.localAddress + ":" + req.client.localPort);
});

module.exports = router;
