var express = require('express');
var app = express();
var fs = require("fs");

app.use('/', express.static(__dirname + '/'));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
   });
})

app.get('/', function (req, res) {
	res.end( "hello" );
})

app.get('/sum', function (req, res) {
	var num1 = req.query.a;
	var num2 = req.query.b;
	sum=calculate(num1,num2);
	console.log(sum);
	res.end(sum);
})

app.get('/watch', function (req, res) {
	var param1 = req.query.v;
	console.log(param1);

	res.end(param1);
})

app.get('/watch/:id', function (req, res) {
	var param = req.params.id
	res.end(param);
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

function calculate(x,y)
{
	sum=x+y;
	return sum;
}