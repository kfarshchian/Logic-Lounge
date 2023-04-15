import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $skills: [String]!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      skills: $skills
    ) {
      user {
        _id
        username
        email
        skills {
          skillName
        }
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $skills: [String]!) {
    updateUser(userId: $userId, skills: $skills) {
      username
      skills {
        skillName
      }
    }
  }
`;

export const MATCH_TUTOR = gql`
  query getTutors {
    tutors {
      _id
      createdAt
    }
  }
`;
