const express = require('express');
const router = express.Router();
const request = require('request');
const currEX = require('../configs/config');
const url = 'mongodb://localhost:27017/ps4';

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(url);
var schema = new mongoose.Schema({
     quotes : {USDEUR: Number}
});
var dummySchema = new mongoose.Schema({
    name: String
});

var Quotes = mongoose.model("Quotes", schema);
var dummy = mongoose.model("dummy", dummySchema)
var dumb = new dummy({name: "tester"});
dumb.save(function (err, data) {
    if (err) return console.error(err);
})


router.get('/', function (req, res, next) {
        Quotes.find().then(quote=> {
            if (quote.length == 0) {
                const options = {
                    method: 'GET',
                    url: currEX.app_url,
                    qs: {
                        access_key: currEX.app_key,
                    },
                }

                request(options, function (error, response, body) {
                    const jsonBody = JSON.parse(body);
                    var newQuotes = new Quotes({quotes: {USDEUR: jsonBody.quotes.USDEUR}});
                    newQuotes.save(function (err, quote) {
                        if (err) return console.error(err);
                        console.log("quotes saved to mongodb")
                    })
                    //console.log(jsonBody);
                    jsonBody["name"] = "API";
                    res.render('ps4', jsonBody);
                });

            }
            else {
                console.log("getting data from database")
                const jsonBody = quote
                jsonBody[0]["name"]= "Database"
                res.render('ps4', jsonBody[0])
            }
        })
});


module.exports = router;
