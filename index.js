var connect = require('connect');
var http = require('http');
var url = require('url');
var proxy = require('proxy-middleware');

var app = connect();

// marketplace-operators-dashboard
app.use('/operators/media', proxy(url.parse('http://localhost:8679/media')));
app.use('/operators', proxy(url.parse('http://localhost:8679/operators')));

// fireplace
app.use('/fireplace', proxy(url.parse('http://localhost:8675/')));
app.use('/', proxy(url.parse('http://localhost:8675/')));

// zamboni
app.use('/developers', proxy(url.parse('http://localhost:8111/developers')));
app.use('/media', proxy(url.parse('http://localhost:8111/media')));

http.createServer(app).listen(8678);
