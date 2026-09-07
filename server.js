const express = require('express');
const app = express();

// Middleware bypass warning page Ngrok otomatis
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static(__dirname));

let tournamentData = {};

io.on('connection', (socket) => {
    socket.emit('updateData', tournamentData);

    socket.on('sendData', (data) => {
        tournamentData = data;
        io.emit('updateData', tournamentData);
    });
});

const PORT = 8080;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`================================================`);
    console.log(`🚀 SERVER GALAHAMUY BERHASIL JALAN!`);
    console.log(`📱 Buka Control Center di HP: http://localhost:8080/index.html`);
    console.log(`🎥 Buka Overlay di TikTok:   http://localhost:8080/overlay.html`);
    console.log(`================================================`);
});