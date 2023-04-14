const db = require('../config/connection');
const { User, Tutor, Chatroom  } = require('../models');
const userSeeds = require('./userSeeds.json');
const tutorSeeds = require('./tutorSeeds.json')
const chatroomSeeds = require('./chatroomSeeds.json')


db.once('open', async () => {
  try {

    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Tutor.create(tutorSeeds);
    await User.create(userSeeds);
    await Chatroom.collection.drop();
    await Chatroom.insertMany(chatroomSeeds);

    console.log('Database seeded!')

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
