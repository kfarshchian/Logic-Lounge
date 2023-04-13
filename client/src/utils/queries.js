import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      skills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($_id: String!) {
    user(_id: $_id) {
      _id
      username
      email
      skills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
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
query Query {
  tutors {
    _id
    tutorName
    skills
    image
    bio
  }
}
`;

export const QUERY_SKILLS = gql`
  query getSkills {
    skills {
      _id
      skillName
    }
  }
`;
