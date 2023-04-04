const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  skillName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
    trim: true,
  },
  skillDescription: {
    type: String,
    required: true,
    trim: true,
  }
});

const Skill = model('Skill', skillSchema);

module.exports = Skill
