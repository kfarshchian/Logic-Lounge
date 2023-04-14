const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chatroom {
    _id: ID
    chatroomName: String
    messages: [Message]!
  }
  type Message {
    _id: ID
    messageText: String
    createdAt: String
    messageAuthor: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    skills: [Skill]
    image: String
  }
  type Tutor {
    _id: ID
    tutorName: String
    image: String
    bio: String
    skills: [String]
  }
  type Skill {
    _id: ID
    skillName: String
    tutors: [String]
    users: [String]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(_id: String!): User
    skills: [Skill]
    skill(skillName: String!): Skill
    tutors: [Tutor]
    tutor(_id: String!): Tutor
    chatrooms: [Chatroom]
    chatroom(chatroomName: String!): Chatroom
  }
  type Mutation {
    #Adds a message to the given chatroom, by the specified user
    addMessage(
      chatroomName: String!
      messageText: String!
      userId: ID!
    ): Chatroom
    addTutor(
      tutorName: String!
      image: String
      bio: String
      skills: [String]!
    ): Tutor
    removeTutor(tutorId: ID!): Tutor
    updateTutor(
      tutorId: ID!
      tutorName: String
      image: String
      bio: String
      skills: String
    ): Tutor
    addUser(
      username: String!
      email: String!
      password: String!
      skills: [String]!
    ): Auth

    # This allows user to update their profile
    updateUser(skills: String!, img: String!): User
    # This is creating anew skill for database
    addNewSkill(skillName: String!): Skill
    # This allows us to assign a skill from database to user
    addSkillToUser(userId: ID!, skillId: [ID]!): User
    # This will add an image to a user
    addImageToUser(userId: ID!, image: String!): User
    # This will remove a skill from a user
    removeSkillFromUser(userId: ID!, skillId: ID!): User
    # This will permanently delete a skill from database (ONLY USE IN TESTING)
    removeSkill(skillId: ID!): Skill
    # This will allow a user to login
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
