const mongoose = require('mongoose')
const messageSchema = require('./Message');

const chatroomSchema = new mongoose.Schema({
  chatroomName:{
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 50,
    trim: true,
    unique: true,
  },
  messages: [messageSchema]
})

const Chatroom = mongoose.model('Chatroom',chatroomSchema);

module.exports = Chatroom;