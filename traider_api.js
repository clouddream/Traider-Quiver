var request = require('request');
var Q = require('q');


var fs = require('fs');
var accessToken = fs.readFileSync(__dirname + '/access_token.txt').toString()

exports.a = function (apiUrl, apiMethod) {
    var deferred = Q.defer()
	request({
    url: apiUrl, 
    method: apiMethod, 
    headers: { 
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
}, function(error, response, body){
    if (error) deferred.reject(error)
    else deferred.resolve(body)
});
    return deferred.promise
}

