import React, { useEffect } from "react";
import { client, getArticle } from "../api";
import ReadArticlePage from "../Components/ReadArticlePage";
import { useState } from "react";

ReadArticlePageContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

        const setReload = () => {
            setLoading(true);
        };

        useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [loading]);

    return (
        <ReadArticlePage articles={articles} loading={loading} setReload={setReload}/>
    );
};

export default ReadArticlePageContainer;