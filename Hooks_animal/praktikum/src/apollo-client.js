import { ApolloClient, AppoloClient, InMemoryCache } from "@apollo/client"

const AppoloClient = new ApolloClient ({
    uri: "https://skilled-owl-43.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":
        "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3",
    }
});

export default ApolloClient;