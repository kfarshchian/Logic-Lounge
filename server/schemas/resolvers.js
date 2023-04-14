
const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Tutor, Skill, Chatroom } = require("../models");
const { signToken } = require("../utils/auth");

const { AuthenticationError } = require('apollo-server-express');
const { User, Tutor, Skill, Chatroom } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //Resolver for finding chatrooms
    chatrooms: async () => {
      return Chatroom.find();
    },
    //Resolver for finding single chatroom by name
    chatroom: async (parent, { chatroomName }, context) => {
      return Chatroom.findOne({ chatroomName: chatroomName });
    },
    users: async () => {
      return User.find().populate("skills");
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    skills: async () => {
      return Skill.find();
    },
    tutors: async () => {
      // const url = new URL(context.headers.referer).origin;
      // const tutor = Tutor.find();

      // for (let i = 0; i < tutor.length; i++) {
      //     images: [`${url}/images/${image}`]
      //   };


      return Tutor.find();
    },
    tutor: async (parent, { _id }) => {
      return Tutor.findOne( {_id });
    },
  },

  Mutation: {
    addTutor: async (parent, { tutorName, skills, image, bio }) => {
      const tutor = await Tutor.create({ tutorName, skills, image, bio });
      return tutor;
    },
    //Adds a message to a chatroom
    addMessage: async (
      parent,
      { chatroomName, messageText, userId },
      context
    ) => {

      const user = await User.findById(userId);
      const chatroomInstance = await Chatroom.findOne({
        chatroomName: chatroomName,
      });
      //Creates a new message document from the messages subschema
      const newMessage = chatroomInstance.messages.create({
        messageText: messageText,
        messageAuthor: user.username,
      });
      chatroomInstance.messages.push(newMessage);
      //save updated chatroom instance
      chatroomInstance.save();
      return chatroomInstance.toJSON();
    },
    //Adds a message to a chatroom
    addMessage: async (
      parent,
      { chatroomName, messageText, userId },
      context
    ) => {

      const user = await User.findById(userId);
      const chatroomInstance = await Chatroom.findOne({
        chatroomName: chatroomName,
      });
      //Creates a new message document from the messages subschema
      const newMessage = chatroomInstance.messages.create({
        messageText: messageText,
        messageAuthor: user.username,
      });
      chatroomInstance.messages.push(newMessage);
      //save updated chatroom instance
      chatroomInstance.save();
      return chatroomInstance.toJSON();
    },
    removeTutor: async (parent, { tutorId }) => {
      return Tutor.findOneAndDelete({ _id: tutorId });
    },
    updateTutor: async (parent, { tutorId, tutorName, bio, image, skills }) => {
      return Tutor.findOneAndUpdate({
        _id: tutorId,
        tutorName,
        bio,
        image,
        skills,
      });
    },

// need to add img again
    updateUser: async (parent, { userId, skills }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            skills: skills,
          },
        }
      );
    },


    updateUser: async (parent, { userId, username, img, skills }) => {
      return User.findOneAndUpdate({
        _id: userId,
        img,
        username,
        skills,
      });
    },
    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    addUser: async (parent, { username, email, password, skills }) => {
      const user = await User.create({ username, email, password, skills });
      const token = signToken(user);
      return { token, user };
    },
    // This creates a new skill in database DOESN'T ASSIGN TO USER
    addNewSkill: async (parent, { skillName }) => {
      return Skill.create({ skillName: skillName });
    },
    // Allows you to add a skill from database to a user
    addSkillToUser: async (parent, { userId, skillId, skillNames }) => {
      const skills = await Skill.find({ name: { $in: skillNames } });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            skills: skills.map((skill) => {
              skill._id;
              skill.skillName;
            }),
          },
        },
        {
          new: true,
        }
      );
      return { ...user };
    },
    // This will allow you to add an image to a user
    addImageToUser: async (parent, { userId, image }) => {
      return User.findByIdAndUpdate(userId, { image: image }, { new: true });
    },
    // This will remove skills from a user
    removeSkillFromUser: async (parent, { skillId, userId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { skills: { _id: skillId } } },
        { new: true }
      );
    },
    // This will remove a skill from the database
    removeSkill: async (parent, { skillId }) => {
      return Skill.findByIdAndDelete(skillId).lean();
    },
    // This allows users to login
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      // If the username isn't found throw following error
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      const correctPw = await user.isCorrectPassword(password);
      // If the password doesn't match the one in the db throw error
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },

  },
};

module.exports = resolvers;
