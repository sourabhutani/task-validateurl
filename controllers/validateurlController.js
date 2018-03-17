var express= require('express');
var app=express();
var request = require('request');

exports.validateUri = (req,res) => {
    // Setting URL and headers for request
    var url = req.params.uri;
    // Return new promise 
    return new Promise((resolve, reject) => {
     // Do async job
        request(url, (error, response, body) => {
           // console.log(url);
            if (error) {
                res.json({'error' : 'Invalid url' });
               // reject(err);
            }
            if (response) {
                res.json({'success' : 'url is working fine' });
                // resolve(JSON.parse(body));
            }
        })
    });
}
