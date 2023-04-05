const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  skillName: {
    type: String,
    // Added unique so we don't have the same skills multiplying in DB
    unique: true,
    required: true,
    minlength: 1,
    trim: true,
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
