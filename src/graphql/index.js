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

export const CREATE_USER = gql`
	mutation createUser($name: String!, $email: String!, $password: String!) {
		createUser(data: { name: $name, email: $email, password: $password }) {
			token
			user {
				id
				name
				email
			}
		}
	}
`;

export const ME = gql`
	query me {
		me {
			name
			email
		}
	}
`;
