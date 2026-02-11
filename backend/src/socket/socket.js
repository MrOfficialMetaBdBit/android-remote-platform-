const socketIO = require('socket.io');

const configureSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    socket.on('device_status', (data) => {
      io.emit('device_status_update', data);
    });

    socket.on('command_sent', (data) => {
      io.emit('command_received', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

module.exports = configureSocket;
