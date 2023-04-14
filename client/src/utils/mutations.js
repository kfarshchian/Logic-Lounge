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

 mutation Mutation($skills: [String], $img: String, $userId: ID!) {
  updateUser(skills: $skills, img: $img, userId: $userId) {
    _id
    skills {
      skillName
  mutation updateUser($username: String!, $skills: String!, $img: String!) {
    addUser(username: $username, skills: $skills, img: $img) {
      token
      user {
        _id
        username
        Skills
        img
      }
      }
  }
`

export const ADD_IMAGE = gql`
  mutation addImage($userId: ID!, $image: String!) {
    addImageToUser(userId: $userId, image: $image) {
      username
      image
    }
  }
}
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const MATCH_TUTOR = gql`
  query getTutors {
    tutors {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

// export const ADD_PHOTO = gql`
//   query addPhoto {
    
//   }
// `;
