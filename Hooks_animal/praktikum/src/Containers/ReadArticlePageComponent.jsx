import React, { useEffect } from "react";
import { client, getArticle } from "../api";
import ReadArticlePage from "../Components/ReadArticlePage";
import { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GetArticles = gql`
        query MyQuery {
            _onetomany_article {
                id
                rating
                title
                author_id
            }
        }
     `;

ReadArticlePageContainer = () => {
    const [getOneToManyArticles, {data, loading, error}] = useLazyQuery(GetArticles);
    // const { data, loading, error } = useQuery(GetArticles);
    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        refetch();
    }
    useEffect (() => {
        getOneToManyArticles()
    }, [])

        // const setReload = () => {
        //     setLoading(true);
        // };

    //     useEffect(() => {
    //     getArticles()
    //     .then((res) => {
    //         setArticles(res);
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }, [loading]);

    return (
        <ReadArticlePage articles={data} loading={loading}/>
    );
};

export default ReadArticlePageContainer;