const express = require('express');
const router = express.Router();
const request = require('request');
const currEX = require('../configs/config');


router.get('/', function (req, res, next) {
    const options = {
        method: 'GET',
        url: currEX.app_url,
        qs: {
                access_key: currEX.app_key,
        },
    }

    request(options, function (error, response, body) {
        const jsonBody = JSON.parse(body);
        res.render('ps4', jsonBody);
    });
});

module.exports = router;
