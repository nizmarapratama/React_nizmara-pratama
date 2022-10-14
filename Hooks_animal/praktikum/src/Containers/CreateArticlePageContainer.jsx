import React from "react";
import { getArticle } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import CreateArticlePage from "../Components/CreateArticlePage";
import { gql, useMutation } from "@apollo/client";
import {client, getArticle} from "../api"

const InsertArticle = gql`
    mutation MyMutation($author_id: Int = "author_id", $id Int = "id",$rating: Int = "rating", $title: String = "title" ) {
        insert__onetomany_article(objects: {author_id: $author_id, id: $id, rating: $rating, title: $title}) {
            returning {
                author_id
                id
                rating
                title
            }
        }
    }
`;

const CreateArticlePagecontainer = () => {
    const [articles, setArticles] = useState([]);
    const [InsertArticle, { loading: loadingIsert}] = useMutation(InsertArticle)
    const [loading, setLoading] = useState(true);
  
    const [formData, setFormData] = useState({
        authorId: "",
        id: "",
        rating: "",
        title: ""
    });

    const [handleChangeFormData] =(label, newValue) => {
        setFormData({
            ...formData,
            [label]: newValue
        })
    }

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
        evt.preventDefault();
        InsertArticle({
            variables: {
                object: {
                    title: formData.title,
                    rating: formData.rating,
                    id: formData.id,
                    author_id: formData.authorId
                }
            }
        })
        // const articleLocation = articles.findIndex((article) => article.id === +formData.id);
        // if ((articleLocation) >= 0 ) {
        //     await client.put(id, {
        //         author_id: formData.authorid,
        //         rating: formData.rating,
        //         title: formData.title
        //     });
        // } else {
        // await client.post("/", {
        //     author_id: FormData.authorId,
        //     id: formData.id,
        //     rating: formData.rating,
        //     title: formData.title
        // });
        // }
        // setLoading(true);
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