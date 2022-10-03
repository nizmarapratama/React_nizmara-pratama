import axios from "axios";

export const client = axios.create({
    baseURL: "https://skilled-owl-43.hasura.app/api/rest/Article",
    headers: {"x-hasura-admin-secret": "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3"}
});

export const getArticles = async () => {
    const response = await client.get("/");
    return response.data._onetomany_article;
};