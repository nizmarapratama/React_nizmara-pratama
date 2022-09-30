import React, { useEffect } from "react";
import axios from "axios";
import ReadArticlePage from "../Components/ReadArticlePage";
import { useState } from "react";

ReadArticlePageContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const client = axios.create({
        baseURL: "https://skilled-owl-43.hasura.app/api/rest/Article",
        headers: {"x-hasura-admin-secret": "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3"}
    });

    useEffect(() => {
        const getArticles = async () => {
            const response = await client.get("/");
            setArticles(response.data._onetomany_article);
        };

        const setReload = () => {
            setLoading(true);
        }

        useEffect(() => {
            getArticle()
        })
        getArticles()
        .then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <ReadArticlePage articles={articles} loading={loading}/>
    );
};

export default ReadArticlePageContainer;