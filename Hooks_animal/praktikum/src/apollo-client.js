import { ApolloClient, InMemoryCache } from "@apollo/client"

import { split, httpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws/index.js";

const httpLink = new HttpLink ({
    uri: "https://skilled-owl-43.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
        "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3"
    }
});

const wsLink = new WebSocketLink ({
    uri: "https://skilled-owl-43.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret":
                "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3"
        }
    }
 }
});

const splitLink = split(
    ({query}) => {
        const definiton = getMainDefinition(query);
        return (
            definiton.kind === "OperationDefinition" && definiton.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const AppoloClient = new ApolloClient ({
    link: splitLink,
    ceche: new InMemoryCache()
})

// const AppoloClient = new ApolloClient ({
//     uri: "https://skilled-owl-43.hasura.app/v1/graphql",
//     cache: new InMemoryCache(),
//     headers: {
//         "x-hasura-admin-secret":
//         "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3",
//     }
// });

export default ApolloClient;