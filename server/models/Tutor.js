const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const tutorSchema = new Schema({
  tutorName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  img: {
    data: Buffer,
    contentType: String
  },
  bio:{
    type: String,
  },
  languages: {
    type: String,
    required: true,
  },
  
});

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;