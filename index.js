'use strict';
const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http);

app.use(express.static('static'));

socketIO.on('connection', function (socket) {
    console.log('yay connection');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
