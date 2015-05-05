var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(__dirname + '/public'));
server.use(express.static(path.join(__dirname, 'public')));

server.get('/simulator-webservice/hello', function(req, res){
	console.log('path hello - ' + getTime());
    res.sendFile(__dirname + '/hello.json');
});
 
var port = 8888;
server.listen(port, function() {
   console.log('server listening on port ' + port);
});

function getTime() {
	var date = new Date();

	return date;	
}

/*

To Start up: node simu-express.js

To check the JSON out: http://localhost:8888/simulator-webservice/hello

*/

