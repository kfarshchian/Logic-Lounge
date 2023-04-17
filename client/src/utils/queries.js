import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query Users($id: ID!) {
    user(_id: $id) {
      username
      skills {
        skillName
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
   query Query($id: ID!) {
  user(_id: $id) {
    _id
    username
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

export const QUERY_IMAGE = gql `
  query getImage {
    image
  }
`;