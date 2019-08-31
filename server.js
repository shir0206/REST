var express = require('express');
var app = express();
var fs = require("fs");

var msg = "test1";

app.use('/', express.static(__dirname + '/'));

/**
 * Read data from file in the server
 */
app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

/**
 * Read data from server
 */
app.post('/readMsg', function(req, res) {

    msg = req.query.msg;

    console.log(msg);
    res.end(msg);
})

/**
 * Read data from server
 */
app.get('/', function(req, res) {
    res.end("hello");
})

/**
 * Calculate in the server sum of two numbers
 */
app.get('/sum', function(req, res) {

    // Recieve parameters from the query
    var num1 = req.query.a;
    var num2 = req.query.b;

    // Calculate the sum
    sum = calculate(parseInt(num1), parseInt(num2));

    // Return result
    console.log(sum);
    res.end(String(sum));

})

app.get('/watch', function(req, res) {
    var param1 = req.query.v;
    console.log(param1);

    res.end(param1);
})

app.get('/watch/:id', function(req, res) {
    var param = req.params.id
    res.end(param);
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

/**
 * Helper function to calculate sum of two numbers
 * @param {number} x 
 * @param {number} y 
 */
function calculate(x, y) {
    sum = x + y;
    return sum;
}

/**
 * Calculate in the server multiply of three numbers
 */
app.get('/multiply', function(req, res) {

    // Recieve parameters from the query
    var numA = req.query.numA;
    var numB = req.query.numB;
    var numC = req.query.numC;

    // Calculate the multiply
    //result = multiply(parseInt(numA), parseInt(numB), parseInt(numC));
    result = (parseInt(numA) * parseInt(numB) * parseInt(numC));

    // Return result
    console.log(result);
    res.end(String(result));
})

/**
 * Helper function to calculate multiply of 3 numbers
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
function multiply(a, b, c) {
    result = (a * b * c);
    return result;
}