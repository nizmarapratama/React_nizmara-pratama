import { ApolloClient, InMemoryCache } from "@apollo/client";

const ApolloClient = new ApolloClient({
    uri: "https://wired-hedgehog-70.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    Headers: {
        "x-hasura-admin-secret":
        "4GG61xsYJgxM7QJ2TNpx6HFyGg2QmGsVf3TiAEGZLh6OiJ1HycMzaQlJTVvUb0h3"
    }
});

export default ApolloClient;