const {Schema, model} = require('mongoose');
const dateFormate = require('../utils/dateFormat');

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: 'Message must have text!',
    minLength: 1,
    maxlength: 280,
    string: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormate(timestamp),
  },
  messageAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Message must have author!',
  }
})

const chatroomSchema = new Schema({
  chatroomName: {
    type: String,
    required: 'Chatroom must have a name!',
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  messages: [messageSchema]
})

const Chatroom = model('Chatroom', chatroomSchema);

module.exports = Chatroom