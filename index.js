var express = require('express');
var app = express();

app.get('/', function(req,res)
{
    res.send("Hi, Welcome to Express);
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listining at http://%s:%s',host,port);
});