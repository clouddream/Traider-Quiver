// Modules
var request = require('request');
var fs = require('fs');

// Import
var api = require('./traider_api');

// Sample API call
api.a('https://sandbox.tradier.com/v1/markets/quotes?symbols=spy', 'GET').then(console.log, console.error);
