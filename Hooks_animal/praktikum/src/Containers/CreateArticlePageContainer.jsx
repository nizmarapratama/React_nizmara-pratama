import React from "react";
import { getArticle } from "../api";
import { useEffect, useState } from "react";
import CreateArticlePage from "../Components/CreateArticlePage";
import { gql, useMutation } from "@apollo/client";
import {client, getArticle} from "../api"

const InsertArticle = gql`
//     mutation MyMutation($author_id: Int = "author_id", $id Int = "id",$rating: Int = "rating", $title: String = "title" ) {
//         insert__onetomany_article(objects: {author_id: $author_id, id: $id, rating: $rating, title: $title}) {
//             returning {
//                 author_id
//                 id
//                 rating
//                 title
//             }
//         }
//     }

mutation MyMutation($subjects:[_onetomany_article_insert_input!]!){
    insert_onetomany_article(object s: $objects) {
        returning {
            id,
            author_id
            rating
            title
        }
    }
}
`;

const UpdateArticle = gql`
    mutation MyMutation(
        $id: Int,
        $author_id: Int!,
        $title: String!,
        $rating: Int!
    ) {
        update__onetomany_article(
            where: {id: {_eq: $id}}
            _set: {author_id: author_id, rating: $rating, title: $title}
        ) {
            returning {
                id,
                author_id,
                title,
                rating
            }
        }
    }
`;

const QueryArticle = gql`
    query MyQuery(
        $id: Int!,
    ) {
        Query_onetomany_article(
            where: {id: {_eq: $id}}
        ) {
            retruning {
                id,
                author_id,
                title,
                rating
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
        const articleLocation = articles.findIndex((article) => article.id === +formData.id);
        if (articleLocation >= 0) {
            await UpdateArticle ({
                variables: {
                    author_id: +formData.authorId,
                    id: +formData.id,
                    title: formData.title,
                    rating: +formData.rating,
                }
            })
        } else {
            await InsertArticle({
                variables: {
                    objects: {
                        author_id: +formData.authorId,
                        id: +formData.id,
                        title: formData.title,
                        rating: +formData.rating,
                    }
                }
            })
            .then((res) => {
                setArticles(prevState => [...prevState, res.data.insert__onetomany.article.returning[0]])
            })
        }



    //     await InsertArticle({
    //         variables: {
    //             object: {
    //                 author_id: +formData.authorId,
    //                 id: +formData.id,
    //                 title: formData.title,
    //                 rating: +formData.rating,
    //         }
    //     }
    // })
    //     .then((res) => {
    //         setArticles(prevState => [...prevState, res.data.insert__onetomany_article.returning[0]])
    //     })



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

export default CreateArticlePagecontainer;