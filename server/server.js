const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const express = require('express');
const socketIO = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mimi',
        text: 'Hey',
        createdAt: 123123
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from Server');
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up ${port}`);
});

