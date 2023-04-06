const socketIO = require('socket.io');
const {Chatroom} = require('../models')

const createSocketServer = (httpServer) => {
  const io = socketIO(httpServer);

  //listen for connection events
  io.on('connection', (socket) => {
    // console.log('A user has connected');
    
    // Listen for incoming "test-query" events
    socket.on('QUERY_CHATROOMS', async () => {
      console.log('Received query: QUERY_CHATROOMS');
      // console.log(Chatroom.find({}).lean());
      try{
        const chatrooms = await Chatroom.find({}).lean();
        socket.emit('QUERY_CHATROOMS', chatrooms);
      }catch(err){
        socket.emit('QUERY_CHATROOMS', {err: err});
      }
    });

    // Listen for disconnect events
    socket.on('disconnect', () => {
      // console.log('A user has disconnected');
    });
  });

  return io;
};

module.exports = createSocketServer;