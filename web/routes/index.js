var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  try {

    http.get('http://api:3000/ping', function(response) {
      var json = '';

      response.on('data', function(chunk){
          json += chunk;
      });

      response.on('end', function() {
          //var jsonResponse = JSON.parse(json);
          res.status(200).json([{response1: `Hello from ${req.client.remoteAddress}:${req.client.remotePort} to ${req.client.localAddress}:${req.client.localPort}`},
          {response2: json}]);
      });
    });
  } catch (e) {
    res.status(500).json({error: "Failed to connect to api."})
    console.log(e);
  }
});

module.exports = router;
