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

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(data: { email: $email, password: $password }) {
			token
			user {
				id
				name
				email
			}
		}
	}
`;
