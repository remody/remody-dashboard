import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const uploadLink = createUploadLink({
<<<<<<< HEAD
    uri: "http://ec2-52-78-35-89.ap-northeast-2.compute.amazonaws.com:4000/"
=======
    uri: "http://ec2-52-78-35-89.ap-northeast-2.compute.amazonaws.com/graphql/"
>>>>>>> 25f10c0f511a19df4352cd53047d27ddf7767839
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
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
