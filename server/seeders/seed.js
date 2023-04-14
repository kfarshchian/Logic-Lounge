const db = require('../config/connection');
const { User, Tutor, Chatroom, Skill  } = require('../models');
const userSeeds = require('./userSeeds.json');
const tutorSeeds = require('./tutorSeeds.json')
const chatroomSeeds = require('./chatroomSeeds.json')
const skillSeeds = require('./skillSeeds.json')


db.once('open', async () => {
  try {

    await User.collection.drop();
    await Tutor.collection.drop();
    await Tutor.create(tutorSeeds);
    await User.create(userSeeds);

    await Skill.collection.drop();
    await Skill.insertMany(skillSeeds);
    console.log('Skills Seeded!')
    
    await Chatroom.collection.drop();
    await Chatroom.insertMany(chatroomSeeds);
    console.log('Chatrooms Seeded!');

    console.log('Database seeded!')

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
