"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));
const server = http.createServer(app);
const io = require('socket.io')(server);
io.on('connect', (socket) => {
    console.log('a user conn');
    setTimeout(() => {
        socket.emit('tst', 'aaaaaa');
    }, 2000);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('tst2', () => {
        console.log('tst222222222222');
    });
});
server.listen(4000, () => {
    console.log('listening on *:4000');
});
//# sourceMappingURL=index.js.map