const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    img: String
    bio: String
    skills: String
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
    user(username: String!): User
    skills: [Skill]
    skill(skillName: String!): Skill
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    tutors: [Tutor]
  }

  type Mutation {
    addTutor(
      tutorName: String!
      img: String
      bio: String
      skills: String!
    ): Tutor
    removeTutor(tutorId: ID!): Tutor
    updateTutor(
      tutorId: ID!
      tutorName: String
      img: String
      bio: String
      skills: String
    ): Tutor
    addUser(username: String!, email: String!, password: String!): Auth
    # This is creating anew skill for database
    addNewSkill(skillName: String!): Skill
    # This allows us to assign a skill from database to user
    addSkillToUser(userId: ID!, skillId: ID!): User
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
