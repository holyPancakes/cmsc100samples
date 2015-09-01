//index.js   BASIC SERVER
var express = require('express');//express  -  nodeJS library
var app = express();

app.use(require('body-parser')());//YEAY
app.use(require('method-override')());//use to simulate put and delete method
app.use(require(__dirname + '/config/router')(express.Router()));


var server = app.listen(5000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

/*

BASIC ROUTING

ROUTING - refers to determining how an application responds to a client request to a particular endpoint

which is a URL requested through a specific HTTP method (GET, POST, PUT, DELETE, etc)

*/