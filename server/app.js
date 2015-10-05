/**
 * Created by Lauren on 10/2/15.
 */
var express = require('express');
var path = require('path');

var app = express();

//serves public files
app.use(express.static(path.join(__dirname, './public')));

//serves index file
app.get('/', function(request, response){
    console.log("hello");
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/', function(request, response){
    response.send("Hello");
});

//this will be getting the console.log from the client side ajax call
app.get('/note/:name?', function(request, response, next){
    var name = request.params.name;
    console.log("Added note: " + name);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


module.exports = app;
