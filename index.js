'use strict';
const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http);

app.use(express.static('static'));

socketIO.on('connection', function (socket) {
    socket.on('chat message', function (message) {
        console.log('somebody said ' + message);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
