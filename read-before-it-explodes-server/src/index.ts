import { Socket } from 'dgram';
import * as express from 'express'
import * as http from 'http'
const cors = require("cors");

const app = express()

// const cors = require('cors');
// app.use(cors({ origin: '*' }))

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

const server = http.createServer(app)
const io: SocketIO.Server = require('socket.io')(server)


io.on('connection', (socket) => {
    console.log('a user connsd');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('set-username', (username) => {
        console.log(`set-username: ${username}`);
    });
});


server.listen(4000, () => {
    console.log('listening on *:4000');
});