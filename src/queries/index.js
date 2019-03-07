import gql from "graphql-tag";

export const ALL_USER = gql`
	query {
		users {
			id
			name
			email
		}
	}
`;
