const http = require('http');
const fs = require('fs');
const {Server} = require('socket.io');

let httpServer = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf-8', async (err, data) => {
        if (err) {
            console.log(err);
        }
        res.writeHead(200, 'text/html');
        res.write(data);
        return res.end();
    })
})

httpServer.listen(3000, () => {
    console.log('Server is running');
});

const io = new Server(httpServer);
let usernames = {};
let rooms = ['Ada'];
io.sockets.on('connection', socket => {
    socket.on('add-user', (username, room) => {
        socket.username = username;
        socket.room = room;
        usernames[username] = username;
        socket.join(rooms);
        if (room != null && rooms.indexOf(room) === -1) {
            socket.emit('create-room', room);
        }
        socket.emit('update-chat', 'SERVER', `You are joined to join ${room}`);
        socket.broadcast.to(room).emit('update-chat', 'SERVER', `${username} is joined to ${room}!`);
        socket.emit('update-rooms', rooms, room);
    });
    socket.on('switch-room', (newRoom) => {
        socket.leave(socket.room);
        socket.join(newRoom);
        socket.emit('update-chat', 'SERVER', `You are has joined ${newRoom}`);
        socket.broadcast.to(newRoom).emit('update-chat', 'SERVER', `${socket.username} has left the room`);
        socket.room = newRoom;
        socket.broadcast.to(newRoom).emit('update-chat', 'SERVER', `${socket.username} is join the ${newRoom}`);
        socket.emit('update-rooms', rooms, newRoom);
    });
    socket.on('create', room => {
        rooms.push(room);
    });
    socket.on('send-chat', (message) => {
        io.sockets.in(socket.room).emit('update-chat', socket.username, message);
    });
    socket.on('disconnect', () => {
        delete usernames[socket.username];
        io.sockets.emit('update-users', usernames);
        socket.broadcast.emit('update-chat', 'SERVER', socket.username + ' has disconnected');
        socket.leave(socket.room);
    });
})