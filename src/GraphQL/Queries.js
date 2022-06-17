import { gql } from "@apollo/client";

export const LOAD_PAST_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      id
      links {
        mission_patch
      }
      details
      rocket {
        rocket_name
        rocket {
          id
          name
          type
          stages
          description
          active
        }
      }
    }
  }
`;

export const LOAD_ONE_PAST_LAUNCH = gql`
  {
    launchesPast(limit: 1) {
      mission_name
      id
      links {
        mission_patch
      }
      details
      rocket {
        rocket_name
        rocket {
          id
          name
          type
          stages
          description
          active
        }
      }
    }
  }
`;

export const FIND_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launchesPast(find: { id: $id }) {
      mission_name
      id
      links {
        mission_patch
      }
      details
      rocket {
        rocket_name
        rocket {
          id
          name
          type
          stages
          description
          active
        }
      }
    }
  }
`;
