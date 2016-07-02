var express = require('express');
var proxy = require('express-http-proxy');

var app = express();

app.use('/', express.static('./dist/'));

app.use('/services/',
	proxy('http://pakonatsrv.mooo.com/', {
		forwardPath: function(req) {
			var uri = require('url');
			uri = 'http://pakonatsrv.mooo.com:8080/fortnightly' + uri.parse(req.url.replace('services/','fortnightly/')).path;
			console.log(uri);
			return  uri;
		},
		port: 8080
	})
);


app.listen(9001);
