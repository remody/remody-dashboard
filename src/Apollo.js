import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const uploadLink = createUploadLink({ uri: "http://localhost:4000" });

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
	console.log(token);
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ""
		}
	};
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(uploadLink)
});

export default client;
