import React from "react";
import { client, getArticle } from "../api";
import { useEffect } from "react";
import { useState } from "react";

const CreateArticlePagecontainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [formData, setFormData] = useState({
        authorId: "",
        id: "",
        rating: "",
        title: ""
    });

    useEffect(() => {
        getArticle()
        .then((res) => {
            setArticles(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [loading]);

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const articleLocation = articles.findIndex((article) => article.id === +formData.id);
        if ((articleLocation) >= 0 ) {
            await client.put(id, {
                author_id: formData.authorid,
                rating: formData.rating,
                title: formData.title
            });
        } else {
        await client.post("/", {
            author_id: FormData.authorId,
            id: formData.id,
            rating: formData.rating,
            title: formData.title
        });
        }
        setLoading(true);
    }

    return (
        <CreateArticlePage 
        articles={articles}
        formData={formData}
        handleSubmitFormData={handleSubmitFormData}
        handleSubmit={handleSubmit}
        loading={loading} />
    )
}

export default CreateArticlePageContainer;