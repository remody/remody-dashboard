import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({ uri: "http://localhost:4000" })
});

export default client;
