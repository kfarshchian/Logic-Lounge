const { Schema, model } = require('mongoose');

const tutorSchema = new Schema({
  tutorName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String
  },
  bio:{
    type: String,
  },
  skills: [{
    type: String,
    required: true,
  }],
  
});

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;