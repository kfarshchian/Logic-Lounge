const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new mongoose.Schema({
  messageText: {
    type: String,
    minLength: 1,
    maxLength: 500,
    required: 'Message must have text!',
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  messageAuthor: {
    type: String,
    required: true,
  }
})

module.exports = messageSchema;