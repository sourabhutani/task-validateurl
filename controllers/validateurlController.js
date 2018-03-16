var express= require('express');
var app=express();
var request = require('request');

exports.validateUri = (req,res) => {
var url = req.params.uri;

request(url, function (error, response, body) {
  if(error){
    res.json({'error' : 'Invalid url' });
  }
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received

});

}
