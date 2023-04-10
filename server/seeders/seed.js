const db = require('../config/connection');
const { User, Thought, Tutor, Chatroom  } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');
const tutorSeeds = require('./tutorSeeds.json')
const chatroomSeeds = require('./chatroomSeeds.json')
const generateMessage = require('./messageSeeds')

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Tutor.create(tutorSeeds);
    const users =await User.create(userSeeds);

    await Chatroom.collection.drop();

    // const chatrooms = await Chatroom.insertMany(chatroomSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }

    for (let i = 0; i < chatroomSeeds.length; i++){
      const chatroomInstance = await Chatroom.create(chatroomSeeds[i]);
      // console.log(chatroomInstance);
      for(let i = 0; i < (Math.floor(Math.random()*35)+15);i++) {
        const username = users[Math.floor(Math.random()*users.length)].username;
        const messageText = generateMessage(Math.floor(Math.random()*15)+15);
        const newMessage = chatroomInstance.messages.create({messageText: messageText, messageAuthor: username});
        // console.log(newMessage);
        chatroomInstance.messages.push(newMessage);
      }
      await chatroomInstance.save();
      console.log(chatroomInstance);
    }

    console.log('Chatrooms seeded!')

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
