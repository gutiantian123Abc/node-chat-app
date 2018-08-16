let socket = io();

socket.on('connect', () => {
    console.log('Connected to Server');
    socket.emit('createMessage', {
        from: 'William',
        text: 'Yup'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from Server');
});

socket.on('newMessage', (message) => {
    console.log('new message', message);
});


