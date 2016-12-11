var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);


app.use(function(req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();

})

app.get('/', function(req, res){

    res.send("Hello world");

});




io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen('8080', function(){
    console.log('stated the server on 8080');
})