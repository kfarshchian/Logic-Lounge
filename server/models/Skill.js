const { Schema, model } = require('mongoose');

const skillSchema = new Schema(
  {
    skillName: {
      type: String,
      unique: true,
      required: true,
      minlength: 1,
      trim: true,
    },
    tutors: [{
      type: Schema.Types.ObjectId,
      ref: 'Tutor',
    }],
    users: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

skillSchema.virtual('tutorCount').get(function () {
  return this.tutors.length;
});
skillSchema.virtual('userCount').get(function () {
  return this.users.length;
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
