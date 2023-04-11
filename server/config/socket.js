const socketIO = require('socket.io');
const {Chatroom} = require('../models')

const createSocketServer = (httpServer) => {
  const io = socketIO(httpServer);

  //listen for connection events
  io.on('connection', (socket) => {
    // console.log('A user has connected');
    
    // Listen for incoming "QUERY_CHATROOMS" events
    socket.on('QUERY_CHATROOMS', async () => {
      console.log('Received query: QUERY_CHATROOMS');
      // console.log(Chatroom.find({}).lean());
      try{
        const chatrooms = await Chatroom.find({}).lean();
        socket.emit('RETURN_DATA', JSON.stringify(chatrooms));
      }catch(err){
        socket.emit('Received query: QUERY_CHATROOMS', {err: err});
      }
    });

    // Listen for incoming "ADD_MESSAGE"
    socket.on('ADD_MESSAGE', async ({messageText,messageAuthor,chatroomId}) => {
      console.log('Received query: ADD_MESSAGE')
      const newMessage = {
        messageText,
        messageAuthor
      }
      // console.log(newMessage);
      const chatroomInstance = await Chatroom.findById(chatroomId);
      // console.log(chatroomInstance);
      // console.log(chatroomInstance.messages.length);
      if(chatroomInstance.messages.length > 300){
        chatroomInstance.messages.shift();
      }
      // console.log(chatroomInstance.messages.create(newMessage));
      chatroomInstance.messages.push(chatroomInstance.messages.create(newMessage));
      await chatroomInstance.save();
      const chatrooms = await Chatroom.find().lean();
      socket.emit('RETURN_DATA', JSON.stringify(chatrooms))
    })

    // Listen for disconnect events
    socket.on('disconnect', () => {
      // console.log('A user has disconnected');
    });
  });

  return io;
};

module.exports = createSocketServer;