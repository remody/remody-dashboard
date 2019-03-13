import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: process.env["REMODY_SERVER"]
		? process.env["REMODY_SERVER"]
		: "http://localhost:4000"
});

export default client;
