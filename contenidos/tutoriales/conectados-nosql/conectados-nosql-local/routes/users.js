var express = require('express');
var request = require("request");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var options = {
        method: 'GET',
        url: 'https://conectadosnosql-1501.restdb.io/rest/log',
        headers: {
            'cache-control': 'no-cache',
            'x-apikey': 'c8bb8cfe8d78fefa92f0b72041ab6a63b9b2d'
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });
});

module.exports = router;