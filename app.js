//Modules
var request = require('request');
var fs = require('fs');

var accessToken = fs.readFileSync(__dirname + '/access_token.txt').toString()


//Simple GET Call
request({
    url: 'https://sandbox.tradier.com/v1/markets/quotes?symbols=spy', //URL to hit
   //  qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET', 
    headers: { 
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});