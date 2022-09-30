import React from "react";
import axios from "axios";
import { useEffect } from "react";

const CreateArticlePagecontainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData]

    const client = axios.create({
        baseURL: "https://skilled-owl-43.hasura.app/api/rest/Article",
        headers: {"x-hasura-admin-secret": "2ZOJSdVMI90F8l6draL9uVcBO9PXIaovnSBoMQXisW70uOLKVjwg6RUVWLWM8SB3"}
    })

    const getArticle = async () => {
        const response = await client.get("/");
        setArticles(response.data._onetomany_article);
    };

    useEffect(() => {
        getArticle()
        .then(() => {
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