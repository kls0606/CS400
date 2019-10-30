const express = require('express');
const router = express.Router();
const request = require('request');
const weather = require('../configs/config');


const getURL = weather.url;
const id = weather.id;
const key = weather.key;
const method = weather.method;

router.get('/', function (req, res, next) {
    const options = {
        url: getURL,
        qs: {
            app_id: id,
            app_key: key,
        },
        method: method
    };

    request(options, function (error, response, body) {
        const jsonBody = JSON.parse(body);
        res.render('ps4', jsonBody);
    });
});

module.exports = router;
