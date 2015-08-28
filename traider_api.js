var request = require('request');


var fs = require('fs');
var accessToken = fs.readFileSync(__dirname + '/access_token.txt').toString()

exports.a = function (apiUrl, apiMethod) {
	request({
    url: apiUrl, 
    method: apiMethod, 
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
}

