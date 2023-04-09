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
    skills: [Skill]!
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
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
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
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
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    tutors: [Tutor]
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
    # This is creating anew skill for database
    addNewSkill(skillName: [String]!): Skill
    # This allows us to assign a skill from database to user
    addSkillToUser(userId: ID!, skillName: [String]!): User
    # This will remove a skill from a user
    removeSkillFromUser(userId: ID!, skillId: ID!): User
    # This will permanently delete a skill from database (ONLY USE IN TESTING)
    removeSkill(skillId: ID!): Skill

    login(username: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
