import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`
    query {
        books {
            title
        }
    }
`;
