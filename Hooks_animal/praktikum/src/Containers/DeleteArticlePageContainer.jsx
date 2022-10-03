import React, { useEffect } from "react";
import { useState } from "react";
import { client, getArticles } from "../api";
import DeleteArticlePage from "../Components/DeleteArticlePage";

const DeleteArticlePageContainer = () => {
    const [Articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [articleId, setArticleId] = useState("");

    const handleInputChangeId = (id) => {
        setArticleId(id);
    };

    useEffect (() => {
        getArticles()
        .then((res) => {
            setArticles(res);
            setLoading(false);
        })
        .catch((arr) => {
            console.log(err);
        });
    }, [loading]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await client.delete(articleId);
        setLoading(true);
    }

    return (
        <DeleteArticlePage 
                            articles={articles} 
                            articleId={articleId} 
                            handleInputChangeId={handleInputChangeId}
                            handleSubmit={handleSubmit} 
                            loading={loading}/>
    )
}

export default DeleteArticlePageContainer;