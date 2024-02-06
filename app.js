const express = require('express');
const mongoose = require('./dbConn')
const mainRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const redis = require('./redisConn')
const { Server } = require('socket.io');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const io = new Server(server);
const path = require("path");

app.use(bodyParser.json());

const port = 3000
server.listen(port, ()=> {
    console.log(`Your server is up on port ${port}`)
}
)
app.use(express.static(path.join(__dirname, 'images')))
io.on('connection', (socket) => {

  // Set a name for the socket
  socket.on('set-name', (username) => {
    socket.name = username;
    console.log(`User ${username} connected`);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
io.on('connection', (socket) => {
  socket.on('chat message', (msg, username) => {
    io.emit('chat message',  { name: username, message: msg });
  });
});
app.use('/', mainRoutes);

