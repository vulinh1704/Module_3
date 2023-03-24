const http = require('http');
const fs = require('fs');
const {Server} = require('socket.io');
const Connection = require('./connection');

function getMessage() {
    const connection = Connection.createConnectionMySQL();
    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connect Success');
        }
    });
    return new Promise((resolve, reject) => {
        connection.query(`select *
                          from chat`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function createMessage(room) {
    const connection = Connection.createConnectionMySQL();
    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connect Success');
        }
    });
    return new Promise((resolve, reject) => {
        connection.query(`insert into chat(name, message)
                          values ('${room.name}', '${room.message}')`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const httpServer = http.createServer((req, res) => {
    fs.readFile('./views/index.html', 'utf-8', async (err, data) => {
        if (err) {
            console.log(err);
        }
        let chatHistory = await getMessage();
        let history = '';
        chatHistory.map((room, index) => {
            history += `<div>${room.name} : ${room.message}</div>`
        });
        data = data.replace('{history}', history);
        res.writeHead(200, 'text/html');
        res.write(data);
        return res.end();
    })
});

const io = new Server(httpServer);
const users = [];
io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });
    socket.on('send-chat-message', message => {
        let room = {
            message: message,
            name: users[socket.id]
        }
        socket.broadcast.emit('chat-message', room);
        createMessage(room).then(
            () => {
                console.log('Insert success')
            }
        );
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });
})

httpServer.listen(3000, () => {
    console.log('Server is running !!!');
})