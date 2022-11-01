import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://apt-antelope-15.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "3KW2hpmmg1XwJb86FaFU4RvsNuaRsOfPyFekCj3eNFpgjoaDDQNSOFh3fMZxJJEQ"
    }
});

export default client;