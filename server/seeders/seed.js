const db = require('../config/connection');
const { User, Thought, Tutor } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');
const tutorSeeds = require('./tutorSeeds.json')

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Tutor.create(tutorSeeds);
    await User.create(userSeeds);

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
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
